import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValPopJsonComponent } from './val-pop-json.component';

describe('ValPopJsonComponent', () => {
  let component: ValPopJsonComponent;
  let fixture: ComponentFixture<ValPopJsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValPopJsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValPopJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
