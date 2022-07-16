import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProperty } from './Models/Property';

@Injectable({
  providedIn: 'root'
})
export class BusinessPropertyService {

  constructor(private httpClient: HttpClient) { }

  updateBusinessPropertySubject = new Subject<IProperty>();


  public submitBusinessProperty(businessProperty: IProperty, updateProperty: boolean) {
    console.log("SUBMITTED property : ", businessProperty.id);

    if (updateProperty == false) {
      return this.addBusinessProperty(businessProperty);
    }
    else {
      return this.updateBusinessProperty(businessProperty);
    }
  }

  public getBusinessProperty(consumerId: number, businessId: number) {
    console.log("SEARCHING property : ", { businessId, consumerId });
    return this.httpClient.get(environment.businessPropertyBaseURL + "/ViewConsumerProperty?" + `businessId=${businessId}&consumerId=${consumerId}`);//.subscribe(console.log);
  }

  public addBusinessProperty(businessProperty: IProperty) {
    console.log("ADDING property : ", businessProperty.id);

    return this.httpClient.post(environment.businessPropertyBaseURL + "/CreateBusinessProperty", businessProperty);
  }

  public updateBusinessProperty(businessProperty: IProperty) {
    console.log("UPDATING property : ", businessProperty.id);

    return this.httpClient.put(environment.businessPropertyBaseURL + "/UpdateBusinessProperty?" + `businessId=${businessProperty.id}`, businessProperty);
  }
}
