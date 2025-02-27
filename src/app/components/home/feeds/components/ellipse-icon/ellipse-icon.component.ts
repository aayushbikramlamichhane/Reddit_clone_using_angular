import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ellipse-icon',
  templateUrl: './ellipse-icon.component.html',
  styleUrls: ['./ellipse-icon.component.scss'],
})
export class EllipseIconComponent {
  @Output() iconClick = new EventEmitter<any>();
  handleIcon() {
    this.iconClick.emit()
  }
}
