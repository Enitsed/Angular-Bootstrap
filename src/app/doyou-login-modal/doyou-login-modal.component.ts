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
  // 해당 HTML 엘리먼트를 가져오기 위해 사용됨. 헤더에 있는 모달들을 분리하기
  // 위해서 사용 했으나.. 더 좋은 방법을 생각해 봐야겠다. 컴포넌트간
  // 데이터 교환이 상당히 불편한 듯 싶다. (적응 되면 괜찮아지겠지..)
  @ViewChild('login')
  modal: NgbModal;
  modalRef: NgbModalRef;

  // 모달창 활성을 위한 modalService와 유저 인증을 위한 authService를
  // DI를 통해 주입한다.
  constructor(private modalService: NgbModal, private userService: DoyouAuthService) {
  }

  ngOnInit() {
  }

  // 로그인 시도 메서드
  signIn(){
    // 유저서비스에서 서버와 통신 후 가져오는 유저 값이 없으면 false를 리턴하고,
    // 정상 처리시 유저 정보 반환한다.
    this.userService.user = this.userService.getUser();
    if(this.userService.user != null) {
      alert("로그인 성공");
    } else {
      alert("로그인에 실패하였습니다.");
      return false;
    }

    // 모달창을 닫는다.
    this.modalRef.close();
  }

  // 모달창 열기 메서드
  open(){
    // 모달창을 닫기 위해서는 NgbModal 객체가 아닌 NgbModalRef 객체 혹은
    // NgbActiveModal 객체를 사용해야 하는데, 여기선 NgbModalRef 객체에 대입하여
    // 위의 메서드에서 작업 후 닫는 방식으로 구현.
    this.modalRef = this.modalService.open(this.modal, { centered : true });
  }

}
