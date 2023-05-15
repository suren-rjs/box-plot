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

  @Input() type: String = 'price';
  @Output() triggerUpdate = new EventEmitter<any>();

  selectOption(option: string) {
    this.buttonText = option;
    if (this.type == 'price') {
      this.sharedData.price = option;
    } else if (this.type == 'year') {
      this.sharedData.year = option;
    } else {
      this.sharedData.odoReading = option;
    }
    this.triggerUpdate.emit('update');
  }
}
