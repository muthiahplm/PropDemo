import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValGridComponent } from './val-grid.component';

describe('ValGridComponent', () => {
  let component: ValGridComponent;
  let fixture: ComponentFixture<ValGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
