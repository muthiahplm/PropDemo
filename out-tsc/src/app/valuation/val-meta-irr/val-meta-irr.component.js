import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let ValMetaIRRComponent = class ValMetaIRRComponent {
    constructor(metaform, valService) {
        this.metaform = metaform;
        this.valService = valService;
    }
    ngOnInit() {
        this.metformGroup = this.metaform.group({
            irr: ['15', Validators.required],
            noOfYear: ['5', Validators.required],
            mos: ['30', Validators.required],
        });
    }
    setMeta() {
        this.valService.setMeta(this.metformGroup.value);
    }
};
ValMetaIRRComponent = tslib_1.__decorate([
    Component({
        selector: 'val-meta-irr',
        templateUrl: './val-meta-irr.component.html',
        styleUrls: ['./val-meta-irr.component.css']
    })
], ValMetaIRRComponent);
export { ValMetaIRRComponent };
//# sourceMappingURL=val-meta-irr.component.js.map