import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerBusinessParentComponent } from './consumer-business-parent.component';

describe('ConsumerBusinessParentComponent', () => {
  let component: ConsumerBusinessParentComponent;
  let fixture: ComponentFixture<ConsumerBusinessParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumerBusinessParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerBusinessParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
