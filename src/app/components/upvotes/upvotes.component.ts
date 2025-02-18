import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-upvotes',
  templateUrl: './upvotes.component.html',
  styleUrls: ['./upvotes.component.scss'],
})
export class UpvotesComponent implements OnChanges {
  @Input() upvoteCount!: any;
  // @Input() upvoteCount!: number;
  upArrow: boolean = false;
  downArrow: boolean = false;

  count!: any;
  // count!: number;

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes['upvoteCount'] &&
      changes['upvoteCount'].currentValue !== undefined 
    ) {
      this.count = changes['upvoteCount'].currentValue;
    }
  }



  upvoteUp() {
    if (this.upArrow) {
      this.count = parseInt(this.count) - 1;
      // this.count = this.count - 1;
      this.upArrow = false;
    } else {
      if (this.downArrow) {
        // this.count = this.count + 2;
        this.count = parseInt(this.count) + 2;
        this.downArrow = false;
      } else {
        // this.count = this.count + 1;
        this.count = parseInt(this.count) + 1;
      }
      this.upArrow = true;
    }
  }

  upvoteDown() {
    if (this.downArrow) {
      // this.count = this.count + 1;
      this.count = parseInt(this.count) + 1;
      this.downArrow = false;
    } else {
      if (this.upArrow) {
        this.count = parseInt(this.count) - 2;
        // this.count = this.count - 2;
        this.upArrow = false;
      } else {
        // this.count = this.count - 1;
        this.count = parseInt(this.count) - 1;
      }
      this.downArrow = true;
    }
  }
}
