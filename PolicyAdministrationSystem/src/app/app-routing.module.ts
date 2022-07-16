import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessPropertyParentComponent } from './business-property-parent/business-property-parent.component';
import { ConsumerBusinessParentComponent } from './consumer-business-parent/consumer-business-parent.component';
import { LoginComponent } from './login/login.component';
import { ParentComponent } from './parent/parent.component';
import { PolicyParentComponent } from './policy-parent/policy-parent.component';
import { QuotesComponent } from './quotes/quotes.component';

const routes: Routes = [
  { path: "consumerBusiness", component: ConsumerBusinessParentComponent },
  { path: "businessProperty", component: BusinessPropertyParentComponent },
  { path: "policy", component: PolicyParentComponent },
  { path: "login", component: LoginComponent },
  { path: "quotes", component: QuotesComponent },
  { path: "", redirectTo: "login", pathMatch: "full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
