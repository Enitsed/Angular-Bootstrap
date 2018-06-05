import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doyou-about',
  templateUrl: './doyou-about.component.html',
  styleUrls: ['./doyou-about.component.css']
})
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
