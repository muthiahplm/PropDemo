import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValuationComponent } from './valuation.component';
import { ValuationRoutingModule } from './valuation-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ValEpsComponent } from './val-eps/val-eps.component';
import { ValGrowthComponent } from './val-growth/val-growth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValserviceService } from '../valuation/valservice.service';
import { ValMetaIRRComponent } from './val-meta-irr/val-meta-irr.component';
import { ValFundementalComponent } from './val-fundemental/val-fundemental.component';
import { ValGridComponent } from './val-grid/val-grid.component';
import { HttpClientModule, } from "@angular/common/http";
import { ValPopJsonComponent } from './val-pop-json/val-pop-json.component';
import { ValPopFundComponent } from './val-pop-fund/val-pop-fund.component';
let ValuationModule = class ValuationModule {
};
ValuationModule = tslib_1.__decorate([
    NgModule({
        declarations: [ValuationComponent, ValEpsComponent, ValGrowthComponent, ValMetaIRRComponent, ValFundementalComponent, ValGridComponent, ValPopJsonComponent, ValPopFundComponent],
        imports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule,
            SharedModule,
            ValuationRoutingModule,
            HttpClientModule
        ],
        entryComponents: [ValPopJsonComponent, ValPopFundComponent],
        providers: [
            ValserviceService
        ]
    })
], ValuationModule);
export { ValuationModule };
//# sourceMappingURL=valuation.module.js.map