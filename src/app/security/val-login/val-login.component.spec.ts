import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValLoginComponent } from './val-login.component';

describe('ValLoginComponent', () => {
  let component: ValLoginComponent;
  let fixture: ComponentFixture<ValLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
