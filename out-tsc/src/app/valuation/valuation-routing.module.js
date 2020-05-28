import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ValuationComponent } from './valuation.component';
const routes = [
    { path: '', component: ValuationComponent }
];
let ValuationRoutingModule = class ValuationRoutingModule {
};
ValuationRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
], ValuationRoutingModule);
export { ValuationRoutingModule };
//# sourceMappingURL=valuation-routing.module.js.map