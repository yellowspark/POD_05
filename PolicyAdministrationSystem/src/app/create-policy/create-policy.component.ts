import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IConsumerPolicy } from '../Models/ConsumerPolicy';
import { PolicyService } from '../policy.service';

@Component({
  selector: 'app-create-policy',
  templateUrl: './create-policy.component.html',
  styleUrls: ['./create-policy.component.css']
})
export class CreatePolicyComponent implements OnInit {

  className = "CreatePolicyComponent";
  debug = console.log;

  formGroup: FormGroup
  constructor(
    formBuilder: FormBuilder,
    private policyService: PolicyService
  ) {
    this.formGroup = formBuilder.group({
      consumerId: new FormControl('', Validators.required),
      acceptedQuotes: new FormControl('', Validators.required)
      // status: new FormControl('')
    });
  }

  ngOnInit(): void {
  }

  createPolicy() {
    let functionName = "createPolicy()";

    this.debug(`${this.className}::${functionName}`);

    if (this.formGroup.valid) {
      let consumerId = Number(this.formGroup.get('consumerId')?.value ?? "");
      let acceptedQuotes = Number(this.formGroup.get('acceptedQuotes')?.value ?? "");

      this.policyService.createPolicy({ consumerId, quotes: acceptedQuotes }).subscribe((result) => {
        console.log("CREATED POLICY :", result);

        let consumerPolicy = (result as IConsumerPolicy);

        alert(`Created Policy ID : ${consumerPolicy.id}.\n\nStatus : ` + consumerPolicy.acceptedQuotes.status);
      });

      this.resetForm();
    }
  }

  resetForm() {
    this.formGroup.reset();

  }

}
