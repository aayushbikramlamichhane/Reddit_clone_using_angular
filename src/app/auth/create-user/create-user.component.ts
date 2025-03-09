import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { customEmailValidator } from 'src/app/shared/validators/email.validators';
import { nameValidator } from 'src/app/shared/validators/name.validator';
import { customPasswordValidator } from 'src/app/shared/validators/password.validators';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  registerFormGroup!: FormGroup;
  selectedGender!: string;

  occupations = [
    {
      slug: 'Teacher',
      value: 'teacher',
    },
    {
      slug: 'Engineer',
      value: 'engineer',
    },
    {
      slug: 'Coder',
      value: 'coder',
    },
  ];

  genders = [{ value: 'Male' }, { value: 'Female' }, { value: 'Others' }];

  constructor(
    private fb: FormBuilder,
    private snackBar: SnackbarService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeFormGroup();
  }

  initializeFormGroup() {
    this.registerFormGroup = this.fb.group({
      username: [
        '',
        [Validators.required, Validators.minLength(2), nameValidator()],
      ],
      email: ['', [Validators.required, customEmailValidator()]],
      password: ['', [Validators.required, customPasswordValidator()]],
      genders: ['', [Validators.required]],
      occupations: ['', [Validators.required]],
    });
  }

  getControl(value: string) {
    return this.registerFormGroup?.get(value);
  }

  onCreate() {
    console.log(this.registerFormGroup?.value?.username);
    if (this.registerFormGroup.invalid) {
      this.snackBar.openCustomSnackBar(
        'report_problem',
        'Wrong Credentials',
        'X',
        'failed'
      );
      return;
    }
    this.router.navigate(['/']);
  }
}
