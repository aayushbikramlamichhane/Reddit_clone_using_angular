import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomSnackbarComponent } from '../components/custom-snackbar/custom-snackbar.component';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  constructor(private _snackbar: MatSnackBar) {}

  openCustomSnackBar(
    icon: string,
    message: string,
    action: string,
    type: string
  ) {
    this._snackbar.openFromComponent(CustomSnackbarComponent, {
      data: {
        class: type,
        icon: icon,
        message: message,
        action: action,
        snackbar: this._snackbar,
      },
      duration: 2500,
      verticalPosition: 'top',
      horizontalPosition: 'end',
    });
  }



}
