import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { feedData } from 'src/app/constants/feeds-constants';

@Component({
  selector: 'app-manage-feeds',
  templateUrl: './manage-feeds.component.html',
  styleUrls: ['./manage-feeds.component.scss'],
})
export class ManageFeedsComponent implements OnInit {
  manageFeedsForm!: FormGroup;
  feed: any[] = feedData;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.initializeManageFeeds();
  }

  initializeManageFeeds() {
    this.manageFeedsForm = this.fb.group({
      image: ['../../../assets/images/man.jpg'],
      content: this.fb.array([]),
    });
  }

  get content(): FormArray {
    return this.manageFeedsForm.get('content') as FormArray;
  }
  addContent() {
    this.content.push(
      this.fb.group({
        logo: [
          '',
          [
            Validators.required,
            Validators.maxLength(1),
            Validators.minLength(1),
          ],
        ],
        name: [''],
        body: [''],
        // image: [''],
        upvoteCount: [''],
        commentCount: [''],
      })
    );
  }

  onManage() {
    const feedImage = this.manageFeedsForm.get('image')?.value; 

    this.content.value.forEach((item: any) => {
      this.feed.unshift({
        logo: item?.logo,
        name: item?.name,
        content: item?.body,
        img: feedImage, 
        upvoteCount: item?.upvoteCount,
        commentCount: item?.commentCount,
      });
    });

    console.log(this.feed);
    this.router.navigate(['/home']);
  }
}
