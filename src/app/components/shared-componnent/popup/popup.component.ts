import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FeedsApiServiceService } from '../../home/feeds/services/feeds-api-service.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent {
  @Input() id !: number;
  @Input() i!: number;
  @Input() displayContent: boolean[] = [];
  @Input() displayPopup: boolean[] = [];

  // feed?: FeedData[] = FEED_DATA;

  constructor(
    private router: Router,
    private feedService: FeedsApiServiceService
  ) {}

  ngOnInit(): void {}

  deleteFeed(i: number) {
    this.displayContent[i] = !this.displayContent[i];
    this.displayPopup[i] = !this.displayPopup[i];
    console.log(this.displayContent[i]);
  }

  editFeed() {
      // this.feedService.fetchFeedById(this.id).subscribe((item) => {
        // if (item) {
          // this.router.navigate(['/edit', item.id]);
          // this.router.navigate(['edit'],{
          //   queryParams: {
          //     id: item.id
          //   }
          // })
        // }
      // });
    this.router.navigate(['/edit', this.id]);
  }
}
