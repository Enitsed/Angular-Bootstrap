import { Component, OnInit } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-doyou-join-modal',
  templateUrl: './doyou-join-modal.component.html',
  styleUrls: ['./doyou-join-modal.component.css']
})
export class DoyouJoinModalComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

}
