import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerBusinessDetailsSearchComponent } from './consumer-business-details-search.component';

describe('ConsumerBusinessDetailsSearchComponent', () => {
  let component: ConsumerBusinessDetailsSearchComponent;
  let fixture: ComponentFixture<ConsumerBusinessDetailsSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumerBusinessDetailsSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerBusinessDetailsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
