import {Component, OnInit, ViewChild} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-doyou-join-modal',
  templateUrl: './doyou-join-modal.component.html',
  styleUrls: ['./doyou-join-modal.component.css']
})
export class DoyouJoinModalComponent implements OnInit {
  @ViewChild('join')
  modal: NgbModal;

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
  }

  open(){
    this.modalService.open(this.modal, { centered : true });
  }

}
