import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-date-of-birth-picker',
  templateUrl: './date-of-birth-picker.component.html',
  styleUrls: ['./date-of-birth-picker.component.css']
})
export class DateOfBirthPickerComponent implements OnInit {

  @Input() dateofbirth: Date;
  @Input() drivername: string;
  @Output() drivernameChange = new EventEmitter();

  change(newValue) {     
    this.drivernameChange.emit(newValue);
  }
  constructor() { }

 
  ngOnInit() {
  }

}
