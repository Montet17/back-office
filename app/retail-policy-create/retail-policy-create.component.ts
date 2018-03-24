import { Component, OnInit } from '@angular/core';
import { EnquiryService } from '../enquiry.service';
import { Enquiry } from '../enquiry';
import { EnquiryStatusEnum } from '../enquiry-status-enum';
import { FormControl,FormGroup, FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-retail-policy-create',
  templateUrl: './retail-policy-create.component.html',
  styleUrls: ['./retail-policy-create.component.css']
})
export class RetailPolicyCreateComponent implements OnInit {
  
  enquiryForm:FormGroup;
    
  constructor(private enquiryService: EnquiryService,private fb:FormBuilder) 
  { 
   this.createForm(); 
  }
  createForm() {
    this.enquiryForm = this.fb.group({
      id: ['',Validators.required],
      car: ['',Validators.required],
      driver: ['',Validators.required],
      driverDOB: [Validators.required],
      startDate: [Validators.required],
      endDate: [Validators.required],
      status: [2,Validators.required],
      price: [,Validators.required],
    });
  }

  enquiryFormSubmit()
  {
    console.log("submitted");
  }
  ngOnInit() {    
  } 

}
