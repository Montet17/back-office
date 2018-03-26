import { Component, OnInit } from '@angular/core';
import { EnquiryService } from '../enquiry.service';
import { Enquiry } from '../enquiry';
import { Driver } from '../driver';
import { EnquiryStatusEnum } from '../enquiry-status-enum';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-retail-policy-create',
  templateUrl: './retail-policy-create.component.html',
  styleUrls: ['./retail-policy-create.component.css']
})
export class RetailPolicyCreateComponent implements OnInit {

  enquiryForm: FormGroup;
  enquiry: Enquiry;

  constructor(private enquiryService: EnquiryService, private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.enquiryForm = this.fb.group({
      id: ['', Validators.required],
      car: ['', Validators.required],
      driver: this.fb.group({
        name:["",Validators.required],
        dob:["",Validators.required]
      }),      
      startDate: [Validators.required],
      endDate: [Validators.required],
      status: [2, Validators.required],
      price: [, Validators.required],
    });
  }

  enquiryFormSubmit() {

    Object.keys(this.enquiryForm.controls).forEach(field => { // {1}
      const control = this.enquiryForm.get(field);            // {2}
      control.markAsTouched({ onlySelf: true });       // {3}
    });
    if (!this.enquiryForm.valid) {
      console.log('the form is not valid');
      return ;
    }

     const formModel = this.enquiryForm.value;
    // this.enquiry = new Enquiry();
    // this.enquiry.id = formModel.id as number;
    // this.enquiry.car = formModel.car;
    // this.enquiry.driver = formModel.driver;
    // this.enquiry.driverDOB = formModel.driverDOB as Date;
    // this.enquiry.startDate = formModel.startDate as Date;
    // this.enquiry.endDate = formModel.endDate as Date;
    // this.enquiry.status = formModel.status as number;
    // this.enquiry.price = formModel.price as number;
    //as long as data model matches form model post will work alone

    this.enquiryService.createEnquiry(formModel).subscribe(n => {
      console.log("Next");
    }, 
    e => console.log("error"), 
    () =>this.createForm());
  }
  ngOnInit() {
  }

}
