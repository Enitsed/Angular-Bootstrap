import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doyou-navbar',
  templateUrl: './doyou-navbar.component.html',
  styleUrls: ['./doyou-navbar.component.css']
})
export class DoyouNavbarComponent implements OnInit {
  isShow: boolean = false;
  constructor() { }

  ngOnInit() {
  }


  toggleNav() {
    this.isShow = this.isShow === false ? true : false;
  }

}
