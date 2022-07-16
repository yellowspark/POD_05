export class PolicyDetails implements IPolicyDetails {
  public constructor(
    initialValues: IPolicyDetails
  ) {
    this.quotes = initialValues.quotes;
    this.consumerId = initialValues.consumerId;
  }

  public consumerId: number;
  public quotes: number;
}

export interface IPolicyDetails {
  consumerId: number;
  quotes: number;
}
