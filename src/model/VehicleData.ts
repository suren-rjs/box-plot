export interface VehicleDataList {
  data: VehicleData[];
}

export interface VehicleData {
  _id: string;
  VEHICLE_ID: number;
  DEALER_ID: number;
  BRANCH_ID: number;
  MANUFACTURER_ID: number;
  MANUFACTURER_NAME: string;
  MODEL_ID: number;
  MODELNAME: string;
  CUR_ODOM_READ: number;
  VEHICLEYEAR: number;
  LOCATIONNAME: string;
  MAX_SALE_VALUE: number;
  CREATED_ON: Date;
  DAYSINSTOCK: number;
  DAYSUPDATEAGO: number;
  STATUS: number;
  FRAME_NO: string;
  REG_NO: string;
  SERIES: string;
}

export class ConvertVehicleData {
  public static toObject(json: string): VehicleDataList {
    return JSON.parse(json);
  }

  public static toJson(value: VehicleDataList): string {
    return JSON.stringify(value);
  }
}
