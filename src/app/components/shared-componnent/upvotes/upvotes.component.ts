import {
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'app-upvotes',
  templateUrl: './upvotes.component.html',
  styleUrls: ['./upvotes.component.scss'],
})
export class UpvotesComponent {
  @Input() upvoteCount!: number;
  upArrow: boolean = false;
  downArrow: boolean = false;

  upvoteUp() {
    if (this.upArrow) {
      this.upvoteCount = this.upvoteCount - 1;
      this.upArrow = !this.upArrow;
    } else {
      if (this.downArrow) {
        this.upvoteCount = this.upvoteCount + 2;
        this.downArrow = !this.downArrow;
      } else {
        this.upvoteCount = this.upvoteCount + 1;
      }
      this.upArrow = !this.upArrow;
    }
  }

  upvoteDown() {
    if (this.downArrow) {
      this.upvoteCount = this.upvoteCount + 1;
      this.downArrow = !this.downArrow;
    } else {
      if (this.upArrow) {
        this.upvoteCount = this.upvoteCount - 2;
        this.upArrow = !this.upArrow;
      } else {
        this.upvoteCount = this.upvoteCount - 1;
      }
      this.downArrow = !this.downArrow;
    }
  }
}
