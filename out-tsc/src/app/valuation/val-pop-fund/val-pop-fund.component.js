import * as tslib_1 from "tslib";
import { Component, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
let ValPopFundComponent = class ValPopFundComponent {
    constructor(_bottomSheetRef, data) {
        this._bottomSheetRef = _bottomSheetRef;
        this.data = data;
    }
    ngOnInit() {
    }
};
ValPopFundComponent = tslib_1.__decorate([
    Component({
        selector: 'val-pop-fund',
        templateUrl: './val-pop-fund.component.html',
        styleUrls: ['./val-pop-fund.component.css']
    }),
    tslib_1.__param(1, Inject(MAT_BOTTOM_SHEET_DATA))
], ValPopFundComponent);
export { ValPopFundComponent };
//# sourceMappingURL=val-pop-fund.component.js.map