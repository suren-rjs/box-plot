import { ConvertFilters } from './../../model/filters';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Filters } from 'src/model/filters';
import { SharedData } from 'src/model/sharedData';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent implements OnInit {
  constructor(private http: HttpClient) {}

  sharedData = SharedData.getInstance();
  yearList: any = [];
  priceList: any = [];
  filters: Filters | undefined;
  @Output() triggerUpdate = new EventEmitter<any>();

  getUpdate(data: any) {
    this.triggerUpdate.emit('update');
  }

  ngOnInit(): void {
    this.getFilters();
  }

  getFilters() {
    this.http.get('http://localhost:3001/filters').subscribe(
      (response) => {
        this.filters = ConvertFilters.toObject(JSON.stringify(response));
        this.yearList = ['Select All', ...this.filters.data.priceList];
        this.priceList = ['Select All', ...this.filters.data.yearList];
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
