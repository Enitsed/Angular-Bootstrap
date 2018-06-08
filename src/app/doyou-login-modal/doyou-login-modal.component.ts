import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {User} from "../user";
import {DoyouAuthService} from "../doyou-auth.service";

@Component({
  selector: 'app-doyou-login-modal',
  templateUrl: './doyou-login-modal.component.html',
  styleUrls: ['./doyou-login-modal.component.css']
})
export class DoyouLoginModalComponent implements OnInit {
  @ViewChild('login')
  modal: NgbModal;
  modalRef: NgbModalRef;
  @Input()
  loggedUser: User;
  @Output()
  parentEmitter = new EventEmitter();

  constructor(private modalService: NgbModal, private userService: DoyouAuthService) {
  }

  ngOnInit() {
  }

  tryLogin(){
    if(this.userService.getUser() != null) {
      this.loggedUser = this.userService.getUser();
    } else {
      return false;
    }
    this.parentEmitter.emit(this.loggedUser);
    this.modalRef.close();
  }

  open(){
    this.modalRef = this.modalService.open(this.modal, { centered : true });
  }

}
