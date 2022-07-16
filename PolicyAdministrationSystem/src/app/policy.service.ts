import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ConsumerPolicy, IConsumerPolicy } from './Models/ConsumerPolicy';
import { IPolicyDetails } from './Models/PolicyDetails';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  public constructor(
    private httpClient: HttpClient
  ) { }

  policies: any[] = [];

  public createPolicy(policyDetails: IPolicyDetails) {
    return this.httpClient.post(environment.policyBaseURL + "/createPolicy", policyDetails);
  }

  public issuePolicy(policyId: number) {
    return this.httpClient.post(environment.policyBaseURL + "/issuePolicy?" + `policyId=${policyId}`, {});
  }

  public viewPolicy(policyId: number) {
    return this.httpClient.get(environment.policyBaseURL + "/viewPolicy?" + `policyId=${policyId}`);
  }
}
