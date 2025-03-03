import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FEED_DATA } from 'src/app/constants/feeds-constants';
import { FeedData } from 'src/app/models/feed-data';
import { nameValidator } from 'src/app/validators/name.validator';
import { FormFeedsService } from './service/form-feeds.service';
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

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private formFeedService: FormFeedsService
  ) {}

  ngOnInit(): void {
    this.initializeManageFeeds();
    this.addContent();
  }

  initializeManageFeeds() {
    // this.manageFeedsForm = this.fb.group({
    //   content: this.fb.array([])
    // });
    this.manageFeedsForm = this.formFeedService.initializeForm();
  }

  getControl(index: number, field: string) {
    return (this.formContent.at(index) as FormGroup).get(field);
  }

  get formContent(): FormArray {
    return this.manageFeedsForm.get('content') as FormArray;
  }

  addContent() {
    this.formContent.push(
      // this.fb.group({
      //   logo: ['', [Validators.required, Validators.maxLength(1)]],
      //   name: ['', [Validators.required, nameValidator()]],
      //   content: ['', [Validators.required]],
      //   img: ['../../../assets/images/bat.jpg', [Validators.required]],
      //   upvoteCount: [0],
      //   commentCount: [0],
      //   comment: this.fb.array([]),
      // })
      this.formFeedService.formControls()
    );
  }

  onManage() {
    if (this.manageFeedsForm.invalid) {
      this.manageFeedsForm.markAllAsTouched();
      return;
    }

    this.formFeedService.manageContent(this.formContent.value);
    this.router.navigate(['/home']);
  }
}
