import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateOfBirthPickerComponent } from './date-of-birth-picker/date-of-birth-picker.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[DateOfBirthPickerComponent],
  declarations: [DateOfBirthPickerComponent]
})
export class DateOfBirthPickerModule { }
