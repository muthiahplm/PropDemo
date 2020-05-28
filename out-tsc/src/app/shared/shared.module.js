import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMatModule } from './angular-mat/angular-mat.module';
import { ValDecPipePipe } from './Pipe/val-dec-pipe.pipe';
import { FlexLayoutModule } from '@angular/flex-layout';
let SharedModule = class SharedModule {
};
SharedModule = tslib_1.__decorate([
    NgModule({
        declarations: [ValDecPipePipe],
        imports: [
            CommonModule,
            AngularMatModule,
            FlexLayoutModule
        ],
        exports: [
            AngularMatModule,
            ValDecPipePipe,
            FlexLayoutModule
        ]
    })
], SharedModule);
export { SharedModule };
//# sourceMappingURL=shared.module.js.map