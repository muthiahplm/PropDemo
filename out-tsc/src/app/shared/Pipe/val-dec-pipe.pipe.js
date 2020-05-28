import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { DecimalPipe } from '@angular/common';
let ValDecPipePipe = class ValDecPipePipe extends DecimalPipe {
    transform(value, ...args) {
        let result;
        result = super.transform(value, "1.2-2");
        return result;
    }
};
ValDecPipePipe = tslib_1.__decorate([
    Pipe({
        name: 'valDecPipe'
    })
], ValDecPipePipe);
export { ValDecPipePipe };
//# sourceMappingURL=val-dec-pipe.pipe.js.map