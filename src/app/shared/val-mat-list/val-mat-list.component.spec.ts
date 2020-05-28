import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValMatListComponent } from './val-mat-list.component';

describe('ValMatListComponent', () => {
  let component: ValMatListComponent;
  let fixture: ComponentFixture<ValMatListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValMatListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValMatListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
