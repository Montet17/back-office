import { Component, OnInit } from '@angular/core';
import { EnquiryService } from '../enquiry.service';
import { Enquiry } from '../enquiry';

@Component({
  selector: 'app-retail-support-policy-list',
  templateUrl: './retail-support-policy-list.component.html',
  styleUrls: ['./retail-support-policy-list.component.css']
})

export class RetailSupportPolicyListComponent implements OnInit {

  constructor(private enquiryService: EnquiryService) { }

  enquiries:Enquiry[];

  private onError(){
    console.log("There was an error");
  }

  ngOnInit() {
    this.enquiryService.getEnquiries().subscribe(
       n => console.log('onNext: %s',  this.enquiries=n), 
       e => console.log('onErrorskjhdhjsdk: %s', e),
      () =>{
        console.log('onCompleted');
        console.log(this.enquiries)
      });      
  }
}


//Whats the execution order here?
      // a => console.log('onNext: %s', a), d => this.onError(), () => console.log('onCompleted'));
      // The onCompleted event handler executes after the Observable has finished returning all its data. This is less useful in the case of the Http.get() call, because all the data we need is passed into the onNext handler.