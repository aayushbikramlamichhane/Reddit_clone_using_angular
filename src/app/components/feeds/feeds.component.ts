import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss'],
})
export class FeedsComponent implements OnInit {
  data: any[] = [];
  contents: any[] = [
    {
      logo: 'L',
      name: 'Luffy',
      content: 'Kaizoku ou ni ore wa naru',
      img: '../../../assets/images/luffy.jpg',
    },
    {
      logo: 'Z',
      name: 'Zoro',
      content: 'Scars on the back are a swordsman shame',
      img: '../../../assets/images/zoro.jpg',
    },
    {
      logo: 'N',
      name: 'Naruto',
      content: 'Watashi wa hokage ni naru',
      img: '../../../assets/images/naruto.jpg',
    },
    {
      logo: 'M',
      name: 'Maskman',
      content: 'No one cared until I started wearing mask',
      img: '../../../assets/images/pexels-photo-1097456 (1).jpg',
    },
    {
      logo: 'M',
      name: 'ManchesterUnited',
      content: 'Manchester United #ggmu',
      img: '../../../assets/images/man.jpg',
    },
    {
      logo: 'O',
      name: 'OnePiece',
      content: 'The One Piece is Real',
      img: '../../../assets/images/onepiece.jpeg',
    },
    {
      logo: 'B',
      name: 'BatMan',
      content: 'The World only make sense, If you force it to',
      img: '../../../assets/images/bat.jpg',
    },
  ];

  myData = of(this.contents);

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.myData.subscribe({
      next: (val: any) => {
        this.data = [...this.data, ...val];
        // this.data.push(val)
        console.log(this.data);
        console.log(val);
      },
      error(err) {
        alert(err.message);
      },
    });
  }
}
