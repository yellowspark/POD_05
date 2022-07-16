import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IConsumerPolicy } from '../Models/ConsumerPolicy';
import { PolicyService } from '../policy.service';

@Component({
  selector: 'app-view-policy',
  templateUrl: './view-policy.component.html',
  styleUrls: ['./view-policy.component.css']
})
export class ViewPolicyComponent implements OnInit {

  formGroup: FormGroup;

  policyFound = false;
  policy?: IConsumerPolicy = undefined;

  public constructor(
    formBuilder: FormBuilder,
    private policyService: PolicyService
  ) {
    this.formGroup = formBuilder.group(
      {
        policyId: new FormControl('', Validators.required),
      }
    );
  }

  ngOnInit(): void {
  }

  getPolicyDetails() {
    if (this.formGroup.valid) {
      let policyId = Number(this.formGroup.get("policyId")?.value ?? "");

      this.policyService.viewPolicy(policyId).subscribe(
        (result) => {
          console.log("GOT POLICY : ", result);

          let policy = (result as IConsumerPolicy);
          this.policyFound = true;
          this.policy = policy;
        }
      );

      this.resetForm();
    }
  }

  resetForm() {
    this.formGroup.reset();
  }

  collapsePolicyDetails() {
    this.policyFound = false;
    this.policy = undefined;
  }
}
