import {Component, OnInit, ViewChild} from '@angular/core';
import {DoyouLoginModalComponent} from "../doyou-login-modal/doyou-login-modal.component";
import {DoyouJoinModalComponent} from "../doyou-join-modal/doyou-join-modal.component";
import {DoyouFindModalComponent} from "../doyou-find-modal/doyou-find-modal.component";
import {User} from "../user";
import {DoyouAuthService} from "../doyou-auth.service";
import {Observable} from 'rxjs';
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
  isLogged: boolean = false;
  loggedUser: User;

  constructor(private userService: DoyouAuthService) {
  }

  ngOnInit() {

  }

  openModal(modal) {
    switch (modal) {
      case 'login' :
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

  login($event) {
    this.loggedUser = $event;
    if(this.loggedUser != null) {
      this.isLogged = true;
    }
  }

  logout() {
    this.loggedUser = null;
    this.isLogged = false;
  }


}
