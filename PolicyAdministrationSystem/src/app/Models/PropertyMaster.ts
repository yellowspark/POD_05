import { IProperty } from "./Property";

export interface IPropertyMaster {
  property: IProperty;
  propertyValue: number;
}

export class PropertyMaster implements IPropertyMaster {
  public property: IProperty;
  public propertyValue: number;

  public constructor(
    initialValues: IPropertyMaster
  ) {
    this.property = initialValues.property;
    this.propertyValue = initialValues.propertyValue;
  }
}
