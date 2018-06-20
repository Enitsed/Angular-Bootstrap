import {Component, OnInit, ViewChild} from '@angular/core';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {DoyouAuthService} from "../doyou-auth.service";

@Component({
  selector: 'app-doyou-login-modal',
  templateUrl: './doyou-login-modal.component.html',
  styleUrls: ['./doyou-login-modal.component.css']
})
/*
  로그인 모달
  현재 Input과 Output 데코레이터를 사용하여 컴포넌트간 통신을 사용하고 있다.
  TODO : userService를 통하여 서버와 통신 후 로그인 처리하고, 컴포넌트 간
  TODO : 통신 방법을 상위 컴포넌트에서 Oservable을 사용하여 감시하는 방향으로 수정해야함.
 */
export class DoyouLoginModalComponent implements OnInit {
  @ViewChild('login')
  modal: NgbModal;
  modalRef: NgbModalRef;

  constructor(private modalService: NgbModal, private userService: DoyouAuthService) {
  }

  ngOnInit() {
  }

  signIn(){
    // 유저서비스에서 서버와 통신 후 가져오는 유저 값이 없으면 false를 리턴하고,
    // 정상 처리시 유저 정보 반환한다.
    this.userService.getUser();

    if(this.userService.user != null) {
      alert("로그인 성공");
    } else {
      alert("로그인에 실패하였습니다.");
      return false;
    }

    this.modalRef.close();
  }

  open(){
    this.modalRef = this.modalService.open(this.modal, { centered : true });
  }

}
