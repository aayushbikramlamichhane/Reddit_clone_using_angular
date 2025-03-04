import { Component } from '@angular/core';
// import { routesPath } from 'src/app/constants/route-constants';

import { Router } from '@angular/router';
import { FEED_DATA } from 'src/app/shared/constants/feeds-constants';
import { FeedData } from 'src/app/shared/models/feed-data';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  feeds: FeedData[] = FEED_DATA;
  components = [
    {
      logo: 'fa-solid fa-house',
      name: 'Home',
    },
    {
      logo: 'fa-solid fa-arrow-up-right-from-square',
      name: 'Popular',
    },
    {
      logo: 'fa-solid fa-face-smile',
      name: 'Explore',
    },
    {
      logo: 'fa-solid fa-signal',
      name: 'Feeds',
    },
  ];
  constructor(private router: Router) {}

  manageFeeds() {
    this.router.navigate(['/manage-feeds']);
  }
}
