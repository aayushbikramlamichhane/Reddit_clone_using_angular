import { Component, Input } from '@angular/core';
import { FEED_DATA } from '../../constants/feeds-constants';
import { FeedData } from '../../models/feed-data';
import { SnackbarService } from '../../services/snackbar.service';

@Component({
  selector: 'app-delete-component',
  templateUrl: './delete-component.component.html',
  styleUrls: ['./delete-component.component.scss'],
})
export class DeleteComponentComponent {
  @Input() displayContent: boolean[] = [];
  @Input() i!: number;
  @Input() blurContent : boolean[] =[];
  feeds: FeedData[] = FEED_DATA;

  constructor(private snackBar: SnackbarService) {}

  deleteFeed(i: number) {
    this.feeds.splice(i, 1);
    this.displayContent[i] = !this.displayContent[i];
    this.snackBar.openCustomSnackBar(
      'done',
      'Deleted Successfully',
      'X',
      'success'
    );
    this.blurContent[i] = !this.blurContent[i];
  }

  cancelFeed(i: number) {
    this.displayContent[i] = !this.displayContent[i];
  }
}
