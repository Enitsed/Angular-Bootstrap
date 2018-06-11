import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {User} from "../user";
import {DoyouAuthService} from "../doyou-auth.service";

@Component({
  selector: 'app-doyou-join-modal',
  templateUrl: './doyou-join-modal.component.html',
  styleUrls: ['./doyou-join-modal.component.css']
})
export class DoyouJoinModalComponent implements OnInit {
  @ViewChild('join')
  modal: NgbModal;
  user: User;

  constructor(private modalService: NgbModal, private authService: DoyouAuthService) {
    this.user = new User();
  }

  ngOnInit() {
  }

  open(){
    this.modalService.open(this.modal, { centered : true });
  }

  joinUser(){
    this.authService.user = this.user;
    this.authService.joinUser();
  }

}
