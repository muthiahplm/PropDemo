import { async, TestBed } from '@angular/core/testing';
import { ValMetaIRRComponent } from './val-meta-irr.component';
describe('ValMetaIRRComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ValMetaIRRComponent]
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
//# sourceMappingURL=val-meta-irr.component.spec.js.map