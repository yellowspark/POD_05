import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessPropertyParentComponent } from './business-property-parent.component';

describe('BusinessPropertyParentComponent', () => {
  let component: BusinessPropertyParentComponent;
  let fixture: ComponentFixture<BusinessPropertyParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessPropertyParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessPropertyParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
