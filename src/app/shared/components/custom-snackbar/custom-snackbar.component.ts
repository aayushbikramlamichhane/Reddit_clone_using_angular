import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { bounceAnimation, fadeOutAnimation } from '../../animations/animations';

@Component({
  selector: 'app-custom-snackbar',
  templateUrl: './custom-snackbar.component.html',
  styleUrls: ['./custom-snackbar.component.scss'],
  animations: [fadeOutAnimation, bounceAnimation],
})
export class CustomSnackbarComponent {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {}

  closeSnackbar() {
    this.data.snackbar.dismiss();
  }
}
