import { Component } from '@angular/core';
import { routesPath } from 'src/app/constants/route-constants';
// import { RouterLink } from '@angular/router';
import { feedData } from 'src/app/constants/feeds-constants';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  feeds: any[] = feedData;
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
  constructor(private router: Router){}

  manageFeeds() {
    // this.feeds.unshift({
    //   logo: 'A',
    //   name: 'Aayush',
    //   content: 'My Name is Aayush Bikram Lamichhane',
    //   img: '../../../../assets/images/aayush.jpg',
    //   upvoteCount: 100,
    //   commentCount: 2,
    //   comment: [
    //     {
    //       logo: 'L',
    //       topic: 'Luffy',
    //       body: 'I will Help You',
    //       upvote: 150,
    //     },
    //     {
    //       logo: 'S',
    //       topic: 'Sanji',
    //       body: 'Yeah, Right',
    //       upvote: 150,
    //     },
    //   ],
    // });
    this.router.navigate(['/manage-feeds'])
  }
}
