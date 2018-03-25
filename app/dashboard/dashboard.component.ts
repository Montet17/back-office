import { Component, OnInit } from '@angular/core';
import { Enquiry } from '../enquiry';
import { EnquiryService } from '../enquiry.service';
import { DecimalPipe } from '@angular/common';
import { EnquiryStatusEnum } from '../enquiry-status-enum';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private enquiryService: EnquiryService) { }

  enquiryCount: number;
  policiesPurchased: number;
  uptake: number;
  salesTotal: number = 0;
  refusalCount: number;
  enquiries: Enquiry[] = [];

  ngOnInit() {

    this.enquiryService.getEnquiries().subscribe(n => {
      this.enquiries = n;
      let sales = this.enquiries.filter(e => e.status == EnquiryStatusEnum.purchase);
      this.policiesPurchased = sales.length;
      this.enquiryCount = this.enquiries.length;
      this.uptake = this.policiesPurchased / this.enquiryCount;
      for (let enquiry of sales) {
        this.salesTotal += enquiry.price;
      }
      this.refusalCount = this.enquiries.filter(e => e.status == EnquiryStatusEnum.refusal).length;
    }, e => console.log("error"),
      () => console.log("complete"));
  }
}
