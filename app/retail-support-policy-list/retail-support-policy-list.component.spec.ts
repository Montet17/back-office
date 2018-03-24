import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailSupportPolicyListComponent } from './retail-support-policy-list.component';

describe('RetailSupportPolicyListComponent', () => {
  let component: RetailSupportPolicyListComponent;
  let fixture: ComponentFixture<RetailSupportPolicyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetailSupportPolicyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetailSupportPolicyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
