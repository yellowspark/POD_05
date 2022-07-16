import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessPropertyDetailsSearchComponent } from './business-property-details-search.component';

describe('BusinessPropertyDetailsSearchComponent', () => {
  let component: BusinessPropertyDetailsSearchComponent;
  let fixture: ComponentFixture<BusinessPropertyDetailsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessPropertyDetailsSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessPropertyDetailsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
