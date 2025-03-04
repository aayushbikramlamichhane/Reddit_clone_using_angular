import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function nameValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) {
      return null;
    }

    const name = control.value.trim();
    if (name.length > 50) {
      return { maxLength: true };
    }
    const nameRegex = /^[A-Z]/;
    if (!nameRegex.test(name)) {
      return { invalidName: true };
    }
    return null;
  };
}
