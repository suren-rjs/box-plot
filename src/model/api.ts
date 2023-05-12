import { HttpClient } from '@angular/common/http';
import { Filters } from './filters';

export class SharedData {
  private static instance: SharedData;
  yearList: any = [];
  priceList: any = [];

  public static getInstance(): SharedData {
    if (!SharedData.instance) {
      SharedData.instance = new SharedData();
    }
    return SharedData.instance;
  }
}
