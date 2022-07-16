import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BusinessPropertyService } from '../business-property.service';
import { IProperty, Property } from '../Models/Property';
import { IPropertyMaster } from '../Models/PropertyMaster';

@Component({
  selector: 'app-business-property-form',
  templateUrl: './business-property-form.component.html',
  styleUrls: ['./business-property-form.component.css']
})
export class BusinessPropertyFormComponent implements OnInit {

  formGroup: FormGroup;
  constructor(
    formBuilder: FormBuilder,
    private businessPropertyService: BusinessPropertyService
  ) {
    this.formGroup = formBuilder.group({
      id: new FormControl('', Validators.required),
      squareFeet: new FormControl('', Validators.required),
      buildingType: new FormControl('', Validators.required),
      storeys: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      consumerID: new FormControl('', Validators.required),
      costOfAsset: new FormControl('', Validators.required),
      salvageValue: new FormControl('', Validators.required),
      usefulLifeOfAsset: new FormControl('', Validators.required),
      propertyType: new FormControl('', Validators.required)
    });
  }

  ngOnInit(): void {
    this.businessPropertyService.updateBusinessPropertySubject.subscribe(this.patchForm.bind(this));
  }

  propertyBeingUpdated = false;

  onSubmit() {

    console.log(this.formGroup.value);
    if (this.formGroup.valid) {
      let businessProperty = new Property(
        this.formGroup.value as IProperty
      );

      console.log("NEW PROPERTY : ", businessProperty);

      this.businessPropertyService.submitBusinessProperty(businessProperty, this.propertyBeingUpdated).subscribe(result => {
        console.log("BUSINESS PROPERTY submitted successfully : ", result);

        let property = result as IPropertyMaster;

        alert(`Business Property submitted.\nProperty ID : ${property.property.id}`);
      });

      this.resetForm();

      this.propertyBeingUpdated = false;
    }
  }

  patchForm(property: IProperty) {
    console.log("TO BE UPDATED property :", property.id);
    this.formGroup.setValue(
      property
    );

    this.propertyBeingUpdated = true;
  }

  resetForm() {
    this.formGroup.reset();
  }
}
