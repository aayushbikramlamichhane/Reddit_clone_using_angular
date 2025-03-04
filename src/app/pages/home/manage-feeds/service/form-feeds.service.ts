import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FEED_DATA } from 'src/app/shared/constants/feeds-constants';
import { FeedData } from 'src/app/shared/models/feed-data';
import { nameValidator } from 'src/app/shared/validators/name.validator';

@Injectable({
  providedIn: 'root',
})
export class FormFeedsService {
  feed: FeedData[] = FEED_DATA;
  feedForm !: FormGroup;

  constructor(private fb: FormBuilder) {}

  initializeForm(){
    return this.feedForm = this.fb.group({
      content: this.fb.array([]),
    });
  }
  

  manageContent(content: FeedData[]) {
    content.forEach((item: FeedData) => {
      this.feed.unshift({
        id: item?.id,
        logo: item?.logo,
        name: item?.name,
        content: item?.content,
        img: item?.img,
        upvoteCount: item?.upvoteCount,
        commentCount: item?.commentCount,
        comment: item?.comment,
      });
    });
  }

  formControls() {
    return this.fb.group({
      logo: ['', [Validators.required, Validators.maxLength(1)]],
      name: ['', [Validators.required, nameValidator()]],
      content: ['', [Validators.required]],
      img: ['../../../assets/images/bat.jpg', [Validators.required]],
      upvoteCount: [0],
      commentCount: [0],
      comment: this.fb.array([]),
    });
    
  }
}
