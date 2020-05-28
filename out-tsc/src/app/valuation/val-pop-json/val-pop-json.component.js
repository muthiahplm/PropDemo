import * as tslib_1 from "tslib";
import { Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
let ValPopJsonComponent = class ValPopJsonComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        console.log(this.data);
    }
    ngOnInit() {
    }
    /* To copy Text from Textbox */
    copyInputMessage() {
        this.inputElement.nativeElement.select();
        document.execCommand('copy');
        this.inputElement.nativeElement.setSelectionRange(0, 0);
    }
    onNoClick() {
        this.dialogRef.close();
    }
};
tslib_1.__decorate([
    ViewChild('inputElement', { static: false })
], ValPopJsonComponent.prototype, "inputElement", void 0);
ValPopJsonComponent = tslib_1.__decorate([
    Component({
        selector: 'app-val-pop-json',
        templateUrl: './val-pop-json.component.html',
        styleUrls: ['./val-pop-json.component.css']
    }),
    tslib_1.__param(1, Inject(MAT_DIALOG_DATA))
], ValPopJsonComponent);
export { ValPopJsonComponent };
//# sourceMappingURL=val-pop-json.component.js.map