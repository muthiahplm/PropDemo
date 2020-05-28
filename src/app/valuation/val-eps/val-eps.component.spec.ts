import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValEpsComponent } from './val-eps.component';

describe('ValEpsComponent', () => {
  let component: ValEpsComponent;
  let fixture: ComponentFixture<ValEpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValEpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValEpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
