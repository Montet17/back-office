import { Component, OnInit } from '@angular/core';
import { EnquiryService } from '../enquiry.service';
import { Enquiry } from '../enquiry';
import { Driver } from '../driver';
import { EnquiryStatusEnum } from '../enquiry-status-enum';
import { FormControl, FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ValidatePrice } from '../price-validator';

@Component({
  selector: 'app-retail-policy-create',
  templateUrl: './retail-policy-create.component.html',
  styleUrls: ['./retail-policy-create.component.css']
})
export class RetailPolicyCreateComponent implements OnInit {

  enquiryForm: FormGroup;
  enquiry: Enquiry;
  private formSubmitAttempt: boolean;

  constructor(private enquiryService: EnquiryService, private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
  }


  createForm() {
    this.enquiryForm = this.fb.group({
      car: ['', Validators.required],
      drivers: this.fb.array([this.createDriverFormGroup()]),
      startDate: [Validators.required],
      endDate: [Validators.required],
      status: [2, Validators.required],
      price: [, [Validators.required, ValidatePrice]],
      
    });
    this.formSubmitAttempt = false;
    // this.setDrivers(this.enquiry.drivers); //load drivers from the server
  }

  // setDrivers(drivers: Driver[]) {
  //   const driversFGs = this.enquiry.drivers.map(d => this.fb.group(drivers));
  //   console.log(driversFGs);
  //   const driversFormArray = this.fb.array(driversFGs);
  //   console.log(driversFormArray);
  //   // this.enquiryForm.setControl('drivers', driversFormArray);
  // }

  addDriver() {
    this.drivers.push(this.createDriverFormGroup());
  }

  createDriverFormGroup(): FormGroup {
    return this.fb.group({
      name: '',
      dob: Date
    });
  }
  get drivers(): FormArray {
    return this.enquiryForm.get('drivers') as FormArray;
  };

  isFieldValid(field: string) {
    return (!this.enquiryForm.get(field).valid && this.enquiryForm.get(field).touched) ||
      (this.enquiryForm.get(field).untouched && this.formSubmitAttempt);
  }

  validateAllFormFields(formArray: FormArray) {
    Object.keys(formArray.controls).forEach(formGroup => {
      const group = formArray.get(formGroup);
      if (group instanceof FormGroup) {

        Object.keys(group.controls).forEach(formField => {
          const field = group.get(formField);
          console.log(field);//

        });
      }
    });
  }

  isNestedFieldValid(field: string) {
    console.log(field);
  }



  enquiryFormSubmit() {
    this.formSubmitAttempt = true;
    if (!this.enquiryForm.valid) {
      console.log("forminvalid");
      return;
    }

    const formModel = this.enquiryForm.value;

    this.enquiryService.createEnquiry(formModel).subscribe(n => {
      console.log("Next");
    },
      e => console.log("error"),
      () => this.createForm());//complete
  }
}
