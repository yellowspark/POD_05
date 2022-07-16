import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConsumerBusinessService } from '../consumer-business.service';
import { Business } from '../Models/Business';
import { BusinessMaster } from '../Models/BusinessMaster';
import { Consumer, IConsumer } from '../Models/Consumer';

@Component({
  selector: 'app-consumer-business-details-search',
  templateUrl: './consumer-business-details-search.component.html',
  styleUrls: ['./consumer-business-details-search.component.css']
})
export class ConsumerBusinessDetailsSearchComponent implements OnInit {

  searchConsumerFormGroup: FormGroup;
  // updateFormGroup: FormGroup;

  consumer!: IConsumer;
  consumerFound = false;

  className = "ConsumerBusinessDetailsSearchComponent";
  debug = console.log;

  constructor(
    formBuilder: FormBuilder,
    private consumerBusinessService: ConsumerBusinessService
  ) {
    this.searchConsumerFormGroup = formBuilder.group(
      {
        consumerId: new FormControl('', Validators.required)
      }
    );
  }

  ngOnInit(): void {
  }

  getConsumerBusiness() {
    let consumerId = -1;

    if (this.searchConsumerFormGroup.valid) {
      consumerId = Number(this.searchConsumerFormGroup.get('consumerId')?.value);

      console.log(consumerId);
      this.consumerBusinessService.getConsumerBusiness(consumerId).subscribe((result) => {
        let consumer = (result as BusinessMaster).consumer;

        if (consumer) {
          this.consumer = consumer;
          this.consumerFound = true;
        }
      });
    }
  }

  updateConsumerBusiness() {
    let functionName = "updateConsumerBusiness()";

    this.debug(`${this.className}::${functionName}`);

    this.consumerBusinessService.updateConsumerBusinessSubject.next(this.consumer);
  }

  collapseConsumerBusinessDetails() {
    this.consumerFound = false;

    this.resetForm();
  }

  resetForm() {
    this.searchConsumerFormGroup.reset();
  }
}
