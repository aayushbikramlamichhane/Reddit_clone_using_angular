import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.scss'],
})
export class CommentSectionComponent {
  @Input() logo!: string;
  @Input() title!: string;
  @Input() body!: string;
  @Input() upvote!: number;
  @Output() deleteComment = new EventEmitter<any>();

  isEditing: boolean = false;
  editedBody: string = '';

  onEdit() {
    this.isEditing = !this.isEditing;
    this.editedBody = this.body;
  }

  saveEdit() {
    this.body = this.editedBody;
    this.isEditing = !this.isEditing;
  }

  cancelEdit() {
    this.isEditing = !this.isEditing;
  }
  deleteEdit(){
    this.deleteComment.emit();
  }
}
