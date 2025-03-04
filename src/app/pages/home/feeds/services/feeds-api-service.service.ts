import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FEED_DATA } from 'src/app/shared/constants/feeds-constants';
import { FeedData } from 'src/app/shared/models/feed-data';

@Injectable({
  providedIn: 'root',
})
export class FeedsApiServiceService {
  feeds: FeedData[] = FEED_DATA;

  constructor() {}

  /**
   *  Mock Api For Feeds List
   */
  fetchFeedsLists(): Observable<FeedData[]> {
    return of(this.feeds) as Observable<FeedData[]>;
  }

  fetchFeedById(id: number): Observable<FeedData | undefined> {
    return of(this.feeds.find((item) => item.id === id));
  }
}
