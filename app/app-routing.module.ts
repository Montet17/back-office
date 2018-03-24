import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { RetailSupportPolicyListComponent } from './retail-support-policy-list/retail-support-policy-list.component';
import { RetailPolicyCreateComponent } from './retail-policy-create/retail-policy-create.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'retailsupport', component: RetailSupportPolicyListComponent },
  { path: 'createRetail', component: RetailPolicyCreateComponent }
  
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
