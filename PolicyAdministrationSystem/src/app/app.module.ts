import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParentComponent } from './parent/parent.component';
import { ConsumerBusinessParentComponent } from './consumer-business-parent/consumer-business-parent.component';
import { ConsumerBusinessFormComponent } from './consumer-business-form/consumer-business-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from "@angular/material/card";
import { MatExpansionModule } from "@angular/material/expansion";
import { ConsumerBusinessDetailsSearchComponent } from './consumer-business-details-search/consumer-business-details-search.component';
import { BusinessPropertyFormComponent } from './business-property-form/business-property-form.component';
import { BusinessPropertyDetailsSearchComponent } from './business-property-details-search/business-property-details-search.component';
import { BusinessPropertyParentComponent } from './business-property-parent/business-property-parent.component';
import { HttpClientModule } from "@angular/common/http";
import { PolicyParentComponent } from './policy-parent/policy-parent.component';
import { CreatePolicyComponent } from './create-policy/create-policy.component';
import { IssuePolicyComponent } from './issue-policy/issue-policy.component';
import { LoginComponent } from './login/login.component';
import { ViewPolicyComponent } from './view-policy/view-policy.component';
import { QuotesComponent } from './quotes/quotes.component';
@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ConsumerBusinessParentComponent,
    ConsumerBusinessFormComponent,
    ConsumerBusinessDetailsSearchComponent,
    BusinessPropertyFormComponent,
    BusinessPropertyDetailsSearchComponent,
    BusinessPropertyParentComponent,
    PolicyParentComponent,
    CreatePolicyComponent,
    IssuePolicyComponent,
    ViewPolicyComponent,
    LoginComponent,
    QuotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
