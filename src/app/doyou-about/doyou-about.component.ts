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
  images = [];
  constructor() { }

  ngOnInit() {
    // 슬라이더 이미지
    this.images.push('https://picsum.photos/2000/640/?26');
    this.images.push('https://picsum.photos/2000/640/?200');
    this.images.push('https://picsum.photos/2000/640/?275');
  }
}
