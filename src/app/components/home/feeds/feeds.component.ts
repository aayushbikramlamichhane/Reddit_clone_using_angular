import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { FEED_DATA } from '../../../constants/feeds-constants';
import { FeedData } from 'src/app/models/feed-data';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss'],
})
export class FeedsComponent implements OnInit {
  commentText: string = '';
  hiddenComments: boolean[] = [];
  data: FeedData[] = [];
  displayPopup: boolean[] = [];
  displayContent : boolean[] = []

  feeds: FeedData[] = FEED_DATA;

  myData = of(this.feeds);

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.myData.subscribe({
      next: (val: FeedData[]) => {
        this.data = val;
        this.data.forEach((item) => {
          item.isEditing = false;
        });
      },
      error(err) {
        alert(err.message);
      },
      complete() {
        console.log('completed');
      },
    });
  }

  displayComment(i: number) {
    this.hiddenComments[i] = !this.hiddenComments[i];
    // console.log(i);
  }

  onClick(i: number) {
    this.displayPopup[i] = !this.displayPopup[i];
  }
}
