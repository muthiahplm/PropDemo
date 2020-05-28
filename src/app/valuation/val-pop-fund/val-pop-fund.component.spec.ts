import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValPopFundComponent } from './val-pop-fund.component';

describe('ValPopFundComponent', () => {
  let component: ValPopFundComponent;
  let fixture: ComponentFixture<ValPopFundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValPopFundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValPopFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
