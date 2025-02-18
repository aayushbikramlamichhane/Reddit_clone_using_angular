import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.scss'],
})
export class CommentSectionComponent {
  @Input() logo!: string ;
  @Input() title!: string ;
  @Input() body!: string ;
  @Input() upvote!: number;
}
