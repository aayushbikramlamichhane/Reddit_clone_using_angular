import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { feedData } from '../../../constants/feeds-constants';
@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss'],
})
export class FeedsComponent implements OnInit {
  commentText: string = '';
  hiddenComments: boolean[] = [];
  data: any[] = [];

  isEditing: boolean[] = [];
  editedBody: string[] = [];

  feeds: any[] = feedData;

  myData = of(this.feeds);

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.myData.subscribe({
      next: (val: any) => {
        this.data = val;
        console.log(this.data);
        // console.log(val);
      },
      error(err) {
        alert(err.message);
      },
      complete() {
        console.log('completed');
      },
    });
  }
  updateComment(value: string) {
    this.commentText = value;
  }

  displayComment(i: number) {
    this.hiddenComments[i] = !this.hiddenComments[i];
    // console.log(i);
  }

  saveComment(i: number) {
    if (!this.commentText.trim()) return;
    const newComment = {
      logo: 'A',
      title: 'Aayush',
      body: this.commentText,
      upvote: 0,
    };

    this.data[i].comment.unshift(newComment);
    this.data[i].commentCount += 1;
  }

  cancelButton(i: number) {
    this.hiddenComments[i] = !this.hiddenComments[i];
  }

  onEdit(i: number) {
    console.log(this.data[i]?.content);
    this.isEditing[i] = !this.isEditing[i];
    this.editedBody[i] = this.data[i]?.content;
  }

  saveEdit(i: number) {
      this.data[i].content = this.editedBody[i]; 
      this.isEditing[i] = !this.isEditing[i];
  }

  cancelEdit(i: number) {
    this.isEditing[i] = !this.isEditing[i];
  }
}
