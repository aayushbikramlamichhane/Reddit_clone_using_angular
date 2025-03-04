import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
  @Input() commentCount !: number;
  @Output() onClick = new EventEmitter<boolean>()


  handleClick(){
    this.onClick.emit(true)
  }
}
