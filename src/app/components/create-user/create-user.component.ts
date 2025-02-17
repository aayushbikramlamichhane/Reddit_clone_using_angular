import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormArray,
  Form,
  FormGroup,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit {
  registerFormGroup !: FormGroup;

  ocupations = [
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

  genders = ['Male', 'Female', 'Others'];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initializeFormGroup();
    this.addGender();
    this.patchOccupationValue();
    // console.log(this.genderFormArray.value);
  }

  initializeFormGroup() {
    this.registerFormGroup = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      gender: this.fb.array([]),
      // gender: ['',[Validators.required]],
      occupations: ['', [Validators.required]],
    });
  }

  patchOccupationValue() {
    this.getControl('occupations')?.patchValue('');
  }

  get genderFormArray() {
    return this.registerFormGroup.get('gender') as FormArray;
  }

  addGender() {
    // this.gender.push(this.genders);
    // const geners = this.genderFormArray.push();
    this.genders.forEach((gender) => {
      this.genderFormArray.push(this.fb.control(false));
    });

    console.log('Check controls -->', this.genderFormArray.value);
  }

  getControl(value: string) {
    return this.registerFormGroup?.get(value);
  }

  onCreate() {
    console.log(this.registerFormGroup?.value);
    // if form is invalid, form will return from here and will not execute.
    if (this.registerFormGroup.invalid) {
      return;
    }
  }
}
