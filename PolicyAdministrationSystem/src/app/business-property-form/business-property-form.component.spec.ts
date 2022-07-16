import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessPropertyFormComponent } from './business-property-form.component';

describe('BusinessPropertyFormComponent', () => {
  let component: BusinessPropertyFormComponent;
  let fixture: ComponentFixture<BusinessPropertyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessPropertyFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessPropertyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
