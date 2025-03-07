import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { routesPath } from 'src/app/shared/constants/route-constants';
import { AuthServiceService } from 'src/app/shared/services/auth-service.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { localStorageItem } from 'src/app/shared/storage/local-storage';
import { customEmailValidator } from 'src/app/shared/validators/email.validators';
import { customPasswordValidator } from 'src/app/shared/validators/password.validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    public router: Router,
    private fb: FormBuilder,
    private authService: AuthServiceService,
    private snackBar: SnackbarService
  ) {}
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
      this.snackBar.openCustomeSnackBar(
        'report_problem',
        'Wrong User',
        'X',
        'failed'
      );
      return;
    }
    this.authService.onLoggedIn();
    let loggedIn = this.authService.checkIfLoggedIn;
    console.log(`isLoggedin: ${this.authService.checkIfLoggedIn}`);
    localStorageItem('loggedIn', loggedIn);
    this.router.navigate([routesPath.HOME]);
    this.snackBar.openCustomeSnackBar(
      'done',
      'Welcome To Home', 
      'X', 
      'success'
    );
  }

  onRegister() {
    this.router.navigate([routesPath.CREATE_USER_ACCOUNT]);
    this.snackBar.openCustomeSnackBar(
      'done', 
      'Register User', 
      'X', 
      'success'
    );
    
  }
}
