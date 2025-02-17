import { Component} from '@angular/core';
import {
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { routesPath } from 'src/app/constants/route-constants';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { localStorageItem } from 'src/app/storage/local-storage';
import { customEmailValidator } from 'src/app/validators/email.validators';
import { customPasswordValidator } from 'src/app/validators/password.validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(public router: Router, private fb: FormBuilder, private authService: AuthServiceService) {}
  userForm = this.fb.group({
    email: ['', [Validators.required, customEmailValidator()]],
    password: ['', [Validators.required, customPasswordValidator()]],
  });

  getControl(value: string) {
    return this.userForm?.get(value);
  }

  onSubmit() {
    if (this.userForm.invalid) {
      console.log(this.userForm);
      this.userForm.markAllAsTouched();
      return;
    }
    this.authService.onLoggedIn();
    let loggedIn = this.authService.checkIfLoggedIn;
    console.log(`isLoggedin: ${this.authService.checkIfLoggedIn}`);
    // localStorage.setItem('loggedIn', JSON.stringify(loggedIn));
    localStorageItem('loggedIn', loggedIn);
    this.router.navigate([routesPath.HOME]);
  }

  onRegister() {
    this.router.navigate([routesPath.CREATEUSERACCOUNT]);
  }
}


