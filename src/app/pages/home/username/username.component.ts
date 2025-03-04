import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.scss']
})
export class UsernameComponent {
  @Input() username !: string;
  @Input() userlogo !: string;
}
