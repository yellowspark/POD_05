import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor(private httpClient: HttpClient) { }

  getQuotes(
    businessValue: number,
    propertyValue: number,
    propertyType: string
  ) {
    return this.httpClient.get(environment.quotesBaseURL + "/GetQuotes?" + `businessValue=${businessValue}&propertyValue=${propertyValue}&propertyType=${propertyType}`);
  }
}
