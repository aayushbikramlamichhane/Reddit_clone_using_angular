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
    this.addContent();
  }

  initializeManageFeeds() {
    this.manageFeedsForm = this.fb.group({
      image: ['../../../assets/images/man.jpg'],
      content: this.fb.array([]),
    });
  }
  getControl(index: number, field: string) {
    return (this.content.at(index) as FormGroup).get(field);
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
            Validators.maxLength(1)
          ],
        ],
        name: ['', [Validators.required]],
        body: ['', [Validators.required]],
        upvoteCount: [0],
        commentCount: [0],
      })
    );
  }

  onManage() {
    if (this.manageFeedsForm.invalid) {
      // console.log(this.manageFeedsForm);
      this.manageFeedsForm.markAllAsTouched();
      return;
    }
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
