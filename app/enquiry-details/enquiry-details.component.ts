import { Component, OnInit, Input } from '@angular/core';
import { EnquiryService } from '../enquiry.service';
import { Enquiry } from '../enquiry';

@Component({
  selector: 'app-enquiry-details',
  templateUrl: './enquiry-details.component.html',
  styleUrls: ['./enquiry-details.component.css']
})
export class EnquiryDetailsComponent implements OnInit {

  @Input()
  enquiry: Enquiry;
  constructor(private enquiryService: EnquiryService) { }

  clearEnquiry() {
    this.enquiry = null;
  }

  ngOnInit() {
  }

}
