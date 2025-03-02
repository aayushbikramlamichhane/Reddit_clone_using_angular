import { Component, Input } from '@angular/core';
import { FeedData } from 'src/app/models/feed-data';

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.scss'],
})
export class FeedItemComponent {
  @Input() item!: FeedData;
}
