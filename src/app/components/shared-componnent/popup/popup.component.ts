import { Component, Input } from '@angular/core';
import { FEED_DATA } from 'src/app/constants/feeds-constants';
import { FeedData } from 'src/app/models/feed-data';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent {
  @Input() i!: number;
  @Input() displayContent: boolean[] = [];
  @Input() displayPopup : boolean[] = []

  feeds: FeedData[] = FEED_DATA;

  deleteFeed(i: number) {
    console.log(i);
    // this.feeds.splice(i, 1);
    this.displayContent[i] = !this.displayContent[i];
    this.displayPopup[i] = !this.displayPopup[i];
    console.log(this.displayContent[i]);
  }
}
