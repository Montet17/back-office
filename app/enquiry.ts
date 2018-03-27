import { Driver } from "./driver";

export class Enquiry {

  constructor() {
    
  }
    id: number;
  car: string;  
  startDate: Date;
  endDate: Date;
  status: number;
  price: number;
  drivers:Driver[];
}
