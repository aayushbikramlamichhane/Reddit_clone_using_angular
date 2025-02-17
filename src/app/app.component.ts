import { Component } from '@angular/core';
import { AuthServiceService } from './services/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pro';

  constructor(public authServiceService: AuthServiceService,
    public router: Router
  ) { }

  get isUserLoggedIn(): boolean {
    return this.authServiceService.checkIfLoggedIn;
  }
}
