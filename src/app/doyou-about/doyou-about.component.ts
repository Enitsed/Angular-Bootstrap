import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doyou-about',
  templateUrl: './doyou-about.component.html',
  styleUrls: ['./doyou-about.component.css']
})
/*
    About 페이지 필요한 정보 : 
    사진, 방명록 내용,... 등
 */
export class DoyouAboutComponent implements OnInit {
  image: string = 'https://picsum.photos/2000/640/?random';
  images = [];
  constructor() { }

  ngOnInit() {
    this.images.push(this.image);
    this.images.push(this.image);
    this.images.push(this.image);
  }
}
