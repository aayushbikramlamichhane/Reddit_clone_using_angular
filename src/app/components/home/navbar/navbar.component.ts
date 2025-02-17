import { Component } from '@angular/core';
import { routesPath } from 'src/app/constants/route-constants';
// import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  components = [
    {
      logo: 'fa-solid fa-house',
      name: 'Home'
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
}
