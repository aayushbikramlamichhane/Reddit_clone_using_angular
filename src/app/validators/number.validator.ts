import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function numberValidator(): ValidatorFn{
    return (control: AbstractControl): ValidationErrors | null => {
        if (!control.value) {
          return null;
        }

 
        return parseInt(control.value) ? null : { invalidNumber: true };

    }
}