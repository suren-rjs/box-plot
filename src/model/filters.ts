export interface Filters {
  data: Data;
}

export interface Data {
  priceList: number[];
  yearList: number[];
}

// Converts JSON strings to/from your types
export class ConvertFilters {
  public static toObject(json: string): Filters {
    return JSON.parse(json);
  }

  public static toJson(value: Filters): string {
    return JSON.stringify(value);
  }
}
