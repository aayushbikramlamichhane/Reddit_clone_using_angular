import { Component, Input } from '@angular/core';
import { FeedData } from 'src/app/models/feed-data';

@Component({
  selector: 'app-feed-item',
  templateUrl: './feed-item.component.html',
  styleUrls: ['./feed-item.component.scss'],
})
export class FeedItemComponent {
  @Input() item!: FeedData;

  isEditing: boolean = false;
  editedBody: string = '';

  onEdit() {
    this.isEditing = !this.isEditing;
    this.editedBody = this.item.content;
  }

  saveEdit() {
    this.item.content = this.editedBody;
    this.isEditing = !this.isEditing;
  }

  cancelEdit() {
    this.isEditing = !this.isEditing;
  }
}
