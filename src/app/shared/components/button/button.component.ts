import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() type: any = '';
  @Input() styles: 'primary' | 'secondary' | 'third' | 'fourth'  = 'primary';
  @Input() isDisabled: boolean = false;
  @Output() onClick = new EventEmitter<boolean>();

  handleClick() {
    this.onClick.emit(true);
  }
}