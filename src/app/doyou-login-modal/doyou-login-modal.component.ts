import {Component, OnInit, ViewChild} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-doyou-login-modal',
  templateUrl: './doyou-login-modal.component.html',
  styleUrls: ['./doyou-login-modal.component.css']
})
export class DoyouLoginModalComponent implements OnInit {
  @ViewChild('content')
  modal: NgbModal;

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
  }

  open(){
    this.modalService.open(this.modal, { centered : true });
  }

}
