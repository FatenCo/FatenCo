import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BonPlanComponent } from './bon-plan.component';

describe('BonPlanComponent', () => {
  let component: BonPlanComponent;
  let fixture: ComponentFixture<BonPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BonPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BonPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
