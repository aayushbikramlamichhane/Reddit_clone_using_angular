import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { FEED_DATA } from '../../../constants/feeds-constants';
import { FeedData } from 'src/app/models/feed-data';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss'],
})
export class FeedsComponent implements OnInit {
  commentText: string = '';
  hiddenComments: boolean[] = [];
  data: FeedData[] = [];

  
  feeds: FeedData[] = FEED_DATA;

  myData = of(this.feeds);

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.myData.subscribe({
      next: (val: FeedData[]) => {
        this.data = val;
        console.log(this.data);
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


  onDelete(i: number, c: number) {
    console.log('delete');
    this.data[i]?.comment.splice(c, 1);
    this.data[i].commentCount -= 1;
  }
}
