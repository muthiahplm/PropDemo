import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { ValGrowthComponent } from './val-growth/val-growth.component';
import { ValMetaIRRComponent } from './val-meta-irr/val-meta-irr.component';
import { ValFundementalComponent } from './val-fundemental/val-fundemental.component';
import { ValEpsComponent } from './val-eps/val-eps.component';
import { ValPopJsonComponent } from './val-pop-json/val-pop-json.component';
let ValuationComponent = class ValuationComponent {
    constructor(valService, valformBuilder, dialog, observableMedia) {
        this.valService = valService;
        this.valformBuilder = valformBuilder;
        this.dialog = dialog;
        this.observableMedia = observableMedia;
        this.tiles = [
            { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
            { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
            { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
            { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
        ];
        this.gridCol = 2;
        this.gridByBreakpoint = {
            xl: 2,
            lg: 1,
            md: 1,
            sm: 1,
            xs: 1
        };
    }
    ngOnInit() {
        this.valFormGroup = this.valformBuilder.group({
            sym: ['ALB', Validators.required],
            cp: ['61', Validators.required]
        });
        //  console.log("val", this.valFormGroup.valid);
        //console.log(this.gridCol);
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.valFormGroup.addControl('growthForm', this.valGrowth.valGrowthForm);
            this.valFormGroup.addControl('metaForm', this.valMeta.metformGroup);
            this.valFormGroup.addControl('epsForm', this.valEps.valEpsForm);
            // this.valGrowth.valGrowthForm.setParent(this.valFormGroup);
        }, 0);
        this.observableMedia.media$.subscribe((change) => {
            this.gridCol = this.gridByBreakpoint[change.mqAlias];
            console.log(change.mqAlias);
            console.log(this.gridCol);
            this.valService.setColumnScreenSize(this.gridCol);
        });
    }
    calculateValuation() {
        this.valGrowth.setGrowth();
        this.valEps.setProfit();
        this.valFundml.setFundemental();
        this.valMeta.setMeta();
        this.valService.setValBasic(this.valFormGroup.value);
        this.valService.calcValuation()
            .subscribe((jsonData) => {
            this.openDialog(jsonData);
        });
    }
    openDialog(valdata) {
        const dialogRef = this.dialog.open(ValPopJsonComponent, {
            height: '550px',
            width: '550px',
            data: { valdata }
        });
    }
};
tslib_1.__decorate([
    ViewChild(ValGrowthComponent, { static: false })
], ValuationComponent.prototype, "valGrowth", void 0);
tslib_1.__decorate([
    ViewChild(ValMetaIRRComponent, { static: false })
], ValuationComponent.prototype, "valMeta", void 0);
tslib_1.__decorate([
    ViewChild(ValEpsComponent, { static: false })
], ValuationComponent.prototype, "valEps", void 0);
tslib_1.__decorate([
    ViewChild(ValFundementalComponent, { static: false })
], ValuationComponent.prototype, "valFundml", void 0);
ValuationComponent = tslib_1.__decorate([
    Component({
        selector: 'val-header',
        templateUrl: './valuation.component.html',
        styleUrls: ['./valuation.component.css']
    })
], ValuationComponent);
export { ValuationComponent };
//# sourceMappingURL=valuation.component.js.map