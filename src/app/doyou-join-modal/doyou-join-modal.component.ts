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
    this.userService.user.userId = f.value.userId;
    this.userService.user.userPw = f.value.userPw;
    this.userService.user.name = f.value.name;
    this.userService.user.gender = f.value.gender;
    this.userService.user.email = f.value.email;
    this.userService.user.address = f.value.address;
    this.userService.joinUser();

    this.modalRef.close();
  }

}
