export class Property implements IProperty {
  public id: number;
  public squareFeet: number;
  public buildingType: string;
  public storeys: number;
  public age: number;
  public consumerID: number;
  public costOfAsset: number;
  public salvageValue: number;
  public usefulLifeOfAsset: number;
  public propertyType: string;

  public constructor(
    initialValues: IProperty
  ) {
    this.id = initialValues.id;
    this.age = initialValues.age;
    this.buildingType = initialValues.buildingType;
    this.squareFeet = initialValues.squareFeet;
    this.storeys = initialValues.storeys;
    this.consumerID = initialValues.consumerID;
    this.costOfAsset = initialValues.costOfAsset;
    this.salvageValue = initialValues.salvageValue;
    this.usefulLifeOfAsset = initialValues.usefulLifeOfAsset;
    this.propertyType = initialValues.propertyType;
  }

}

export interface IProperty {
  id: number;
  squareFeet: number;
  buildingType: string;
  storeys: number;
  age: number;
  consumerID: number;
  costOfAsset: number;
  salvageValue: number;
  usefulLifeOfAsset: number;
  propertyType: string;
}
