export interface IBusiness {
  id: number;
  businessType: string;
  annualTurnover: number;
  totalEmployees: number;
  capitalInvested: number;
}

export class Business implements IBusiness {
  public id: number;
  public businessType: string;
  public annualTurnover: number;
  public totalEmployees: number;
  public capitalInvested: number;

  public constructor(
    initialValues: IBusiness
  ) {
    this.id = initialValues.id;
    this.businessType = initialValues.businessType;
    this.annualTurnover = initialValues.annualTurnover;
    this.totalEmployees = initialValues.totalEmployees;
    this.capitalInvested = initialValues.capitalInvested;
  }
}
