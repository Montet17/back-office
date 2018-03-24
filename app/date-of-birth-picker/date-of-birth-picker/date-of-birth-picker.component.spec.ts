import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DateOfBirthPickerComponent } from './date-of-birth-picker.component';

describe('DateOfBirthPickerComponent', () => {
  let component: DateOfBirthPickerComponent;
  let fixture: ComponentFixture<DateOfBirthPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DateOfBirthPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DateOfBirthPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
