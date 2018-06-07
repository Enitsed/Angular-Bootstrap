import {Component, OnInit, ViewChild} from '@angular/core';
import {DoyouLoginModalComponent} from "../doyou-login-modal/doyou-login-modal.component";
import {DoyouJoinModalComponent} from "../doyou-join-modal/doyou-join-modal.component";
import {DoyouFindModalComponent} from "../doyou-find-modal/doyou-find-modal.component";

@Component({
  selector: 'app-doyou-header',
  templateUrl: './doyou-header.component.html',
  styleUrls: ['./doyou-header.component.css']
})
export class DoyouHeaderComponent implements OnInit {
  @ViewChild(DoyouLoginModalComponent)
  loginModal: DoyouLoginModalComponent;
  @ViewChild(DoyouFindModalComponent)
  findModal: DoyouFindModalComponent;
  @ViewChild(DoyouJoinModalComponent)
  joinModal: DoyouJoinModalComponent;

  constructor() { }

  ngOnInit() {
  }

  openModal(modal) {
    switch (modal) {
      case 'content' :
        this.loginModal.open();
        break;
      case 'find' :
        this.findModal.open();
        break;
      case 'join' :
        this.joinModal.open();
        break;
    }
  }



}
