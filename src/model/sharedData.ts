export class SharedData {
  private static instance: SharedData;
  price = '';
  year = '';
  private constructor() {}

  public static getInstance(): SharedData {
    if (!SharedData.instance) {
      SharedData.instance = new SharedData();
    }
    return SharedData.instance;
  }
}
