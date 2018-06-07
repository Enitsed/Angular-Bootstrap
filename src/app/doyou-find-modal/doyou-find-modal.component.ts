import {Component, OnInit, ViewChild} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-doyou-find-modal',
  templateUrl: './doyou-find-modal.component.html',
  styleUrls: ['./doyou-find-modal.component.css']
})
export class DoyouFindModalComponent implements OnInit {
  @ViewChild('find')
  modal: NgbModal;

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
  }

  open(){
    this.modalService.open(this.modal, { centered : true });
  }

}
