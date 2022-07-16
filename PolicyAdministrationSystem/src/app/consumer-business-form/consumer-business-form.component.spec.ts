import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerBusinessFormComponent } from './consumer-business-form.component';

describe('ConsumerBusinessFormComponent', () => {
  let component: ConsumerBusinessFormComponent;
  let fixture: ComponentFixture<ConsumerBusinessFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumerBusinessFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerBusinessFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
