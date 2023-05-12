import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedData } from 'src/model/sharedData';

@Component({
  selector: 'app-dropdown-button',
  templateUrl: './dropdown-button.component.html',
  styleUrls: ['./dropdown-button.component.css'],
})
export class DropdownButtonComponent implements OnInit {
  sharedData = SharedData.getInstance();

  ngOnInit(): void {
    if (this.options) this.options = ['Select All', ...this.options];
  }

  @Input()
  options: any = [];

  @Input()
  method!: (params: any) => void;

  buttonText: string = 'Select All';
  name: any;

  @Input() isPrice: Boolean = true;
  @Output() triggerUpdate = new EventEmitter<any>();

  selectOption(option: string) {
    this.buttonText = option;
    if (this.isPrice) {
      this.sharedData.price = option;
    } else {
      this.sharedData.year = option;
    }
    this.triggerUpdate.emit('update');
  }
}
