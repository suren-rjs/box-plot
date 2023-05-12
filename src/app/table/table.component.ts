import { Component, Input } from '@angular/core';
import { VehicleData } from 'src/model/VehicleData';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
  @Input()
  vehicleDataList: Array<VehicleData> = [];
}
