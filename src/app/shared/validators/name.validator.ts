import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function nameValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null;
    }
    // const name = control.value.trim();
    const nameRegex = /^[A-Z]/;
    const name = nameRegex.test(control.value.trim());
    return !name 
        ? { invalidName: true } 
        : null
  };
}
