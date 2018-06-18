import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {User} from "../user";
import {DoyouAuthService} from "../doyou-auth.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-doyou-join-modal',
  templateUrl: './doyou-join-modal.component.html',
  styleUrls: ['./doyou-join-modal.component.css']
})
export class DoyouJoinModalComponent implements OnInit {
  @ViewChild('join')
  modal: NgbModal;
  modalRef: NgbModalRef;

  constructor(private modalService: NgbModal, private userService: DoyouAuthService) {
  }

  ngOnInit() {
  }

  open(){
    this.modalRef = this.modalService.open(this.modal, { centered : true });
  }

  joinUser(f: NgForm){
    let user:User = new User();
    user.userId = f.value.userId;
    user.userPw = f.value.userPw;
    user.name = f.value.name;
    user.gender = f.value.gender;
    user.email = f.value.email;
    user.birth = f.value.birth;
    user.address = f.value.address;
    this.userService.joinUser(user);

    this.modalRef.close();
  }

}
