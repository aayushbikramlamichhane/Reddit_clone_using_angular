import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  private isLoggedIn: boolean = false;

  constructor() {}

  onLoggedIn() {
    // this.isLoggedIn = !this.isLoggedIn;
    this.isLoggedIn = !this.isLoggedIn;
  }

  onLoggedOut() {
    this.isLoggedIn = !this.isLoggedIn;
  }

  get checkIfLoggedIn() {
    return this.isLoggedIn;
  }
}
