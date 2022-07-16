import { IAcceptedQuotes } from "./AcceptedQuotes";
import { IBusinessMaster } from "./BusinessMaster";

export interface IConsumerPolicy {

  id: number;
  businessMaster: IBusinessMaster;
  acceptedQuotes: IAcceptedQuotes
}


export class ConsumerPolicy implements IConsumerPolicy {
  public id: number;
  public businessMaster: IBusinessMaster;
  public acceptedQuotes: IAcceptedQuotes;

  public constructor(
    initialValues: IConsumerPolicy
  ) {
    this.acceptedQuotes = initialValues.acceptedQuotes;
    this.businessMaster = initialValues.businessMaster;
    this.id = initialValues.id;
  }

}
