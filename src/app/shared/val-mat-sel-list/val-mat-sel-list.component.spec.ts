import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValMatSelListComponent } from './val-mat-sel-list.component';

describe('ValMatSelListComponent', () => {
  let component: ValMatSelListComponent;
  let fixture: ComponentFixture<ValMatSelListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValMatSelListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValMatSelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
