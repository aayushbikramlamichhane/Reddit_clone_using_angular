import { Component } from '@angular/core';
// import { routesPath } from 'src/app/constants/route-constants';
import { FEED_DATA } from '../../../constants/feeds-constants';
import { Router } from '@angular/router';
import { FeedData } from '../../../models/feed-data';
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
