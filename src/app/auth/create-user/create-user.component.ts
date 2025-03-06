import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormArray,
  FormGroup,
} from '@angular/forms';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { customEmailValidator } from 'src/app/shared/validators/email.validators';
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

  genders = [
    { value: 'Male'},
    { value: 'Female'},
    { value: 'Others'}
  ];

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
      username: ['', [Validators.required]],
      email: ['', [Validators.required, customEmailValidator()]],
      password: ['', [Validators.required, customPasswordValidator()]],
      // gender: this.fb.array([]),
      genders: ['', [Validators.required]],
      occupations: ['', [Validators.required]],
    });
  }


  getControl(value: string) {
    return this.registerFormGroup?.get(value);
  }

  onCreate() {
    console.log(this.registerFormGroup?.value);
    if (this.registerFormGroup.invalid) {
      this.snackBar.openSnackBar("Wrong Credentials","X")
      return;
    }
    this.router.navigate(['/'])
  }
}
