import { Component, Input } from '@angular/core';
import 'src/model/VehicleData';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  vehicleData: VehicleData = {
    manufactureName: 'TVS',
    modelName: 'JUPITER ( BS IV)',
    odoRead: '0',
    vehicleYear: '2015',
    location: 'VEHICLE LOCATION',
    saleValue: '30000',
    daysInStock: '415',
    status: '1',
    regNumber: '415',
    series: 'JUPITER',
  };

  @Input()
  vehicleDataList: Array<VehicleData> = [
    this.vehicleData,
    this.vehicleData,
    this.vehicleData,
    this.vehicleData,
    this.vehicleData,
    this.vehicleData,
    this.vehicleData,
    this.vehicleData,
    this.vehicleData,
    this.vehicleData,
    this.vehicleData,
    this.vehicleData,
    this.vehicleData,
    this.vehicleData,
    this.vehicleData,
    this.vehicleData,
    this.vehicleData,
    this.vehicleData,
    this.vehicleData,
    this.vehicleData,
    this.vehicleData,
    this.vehicleData,
    this.vehicleData,
    this.vehicleData,
    this.vehicleData,
    this.vehicleData,
    this.vehicleData,
    this.vehicleData,
    this.vehicleData,
    this.vehicleData,
    this.vehicleData,
    this.vehicleData,
    this.vehicleData,
    this.vehicleData,
    this.vehicleData,
    this.vehicleData,
    this.vehicleData,
    this.vehicleData,
    this.vehicleData,
    this.vehicleData,
    this.vehicleData,
    this.vehicleData,
  ];
}
