import { async, TestBed } from '@angular/core/testing';
import { ValPopFundComponent } from './val-pop-fund.component';
describe('ValPopFundComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ValPopFundComponent]
        })
            .compileComponents();
    }));
    beforeEach(() => {
        fixture = TestBed.createComponent(ValPopFundComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=val-pop-fund.component.spec.js.map