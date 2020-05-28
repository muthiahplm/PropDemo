import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValMetaIRRComponent } from './val-meta-irr.component';

describe('ValMetaIRRComponent', () => {
  let component: ValMetaIRRComponent;
  let fixture: ComponentFixture<ValMetaIRRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValMetaIRRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValMetaIRRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
