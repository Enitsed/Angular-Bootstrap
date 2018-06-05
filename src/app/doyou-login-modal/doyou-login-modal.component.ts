import { Component, OnInit } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-doyou-login-modal',
  templateUrl: './doyou-login-modal.component.html',
  styleUrls: ['./doyou-login-modal.component.css']
})
export class DoyouLoginModalComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }


  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

}
