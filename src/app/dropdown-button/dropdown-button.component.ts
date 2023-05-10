import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dropdown-button',
  templateUrl: './dropdown-button.component.html',
  styleUrls: ['./dropdown-button.component.css'],
})
export class DropdownButtonComponent implements OnInit {
  ngOnInit(): void {
    this.options = ['Select All', ...this.options];
  }

  @Input()
  options!: Array<String>;

  @Input()
  method!: () => void;

  buttonText: string = 'Select All';
  name: any;

  selectOption(option: string) {
    this.buttonText = option;
    this.method();
    console.log('Selected Option:', option);
  }
}
