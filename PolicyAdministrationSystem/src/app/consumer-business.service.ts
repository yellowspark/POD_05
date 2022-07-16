import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Business } from './Models/Business';
import { Consumer, IConsumer } from './Models/Consumer';

@Injectable({
  providedIn: 'root'
})
export class ConsumerBusinessService {

  public updateConsumerBusinessSubject = new Subject<IConsumer>();

  public constructor(
    private httpClient: HttpClient
  ) { }

  getConsumerBusiness(consumerId: number) {
    console.log("SEARCHING ", consumerId);

    return this.httpClient.get(environment.consumerBaseURL + "/ViewConsumerBusiness?" + `consumerId=${consumerId}`);
  }

  submitConsumerBusiness(consumer: IConsumer) {
    if (consumer.id <= 0) {
      return this.addConsumerBusiness(consumer);
    }
    else {
      return this.updateConsumerBusiness(consumer);
    }
  }

  addConsumerBusiness(consumer: IConsumer) {
    console.log("POSTING consumer", consumer.id);
    return this.httpClient.post(environment.consumerBaseURL + '/CreateConsumerBusiness', consumer);
  }

  updateConsumerBusiness(consumer: IConsumer) {
    console.log("PUTTING consumer : ", consumer.id);

    return this.httpClient.put(environment.consumerBaseURL + "/UpdateConsumerBusiness?" + `consumerId=${consumer.id}`, consumer);
  }

}
