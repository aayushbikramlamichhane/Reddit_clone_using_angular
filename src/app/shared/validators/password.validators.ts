import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function customPasswordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null;
    }

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}/;

    const passwordMatched = passwordRegex.test(control.value.trim());

    return !passwordMatched 
      ? { invalidPassword: true } 
      : null;
  };
}
