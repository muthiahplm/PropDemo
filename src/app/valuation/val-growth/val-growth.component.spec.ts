import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValGrowthComponent } from './val-growth.component';

describe('ValGrowthComponent', () => {
  let component: ValGrowthComponent;
  let fixture: ComponentFixture<ValGrowthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValGrowthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValGrowthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
