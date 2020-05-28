import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MantraDynamicComponent } from './mantra-dynamic.component';

describe('MantraDynamicComponent', () => {
  let component: MantraDynamicComponent;
  let fixture: ComponentFixture<MantraDynamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MantraDynamicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MantraDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
