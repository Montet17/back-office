import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EnquiryService } from './enquiry.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RetailSupportPolicyListComponent } from './retail-support-policy-list/retail-support-policy-list.component';
import { RetailPolicyCreateComponent } from './retail-policy-create/retail-policy-create.component';
import { DateOfBirthPickerModule } from './date-of-birth-picker/date-of-birth-picker.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FieldErrorDisplayComponent } from './field-error-display/field-error-display.component';
import { EnquiryDetailsComponent } from './enquiry-details/enquiry-details.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    RetailSupportPolicyListComponent,
    RetailPolicyCreateComponent,
    FieldErrorDisplayComponent,
    EnquiryDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DateOfBirthPickerModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [EnquiryService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
