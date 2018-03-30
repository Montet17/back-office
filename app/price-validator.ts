import { AbstractControl } from '@angular/forms';

export function ValidatePrice(control: AbstractControl) {
    console.log(control.value);
    if(control.value<10||control.value>150)
        return { invalidPrice: true };
  
        return null;
}
