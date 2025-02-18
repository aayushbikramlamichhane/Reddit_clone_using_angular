import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { feedData } from '../../../constants/feeds-constants';
@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss'],
})
export class FeedsComponent implements OnInit {
  hiddenComment!: boolean;
  data: any[] = [];

  feeds: any[] = feedData;

  myData = of(this.feeds);

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.myData.subscribe({
      next: (val: any) => {
        // this.data = [...this.data, ...val];
        this.data = val;
        // this.data.push(val)
        console.log(this.data);
        console.log(val);
      },
      error(err) {
        alert(err.message);
      },
    });
  }

  displayComment() {
    this.hiddenComment = !this.hiddenComment;
    console.log(this.hiddenComment);
    console.log('clicked');
  }

  cancelButton(){
    this.hiddenComment = !this.hiddenComment
  }
}
