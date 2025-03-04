import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from './shared/services/auth-service.service';

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
