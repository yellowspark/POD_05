import { IBusiness } from "./Business";

export interface IConsumer {
  id: number;
  name: string;
  dob: string;
  email: string;
  pan: string;
  business: IBusiness
}

export class Consumer implements IConsumer {
  public id: number = -1;
  public name: string;
  public dob: string;
  public email: string;
  public pan: string;
  public business: IBusiness;

  public constructor(
    initialValues: IConsumer
  ) {
    this.id = initialValues.id;
    this.name = initialValues.name;
    this.dob = initialValues.dob;
    this.email = initialValues.email;
    this.pan = initialValues.pan;
    this.business = initialValues.business;
  }
}


// public class Business {
//   /*protected static int _lastId = 0;

//   public int ID = ++Business._lastId;*/

//   public int ID { get; set; }
//         public string BusinessType { get; set; } = "";        //  (Proprietorship/Partnership)
//         public decimal CapitalInvested { get; set; } = 0;

//         public decimal AnnualTurnover { get; set; } = 0;

//         public int TotalEmployees { get; set; } = 0;
    // }
