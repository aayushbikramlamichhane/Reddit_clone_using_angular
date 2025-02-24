import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FEED_DATA } from 'src/app/constants/feeds-constants';
import { FeedData } from 'src/app/models/feed-data';
import { nameValidator } from 'src/app/validators/name.validator';
// import { numberValidator } from 'src/app/validators/number.validator';

@Component({
  selector: 'app-manage-feeds',
  templateUrl: './manage-feeds.component.html',
  styleUrls: ['./manage-feeds.component.scss'],
})
export class ManageFeedsComponent implements OnInit {
  manageFeedsForm!: FormGroup;
  feed: FeedData[] = FEED_DATA;
  images = [
    {
      img: '../../../assets/images/man.jpg',
    },
    {
      img: '../../../assets/images/bat.jpg',
    },
    {
      img: '../../../assets/images/luffy.jpg',
    },
    {
      img: '../../../assets/images/naruto.jpg',
    },
    {
      img: '../../../assets/images/onepiece.jpeg',
    },
  ];

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.initializeManageFeeds();
    this.addContent();
    // this.patchImage();
  }

  initializeManageFeeds() {
    this.manageFeedsForm = this.fb.group({
      content: this.fb.array([]),
    });
  }

  getControl(index: number, field: string) {
    return (this.content.at(index) as FormGroup).get(field);
  }

  get content(): FormArray {
    return this.manageFeedsForm.get('content') as FormArray;
  }

  // patchImage() {
  //   this.content.get('images')?.patchValue('../../../assets/images/bat.jpg');
  // }

  addContent() {
    this.content.push(
      this.fb.group({
        logo: ['', [Validators.required, Validators.maxLength(1)]],
        name: ['', [Validators.required, nameValidator()]],
        body: ['', [Validators.required]],
        images: ['../../../assets/images/bat.jpg', [Validators.required]],
        upvoteCount: [0],
        commentCount: [0],
        comment: this.fb.array([]),
      })
    );
  }

  onManage() {
    if (this.manageFeedsForm.invalid) {
      this.manageFeedsForm.markAllAsTouched();
      return;
    }

    this.content.value.forEach((item: any) => {
      this.feed.unshift({
        logo: item?.logo,
        name: item?.name,
        content: item?.body,
        img: item?.images,
        upvoteCount: item?.upvoteCount,
        commentCount: item?.commentCount,
        comment: item?.comment,
      });
    });
    console.log(this.content);

    console.log(this.feed);
    this.router.navigate(['/home']);
  }
}
