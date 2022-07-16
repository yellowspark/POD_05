export class AcceptedQuotes implements IAcceptedQuotes {
  public status: string;
  public quotes: number;

  public constructor(
    initialValues: IAcceptedQuotes
  ) {
    this.status = initialValues.status;
    this.quotes = initialValues.quotes;
  }

}
export interface IAcceptedQuotes {
  status: string;
  quotes: number;
}
