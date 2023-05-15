import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedData } from 'src/model/sharedData';
import { DataService } from 'src/model/data-service';
import { VehicleData } from 'src/model/VehicleData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'pricing-dashboard';

  updateGraph: () => void = function () {
    console.log('update =============================== >>> ');
  };

  sharedData = SharedData.getInstance();
  handleCustomEvent(data: any) {
    this.vehicleData = [];
    this.getVehicleData();
  }

  constructor(private vehicleDataService: DataService) {}

  ngOnInit(): void {
    this.vehicleData = [];
    this.getVehicleData();
  }

  vehicleData: Array<VehicleData> = [];

  async getVehicleData(): Promise<void> {
    try {
      this.vehicleData = await this.vehicleDataService.getVehicleData();
    } catch (error) {
      console.error(error);
    }
  }
}
