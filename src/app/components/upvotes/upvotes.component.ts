import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-upvotes',
  templateUrl: './upvotes.component.html',
  styleUrls: ['./upvotes.component.scss']
})
export class UpvotesComponent {
  @Input() upvoteCount !: number;
}
