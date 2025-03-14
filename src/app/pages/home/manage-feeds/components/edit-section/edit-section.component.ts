import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { FormFeedsService } from '../../service/form-feeds.service';
import { FeedsApiServiceService } from '../../../feeds/services/feeds-api-service.service';
import { FeedData } from 'src/app/shared/models/feed-data';

@Component({
  selector: 'app-edit-section',
  templateUrl: './edit-section.component.html',
  styleUrls: ['./edit-section.component.scss'],
})
export class EditSectionComponent implements OnInit {
  editFeedsForm!: FormGroup;
  userId!: number;
  feedItem!: FeedData;
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
    private route: ActivatedRoute,
    private feedService: FeedsApiServiceService,
    private router: Router,
    private formFeedService: FormFeedsService
  ) {}

  ngOnInit() {
    this.getId();
    this.initializeEditForm();
    this.addContent();
    this.fetchItem();
  }

  initializeEditForm() {
    this.editFeedsForm = this.formFeedService.initializeForm();
  }

  addContent() {
    this.formContent.push(this.formFeedService.formControls());
  }

  get formContent(): FormArray {
    return this.editFeedsForm.get('content') as FormArray;
  }

  getId() {
    this.route.params.subscribe((res) => {
      this.userId = parseInt(res['id']);
    });
  }

  fetchItem() {
    this.feedService.fetchFeedById(this.userId).subscribe((item) => {
      if (item) {
        this.feedItem = item;
        this.formContent.patchValue([
          {
            logo: this.feedItem?.logo,
            name: this.feedItem?.name,
            content: this.feedItem?.content,
            img: this.feedItem?.img,
          },
        ]);
      }
    });
  }

  onSave() {
    if (this.formContent.invalid) return;
    console.log(this.formContent.value);

    this.feedItem.logo = this.formContent.value[0].logo;
    this.feedItem.name = this.formContent.value[0].name;
    this.feedItem.content = this.formContent.value[0].content;
    this.feedItem.img = this.formContent.value[0].img;
    this.router.navigate(['home']);
  }

  onCancel() {
    this.router.navigate(['home']);
  }
}
