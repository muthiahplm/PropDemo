import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValFundementalComponent } from './val-fundemental.component';

describe('ValFundementalComponent', () => {
  let component: ValFundementalComponent;
  let fixture: ComponentFixture<ValFundementalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValFundementalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValFundementalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
