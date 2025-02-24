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
  // isDeleted: boolean = false;

  onEdit() {
    this.isEditing = !this.isEditing;
    this.editedBody = this.body;
    console.log(this.editedBody);
    console.log(this.body);
  }

  saveEdit() {
    this.body = this.editedBody;
    this.isEditing = !this.isEditing;
    console.log(this.body);
  }

  cancelEdit() {
    this.isEditing = !this.isEditing;
  }
  deleteEdit(){
    this.deleteComment.emit();
  }
}
