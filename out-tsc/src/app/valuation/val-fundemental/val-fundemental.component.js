import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let ValFundementalComponent = class ValFundementalComponent {
    constructor(fundmlForm, valService) {
        this.fundmlForm = fundmlForm;
        this.valService = valService;
    }
    ngOnInit() {
        this.fundmlFormGroup = this.fundmlForm.group({
            de: ['.08', Validators.required],
            ce: ['1', Validators.required],
            roic: [12, Validators.required],
            evbt: [12, Validators.required],
            ps: [5, Validators.required]
        });
    }
    setFundemental() {
        this.valService.setFundemental(this.fundmlFormGroup.value);
    }
};
ValFundementalComponent = tslib_1.__decorate([
    Component({
        selector: 'val-fundemental',
        templateUrl: './val-fundemental.component.html',
        styleUrls: ['./val-fundemental.component.css']
    })
], ValFundementalComponent);
export { ValFundementalComponent };
//# sourceMappingURL=val-fundemental.component.js.map