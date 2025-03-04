import { Component, Input } from '@angular/core';
import { FEED_DATA } from '../../constants/feeds-constants';
import { FeedData } from '../../models/feed-data';

@Component({
  selector: 'app-delete-component',
  templateUrl: './delete-component.component.html',
  styleUrls: ['./delete-component.component.scss'],
})
export class DeleteComponentComponent {
  @Input() displayContent: boolean[] = [];
  @Input() i!: number;
  feeds: FeedData[] = FEED_DATA;

  deleteFeed(i: number) {
    this.feeds.splice(i,1);
    this.displayContent[i] = !this.displayContent[i];
  }

  cancelFeed(i: number) {
    this.displayContent[i] = !this.displayContent[i];
  }
}
