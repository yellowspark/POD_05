import { IConsumer } from "./Consumer";

export class BusinessMaster implements IBusinessMaster {
  public consumer: IConsumer;
  public businessValue: number;

  public constructor(
    initialValues: IBusinessMaster
  ) {
    this.consumer = initialValues.consumer;
    this.businessValue = initialValues.businessValue;
  }

}
export interface IBusinessMaster {
  consumer: IConsumer;
  businessValue: number;
}
