import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { QuotesService } from '../quotes.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  formGroup: FormGroup;

  constructor(
    private quotesService: QuotesService,
    formBuilder: FormBuilder
  ) {
    this.formGroup = formBuilder.group(
      {
        businessValue: new FormControl("", Validators.required),
        propertyValue: new FormControl("", Validators.required),
        propertyType: new FormControl("", Validators.required)
      }
    );
  }

  ngOnInit(): void {
  }

  getQuotes() {
    if (this.formGroup.valid) {
      let businessValue = Number(this.formGroup.get("businessValue")?.value ?? "");
      let propertyValue = Number(this.formGroup.get("propertyValue")?.value ?? "");
      let propertyType = this.formGroup.get("propertyType")?.value ?? "";

      this.quotesService.getQuotes(
        businessValue,
        propertyValue,
        propertyType
      ).subscribe(result => {
        let quotes = (result as number);

        alert(`Quote for your business and property details is : ${quotes}`);

        this.resetForm();
      });
    }
  }

  resetForm() {
    this.formGroup.reset();
  }

}
