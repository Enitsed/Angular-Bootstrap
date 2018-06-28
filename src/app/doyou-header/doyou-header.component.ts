import {Component, OnInit, ViewChild} from '@angular/core';
import {DoyouLoginModalComponent} from '../doyou-login-modal/doyou-login-modal.component';
import {DoyouJoinModalComponent} from '../doyou-join-modal/doyou-join-modal.component';
import {DoyouFindModalComponent} from '../doyou-find-modal/doyou-find-modal.component';
import {User} from '../user';
import {DoyouAuthService} from '../doyou-auth.service';
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

  constructor(private userService: DoyouAuthService) {
  }

  ngOnInit() {
  }

  // 각각 로그인, 아이디 찾기, 회원가입하기 모달별로 구분하여 실행하게 한다.
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

  // 저장되어 있는 유저정보를 비우고 로그아웃 처리한다.
  logout() {
    this.userService.user = null;
    this.userService.isLogged = false;
  }

}
