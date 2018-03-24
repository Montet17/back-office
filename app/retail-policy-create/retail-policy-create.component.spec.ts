import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailPolicyCreateComponent } from './retail-policy-create.component';

describe('RetailPolicyCreateComponent', () => {
  let component: RetailPolicyCreateComponent;
  let fixture: ComponentFixture<RetailPolicyCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailPolicyCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailPolicyCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
