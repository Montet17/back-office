export class Enquiry {

  constructor() {
    this.driverDOB = new Date("12/12/1987");
  }
    id: number;
  car: string;
  driver: string;
  driverDOB: Date;
  startDate: Date;
  endDate: Date;
  status: number;
  price: number;
}
