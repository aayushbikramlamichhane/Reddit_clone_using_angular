import { Component, OnInit } from '@angular/core';
import { FeedsApiServiceService } from './services/feeds-api-service.service';
import { Router } from '@angular/router';
import { FeedData } from 'src/app/shared/models/feed-data';

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
  displayContent: boolean[] = [];


  constructor(
    
    private feedsApiService: FeedsApiServiceService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.getData();
    
  }

  getData() {
    this.feedsApiService.fetchFeedsLists().subscribe({
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

  iconClick(i: number) {
    this.displayPopup[i] = !this.displayPopup[i];
  }
}
