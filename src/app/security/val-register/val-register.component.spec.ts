import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValRegisterComponent } from './val-register.component';

describe('ValRegisterComponent', () => {
  let component: ValRegisterComponent;
  let fixture: ComponentFixture<ValRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
