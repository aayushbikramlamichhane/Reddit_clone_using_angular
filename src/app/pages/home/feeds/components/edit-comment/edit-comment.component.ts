import { Component, Input } from '@angular/core';
import { FEED_DATA } from 'src/app/shared/constants/feeds-constants';
import { FeedData } from 'src/app/shared/models/feed-data';

@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.scss'],
})
export class EditCommentComponent {
  @Input() item!: FeedData;
  @Input() i!: number;

  hiddenComments: boolean[] = [];
  commentText: string = '';
  feeds: FeedData[] = FEED_DATA;

  saveComment(i: number) {
    if (!this.commentText.trim()) return;
    const newComment = {
      logo: 'A',
      title: 'Aayush',
      body: this.commentText,
      upvote: 0,
    };

    this.feeds[i].comment.unshift(newComment);
    this.feeds[i].commentCount += 1;
  }

  updateComment(value: string) {
    this.commentText = value;
  }

  cancelButton(i: number) {
    this.hiddenComments[i] = !this.hiddenComments[i];
  }

  onDelete(i: number, c: number) {
    console.log('delete');
    this.feeds[i]?.comment.splice(c, 1);
    this.feeds[i].commentCount -= 1;
  }
}
