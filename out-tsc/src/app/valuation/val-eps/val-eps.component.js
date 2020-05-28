import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
let ValEpsComponent = class ValEpsComponent {
    constructor(valEpsBuilder, valService) {
        this.valEpsBuilder = valEpsBuilder;
        this.valService = valService;
    }
    ngOnInit() {
        this.valEpsForm = this.valEpsBuilder.group({
            eps: ['3.02', Validators.required],
            hpe: ['20.01', Validators.required],
            lpe: ['19.24', Validators.required],
            //cpe: ['19.62', Validators.required],
            ape: ['20.22', Validators.required],
        });
        this.valService.obsColumnScreenSize.subscribe((size) => {
            if (size == 1) {
                this.gridCol = size;
            }
            else {
                this.gridCol = 3;
            }
        });
    }
    setProfit() {
        this.valService.setProfit(this.valEpsForm.value);
    }
};
ValEpsComponent = tslib_1.__decorate([
    Component({
        selector: 'val-eps',
        templateUrl: './val-eps.component.html',
        styleUrls: ['./val-eps.component.css']
    })
], ValEpsComponent);
export { ValEpsComponent };
//# sourceMappingURL=val-eps.component.js.map