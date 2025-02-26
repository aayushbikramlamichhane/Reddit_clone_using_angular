import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logocontent',
  templateUrl: './logocontent.component.html',
  styleUrls: ['./logocontent.component.scss']
})
export class LogocontentComponent {
  @Input() logo!: any;
  @Input() title!: any;
}
