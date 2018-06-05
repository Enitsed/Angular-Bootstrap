import { Component, OnInit } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-doyou-find-modal',
  templateUrl: './doyou-find-modal.component.html',
  styleUrls: ['./doyou-find-modal.component.css']
})
export class DoyouFindModalComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }

}
