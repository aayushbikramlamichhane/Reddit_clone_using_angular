import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() inputText!: string;
  @Input() type!: string;
  @Input() iconType!: string;
  @Output() inputChanged = new EventEmitter<string>();

  inputValue: string = '';

  onInputChange(value: string) {
    this.inputChanged.emit(value);
  }
}
