import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor() { }
  showModal: boolean = false;
  @Input() info: any;
  @Output() uploaded = new EventEmitter<string>();

  ngOnInit(): void {
  }

  toggle () {
    this.showModal = !this.showModal;
  }

  confirm() {
    this.uploaded.emit('complete');
    this.toggle();
  }
}
