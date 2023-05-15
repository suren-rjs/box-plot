import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedData } from 'src/model/sharedData';
import { VehicleData, ConvertVehicleData } from 'src/model/VehicleData';
import { Graph, GraphList } from './graph-list';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  sharedData = SharedData.getInstance();

  constructor(private http: HttpClient) {}

  async getVehicleData(): Promise<Array<VehicleData>> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const price = this.sharedData.price;
    const year = this.sharedData.year;

    const params = new HttpParams().set('year', year).set('saleValue', price);

    return this.http
      .get('http://localhost:3001/data', { headers, params })
      .toPromise()
      .then((response) => {
        const responseData = ConvertVehicleData.toObject(
          JSON.stringify(response)
        ).data;
        return responseData;
      })
      .catch((error) => {
        console.error(`Exception here: ${JSON.stringify(error)}`);
        return [];
      });
  }

  async getGraphData(): Promise<Array<Graph>> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const price = this.sharedData.price;
    const year = this.sharedData.year;

    const params = new HttpParams().set('year', year).set('saleValue', price);

    return this.http
      .get('http://localhost:3001/graph-data', { headers, params })
      .toPromise()
      .then((response) => {
        const responseData = GraphList.toList(JSON.stringify(response));
        return responseData;
      })
      .catch((error) => {
        console.error(`Exception here: ${JSON.stringify(error)}`);
        return [];
      });
  }
}
