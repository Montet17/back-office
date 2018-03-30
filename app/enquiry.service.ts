import { Injectable } from '@angular/core';
import { Enquiry } from './enquiry';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const apiUrl = "http://localhost:63817/api/enquiry";
@Injectable()
export class EnquiryService {
 
  constructor(private httpClient:HttpClient) { }

  getEnquiry(id:number):Observable<Enquiry> {
    console.log(id);
    return this.httpClient.get<Enquiry>(apiUrl+"/findenquiry/"+id);
  }

  getEnquiries():Observable<Enquiry[]> {
    return this.httpClient.get<Enquiry[]>(apiUrl+"/get");    
  }

  createEnquiry(enquiry:string){    
    return this.httpClient.post(apiUrl+"/post",enquiry);  
  }
}
