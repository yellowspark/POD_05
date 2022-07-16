import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IConsumerPolicy } from '../Models/ConsumerPolicy';
import { PolicyService } from '../policy.service';

@Component({
  selector: 'app-issue-policy',
  templateUrl: './issue-policy.component.html',
  styleUrls: ['./issue-policy.component.css']
})
export class IssuePolicyComponent implements OnInit {

  formGroup: FormGroup;

  constructor(
    formBuilder: FormBuilder,
    private policyService: PolicyService
  ) {
    this.formGroup = formBuilder.group({
      policyId: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
  }

  issuePolicy() {
    if (this.formGroup.valid) {
      let policyId = Number(this.formGroup.get('policyId')?.value ?? "");

      console.log("ISSUING policy for ", policyId);
      this.policyService.issuePolicy(policyId).subscribe(result => {
        console.log("ISSUED policy : ", result);

        let consumerPolicy = (result as IConsumerPolicy);

        alert(`Issued Policy ID : ${consumerPolicy.id}.\n\nStatus : ` + consumerPolicy.acceptedQuotes.status);
      });

      this.resetForm();
    }
  }

  resetForm() {
    this.formGroup.reset();
  }

}
