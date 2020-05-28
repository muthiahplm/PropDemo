import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MantraStaticComponent } from './mantra-static.component';

describe('MantraStaticComponent', () => {
  let component: MantraStaticComponent;
  let fixture: ComponentFixture<MantraStaticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MantraStaticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MantraStaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
