export interface Graph {
  label: string;
  datasets: Dataset[];
}

export interface Dataset {
  label: 'Price';
  min: number;
  max: number;
  median: number;
  quartile1: number | null;
  quartile3: number | null;
}

// Converts JSON strings to/from your types
export class GraphList {
  public static toList(json: string): Graph[] {
    return JSON.parse(json);
  }

  public static toJson(value: Graph[]): string {
    return JSON.stringify(value);
  }
}
