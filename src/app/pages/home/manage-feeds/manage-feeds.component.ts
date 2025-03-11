import { Component, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormFeedsService } from './service/form-feeds.service';
import { FEED_DATA } from 'src/app/shared/constants/feeds-constants';
import { FeedData } from 'src/app/shared/models/feed-data';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'app-manage-feeds',
  templateUrl: './manage-feeds.component.html',
  styleUrls: ['./manage-feeds.component.scss'],
})
export class ManageFeedsComponent implements OnInit {
  manageFeedsForm!: FormGroup;
  feed: FeedData[] = FEED_DATA;
  displayFeeds!: boolean;
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
    {
      img: '../../../assets/images/zoro.jpg',
    },
    {
      img: '../../../assets/images/mask.jpg',
    },
  ];

  constructor(
    private router: Router,
    private formFeedService: FormFeedsService,
    private snackBar: SnackbarService
  ) {}

  ngOnInit(): void {
    this.initializeManageFeeds();
    this.addContent();
  }

  initializeManageFeeds() {
    this.manageFeedsForm = this.formFeedService.initializeForm();
  }

  getControl(index: number, field: string) {
    return (this.formContent.at(index) as FormGroup).get(field);
  }

  get formContent(): FormArray {
    return this.manageFeedsForm.get('content') as FormArray;
  }

  addContent() {
    this.formContent.push(this.formFeedService.formControls());
  }

  onManage() {
    if (this.manageFeedsForm.invalid) {
      this.manageFeedsForm.markAllAsTouched();
      this.snackBar.openCustomSnackBar(
        'report_problem',
        'Wrong Credentials',
        'X',
        'failed'
      );
      return;
    }

    this.formFeedService.manageContent(this.formContent.value);
    this.router.navigate(['/home']);
    this.snackBar.openCustomSnackBar(
      'report_problem',
      'Feeds Added',
      'X',
      'success'
    );
  }
}
