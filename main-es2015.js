(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page\" fxLayout=\"column\" fxFlexFill fxLayoutGap=\"20px\">\r\n  <div class=\"page-header\">\r\n    <mat-toolbar color=\"primary\">\r\n\r\n      <mat-toolbar-row *ngIf=\" loggedInUser\">\r\n        <span class=\"example-spacer\"></span>\r\n        Welcome {{loggedInUser.username}}\r\n      </mat-toolbar-row>\r\n\r\n\r\n      <mat-toolbar-row>\r\n        <H1>PLM'S Stock Wizard</H1>\r\n        <span class=\"example-spacer\"></span>\r\n\r\n        <div>\r\n          <button mat-button routerLink=\"/valuation\">Valuation</button>\r\n\r\n        </div>\r\n        <div>\r\n          <button mat-button routerLink=\"/mantra\">Mantra's</button>\r\n\r\n        </div>\r\n        <div>\r\n          <button mat-button routerLink=\"/login\">Login </button>\r\n          <button mat-button routerLink=\"/register\">Register </button>\r\n        </div>\r\n        <div>\r\n          <button mat-button (click)=\"logout()\">Log Out</button>\r\n        </div>\r\n      </mat-toolbar-row>\r\n    </mat-toolbar>\r\n  </div>\r\n\r\n  <!--fxFlex grow shrink basis-->\r\n  <div class=\"page-content\" fxFlex=\"1 0 auto\">\r\n\r\n    <div class=\"router-content\" >\r\n\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n    <div>\r\n      <!--<mat-progress-spinner class=\"example-margin\"\r\n                            [color]=\"primary\"\r\n                            [mode]=\"indeterminate\"\r\n                            [value]=\"50\">\r\n      </mat-progress-spinner>-->\r\n    </div>\r\n\r\n  </div>\r\n  <!--<div class=\"page-content\" fxLayoutAlign=\"center\">\r\n    <mat-card>\r\n      <mat-card-title>\r\n        Investing Mantra :\r\n\r\n      </mat-card-title>\r\n      <mat-card-content>\r\n        <mat-list>\r\n          <H1 matSubheader>Long Term Prospect</H1>\r\n          <mat-list-item> Industry future </mat-list-item>\r\n          <mat-list-item> Strong Moat </mat-list-item>\r\n          <mat-list-item> Reap & Sow </mat-list-item>\r\n        </mat-list>\r\n\r\n        <mat-divider></mat-divider>\r\n        <mat-list>\r\n          <H1 matSubheader>Management</H1>\r\n          <mat-list-item> Read Management report 10k ,Leader by words </mat-list-item>\r\n          <mat-list-item> Less Acquistion and options </mat-list-item>\r\n          <mat-list-item> 5-10% R&D spending </mat-list-item>\r\n        </mat-list>\r\n\r\n\r\n      <mat-divider> </mat-divider>\r\n      <mat-list>\r\n        <H1 matSubheader>Strong Financial Health</H1>\r\n        <mat-list-item> Net  Operating/Free Cashflow consistent growth </mat-list-item>\r\n        <mat-list-item> Shareholder equity growth </mat-list-item>\r\n        <mat-list-item> Debt to Equity less than .5 </mat-list-item>\r\n        <mat-list-item> Current ratio greater than 1 </mat-list-item>\r\n        <mat-list-item> Price to Sales ratio less than 1 preferrable </mat-list-item>\r\n      </mat-list>\r\n\r\n      </mat-card-content>\r\n    </mat-card>\r\n\r\n  </div>-->\r\n\r\n\r\n  <div fxFlexShrink=\"0\" class=\"footer\">\r\n    <p class=\"copyright\">©Copyright @ 2019 - PLM</p>\r\n\r\n  </div>\r\n\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/security/val-login/val-login.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/security/val-login/val-login.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"text-align: center; \">\r\n  <div style=\" display: inline-block;\">\r\n    <plm-ng-login (onLoginAttempt)=\"onLoginResult($event)\"></plm-ng-login>\r\n  </div>\r\n  <div *ngIf=\"invalidLogin\">\r\n    Invalid Login Attempt\r\n\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/security/val-register/val-register.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/security/val-register/val-register.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"text-align: center; \">\r\n  <div style=\" display: inline-block;\">\r\n    <plm-ng-login-register ></plm-ng-login-register>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/val-mat-list/val-mat-list.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/val-mat-list/val-mat-list.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"subMantraForm\">\r\n\r\n  \r\n  <mat-list>\r\n\r\n    <H1 matSubheader>{{headerControlVal}}</H1>\r\n\r\n\r\n    <div formArrayName=\"mantraHeaderItems\">\r\n      <mat-list-item *ngFor=\"let mantra of subMantraForm.controls.mantraHeaderItems;let i = index;\">\r\n        <div [formGroupName]=\"i\">\r\n          {{mantra.value.description}}\r\n        </div>\r\n      </mat-list-item>\r\n    </div>\r\n  </mat-list>\r\n\r\n</form> \r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/val-mat-sel-list/val-mat-sel-list.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/val-mat-sel-list/val-mat-sel-list.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<mat-selection-list>\r\n  <H1 matSubheader>{{mantraValues.mantraHeader}}</H1>\r\n  <mat-list-option *ngFor=\"let mantra of mantraValues.mantraHeaderItems\" [value]=\"mantra.value\">\r\n    {{mantra.description}}\r\n  </mat-list-option>\r\n</mat-selection-list>-->\r\n\r\n<form [formGroup]=\"subMantraForm\">\r\n\r\n\r\n  <mat-selection-list (selectionChange)=\"storeMantra($event.option.value)\">\r\n\r\n    <H1 matSubheader>{{headerControlVal}}</H1>\r\n\r\n\r\n    <div formArrayName=\"mantraHeaderItems\">\r\n      <mat-list-option *ngFor=\"let mantra of subMantraForm.controls.mantraHeaderItems ;let i = index;\" [value]=\"mantra\">\r\n        <div [formGroupName]=\"i\">\r\n          {{mantra.value.description}}\r\n        </div>\r\n      </mat-list-option>\r\n    </div>\r\n  </mat-selection-list>\r\n\r\n\r\n</form>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/valuation/mantra-dynamic/mantra-dynamic.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/valuation/mantra-dynamic/mantra-dynamic.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"fg\">\r\n  <div class=\"page-content\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\">\r\n    <mat-card>\r\n      <mat-card-title>\r\n        Investing Mantra  for Ticker : {{ticker}}\r\n      </mat-card-title>\r\n\r\n\r\n      <!--<val-mat-sel-list [mantraValues]=\"valMantra.longMantra\" formControlName=\"longMantra\"></val-mat-sel-list>\r\n\r\n      <mat-divider> </mat-divider>\r\n\r\n      <val-mat-sel-list [mantraValues]=\"valMantra.mgmtMantra\" formControlName=\"mgmtMantra\"></val-mat-sel-list>\r\n\r\n      <mat-divider> </mat-divider>\r\n\r\n      <val-mat-sel-list [mantraValues]=\"valMantra.finMantra\" formControlName=\"finMantra\"></val-mat-sel-list>-->\r\n      <div *ngFor=\"let subMantra of fg.controls.subMantras; let i = index\">\r\n\r\n    \r\n        <val-mat-sel-list [subMantraForm]=\"subMantra\"></val-mat-sel-list>\r\n  <mat-divider> </mat-divider>\r\n\r\n\r\n      </div>\r\n\r\n    </mat-card>\r\n    <div fxLayout=\"row\" fxLayoutGap=\"10px\">\r\n\r\n      <button mat-raised-button color=\"primary\" (click)=\"onSubmit()\">Save </button>\r\n      <button mat-raised-button color=\"basic\" (click)=\"onCancel()\">Cancel </button>\r\n    </div>\r\n  </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/valuation/mantra-static/mantra-static.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/valuation/mantra-static/mantra-static.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"staticMantraFG\">\r\n  <div class=\"page-content\" fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n    <mat-card>\r\n      <mat-card-title>\r\n        Investing Mantra : \r\n      </mat-card-title>\r\n\r\n\r\n      \r\n      <!--<val-mat-list [mantraValues]=\"valMantra.longMantra\"></val-mat-list>\r\n\r\n  <mat-divider> </mat-divider>\r\n\r\n  <val-mat-list [mantraValues]=\"valMantra.mgmtMantra\"></val-mat-list>\r\n\r\n  <mat-divider> </mat-divider>\r\n\r\n  <val-mat-list [mantraValues]=\"valMantra.finMantra\"></val-mat-list>-->\r\n\r\n      <div *ngFor=\"let subMantra of subMantras.controls; let i = index\">\r\n    \r\n        <val-mat-list [subMantraForm]=\"subMantra\"></val-mat-list>\r\n        <mat-divider> </mat-divider>\r\n\r\n\r\n      </div>\r\n    </mat-card>\r\n  </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/valuation/val-eps/val-eps.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/valuation/val-eps/val-eps.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"valEpsForm\">\r\n  <div class=\"header-format\"><H1>Profit :</H1> </div>\r\n  <div class=\"internalMatGrid\">\r\n    <div fxLayout.xl=\"row\" fxLayout=\"column\" fxLayoutGap =\"30px\" fxLayoutGap.xl=\"150px\" fxLayoutAlign=\"start center\" fxFlexFill>\r\n\r\n      <!--<mat-grid-tile>\r\n\r\n      <mat-form-field>\r\n          <input matInput placeholder=\"Symbol\" type=\"text\" class=\"example-right-align\" formControlName=\"sym\">\r\n\r\n      </mat-form-field>\r\n\r\n  </mat-grid-tile>-->\r\n\r\n \r\n   \r\n        <mat-form-field fxFlex=\"15\">\r\n          <input matInput placeholder=\"EPS\" type=\"number\" class=\"example-right-align\" formControlName=\"eps\">\r\n          <span matPrefix>$&nbsp;</span>\r\n          <span matSuffix>.00</span>\r\n        </mat-form-field>\r\n   \r\n\r\n\r\n\r\n    \r\n        <mat-form-field fxFlex=\"15\">\r\n          <input matInput placeholder=\"52 Wk High PE\" type=\"number\" class=\"example-right-align\" formControlName=\"hpe\">\r\n\r\n          <span matSuffix>.00</span>\r\n        </mat-form-field>\r\n\r\n\r\n      \r\n\r\n\r\n        <mat-form-field fxFlex=\"15\">\r\n          <input matInput placeholder=\"52 Wk Low PE\" type=\"number\" class=\"example-right-align\" formControlName=\"lpe\">\r\n\r\n          <span matSuffix>.00</span>\r\n        </mat-form-field>\r\n\r\n\r\n\r\n\r\n        <!--<mat-grid-tile>\r\n\r\n        <mat-form-field>\r\n\r\n            <input matInput placeholder=\"Avg PE CALC\" type=\"number\" class=\"example-right-align\" disabled formControlName=\"ape\">\r\n\r\n            <span matSuffix>.00</span>\r\n        </mat-form-field>\r\n\r\n    </mat-grid-tile>-->\r\n        <!--<mat-grid-tile>\r\n\r\n        <mat-form-field>\r\n            <input matInput placeholder=\"Growth  PE CALC\" type=\"number\" class=\"example-right-align\" disabled formControlName=\"cpe\">\r\n\r\n            <span matSuffix>.00</span>\r\n        </mat-form-field>\r\n\r\n    </mat-grid-tile>-->\r\n      </div>\r\n    </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/valuation/val-fundemental/val-fundemental.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/valuation/val-fundemental/val-fundemental.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"fundmlFormGroup\">\r\n    <div class=\"header-format\"><H1>Fundemental :</H1> </div>\r\n    <div class='internalMatGrid'>\r\n      <div fxLayout.xl=\"row wrap\" fxLayout=\"column\" fxLayoutGap=\"20px\" fxLayoutAlign=\"center center\">\r\n\r\n\r\n\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Debt/Equity\" type=\"number\" class=\"example-right-align\" formControlName=\"de\">\r\n          <span matPrefix>$&nbsp;</span>\r\n          <span matSuffix>.00</span>\r\n        </mat-form-field>\r\n\r\n\r\n\r\n\r\n\r\n\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"EV/EBIT\" type=\"number\" class=\"example-right-align\" formControlName=\"evbt\">\r\n          <span matPrefix>$&nbsp;</span>\r\n          <span matSuffix>.00</span>\r\n        </mat-form-field>\r\n\r\n\r\n\r\n\r\n\r\n        <mat-form-field>\r\n\r\n          <input matInput placeholder=\"ROIC\" type=\"number\" class=\"example-right-align\" formControlName=\"roic\">\r\n          <span matPrefix>$&nbsp;</span>\r\n          <span matSuffix>.00</span>\r\n        </mat-form-field>\r\n\r\n\r\n\r\n\r\n\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Current Equity\" type=\"number\" class=\"example-right-align\" formControlName=\"ce\">\r\n          <span matPrefix>$&nbsp;</span>\r\n          <span matSuffix>.00</span>\r\n        </mat-form-field>\r\n    \r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Pice/Sales\" type=\"number\" class=\"example-right-align\" formControlName=\"ps\">        \r\n        <span matSuffix>.00</span>\r\n      </mat-form-field>\r\n    </div>\r\n\r\n      </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/valuation/val-grid/val-grid.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/valuation/val-grid/val-grid.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n  <div fxLayout.xl=\"row\" fxLayout=\"column\" fxLayoutGap=\"20px\" fxLayoutAlign=\"center center\"  fxFlexFill>\r\n    <div fxFlex=\"30\">\r\n      <mat-form-field>\r\n        <input type=\"text\" placeholder=\"Filter Symbol\" aria-label=\"Number\" matInput (keyup)=\"filterSym.next($event.target.value);\">\r\n\r\n      </mat-form-field>\r\n    </div>\r\n    <div>\r\n      <button mat-raised-button color=\"primary\" focusable=\"false\" (click)=\"reload()\">\r\n        Reload\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n \r\n\r\n  <div fxLayout=\"column\" fxLayoutAlign=\"start start\" fxLayoutAlign.xl=\"center center\" fxFlexFill>\r\n    <div class=\"internalMatGrid\" >\r\n      <mat-table #table [dataSource]=\"dataSource\" matSort matSortDirection=\"asc\">\r\n\r\n        <!--- Note that these columns can be defined in any order.\r\n          The actual rendered columns are set as a property on the row definition\" -->\r\n        <!-- Number Column -->\r\n        <ng-container matColumnDef=\"sym\">\r\n          <mat-header-cell *matHeaderCellDef>\r\n            <th>Symbol</th>\r\n\r\n\r\n          </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let row\">\r\n\r\n            <a mat-raised-button (click)=\"openBottomSheet(row)\" [ngClass]=\"{'Strong Buy':'my-sb','Buy':'my-b','Hold':'my-h', 'Sell':'my-s',\r\n                  'Strong Sell':'my-ss'}[row.decision]\">{{ row.sym }}</a>\r\n          </mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"irr\">\r\n          <mat-header-cell *matHeaderCellDef>IRR</mat-header-cell>\r\n\r\n          <mat-cell *matCellDef=\"let row\">\r\n\r\n            <mat-form-field>\r\n              <input matInput type=\"number\" class=\"example-right-align\" [(ngModel)]=\"row.meta.irr\">\r\n            </mat-form-field>\r\n          </mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"noOfYear\">\r\n          <mat-header-cell *matHeaderCellDef>Term</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let row\">\r\n            <mat-form-field>\r\n              <input matInput type=\"number\" class=\"example-right-align\" [(ngModel)]=\"row.meta.noOfYear\">\r\n            </mat-form-field>\r\n\r\n          </mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"mos\">\r\n          <mat-header-cell *matHeaderCellDef>MoS</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let row\">\r\n            <mat-form-field>\r\n              <input matInput type=\"number\" class=\"example-right-align\" [(ngModel)]=\"row.meta.mos\">\r\n            </mat-form-field>\r\n          </mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"eps\">\r\n          <div style=\"width:5%\">\r\n            <mat-header-cell *matHeaderCellDef>EPS</mat-header-cell>\r\n\r\n            <mat-cell *matCellDef=\"let row\">\r\n\r\n              <mat-form-field>\r\n                <input matInput type=\"number\" class=\"example-right-align\" [(ngModel)]=\"row.eps\">\r\n              </mat-form-field>\r\n\r\n            </mat-cell>\r\n          </div>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"futurePE\">\r\n          <mat-header-cell *matHeaderCellDef>Future PE</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let row\">\r\n\r\n            <mat-form-field>\r\n              <input matInput type=\"number\" class=\"example-right-align\" [(ngModel)]=\"row.futurePE \">\r\n            </mat-form-field>\r\n\r\n          </mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"futureGrowth\">\r\n          <mat-header-cell *matHeaderCellDef>Future Growth</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let row\">\r\n\r\n            <mat-form-field>\r\n              <input matInput type=\"text\" class=\"example-right-align\" [(ngModel)]=\"row.futureGrowth\">\r\n            </mat-form-field>\r\n\r\n          </mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"currenttPrice\">\r\n          <mat-header-cell *matHeaderCellDef>Current Price</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let row\">\r\n            <mat-form-field>\r\n              <input matInput type=\"text\" class=\"example-right-align\" [(ngModel)]=\"row.currenttPrice\">\r\n            </mat-form-field>\r\n          </mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"futurePrice\">\r\n          <mat-header-cell *matHeaderCellDef>Future Price</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let row\">{{ row.futurePrice| valDecPipe}}</mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"fairPrice\">\r\n          <mat-header-cell *matHeaderCellDef>Fair Price</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let row\">{{ row.fairPrice | valDecPipe}}</mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"finalPrice\">\r\n          <mat-header-cell *matHeaderCellDef mat-sort-header>Final Price</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let row\">{{ row.finalPrice | valDecPipe }}</mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"difference\">\r\n          <mat-header-cell *matHeaderCellDef mat-sort-header>Diff</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let row\">{{ row.difference | valDecPipe }}%</mat-cell>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"decision\">\r\n          <mat-header-cell *matHeaderCellDef mat-sort-header>Decision</mat-header-cell>\r\n          <mat-cell *matCellDef=\"let row\" [ngClass]=\"{'Strong Buy':'my-sb','Buy':'my-b','Hold':'my-h', 'Sell':'my-s',\r\n                  'Strong Sell':'my-ss'}[row.decision]\">{{ row.decision  }}</mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"payBack\">\r\n          <mat-header-cell *matHeaderCellDef>Pay Back </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let row\">{{ row.payBack| valDecPipe}}</mat-cell>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"actionsColumn\">\r\n          <mat-header-cell *matHeaderCellDef>\r\n            Try\r\n          </mat-header-cell>\r\n          <mat-cell *matCellDef=\"let row\">\r\n            <div style=\"width:50%\">\r\n              <button mat-icon-button color=\"primary\" focusable=\"false\" (click)=\"reCalculateValuation(row)\">\r\n                ReCal\r\n              </button>\r\n            </div>\r\n            <div style=\"width:30%\">\r\n              <button mat-icon-button color=\"primary\" focusable=\"false\" (click)=\"showJsonVal(row)\">\r\n                Jsn\r\n              </button>\r\n            </div>\r\n            <div>\r\n              <button mat-icon-button color=\"primary\" focusable=\"false\" (click)=\"showMantra(row)\">\r\n                Mantra\r\n              </button>\r\n            </div>\r\n          </mat-cell>\r\n        </ng-container>+++++++++++++++++++++++++++++++++++\r\n\r\n        <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n        <mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngClass]=\"{'highlight': selectedSym === row.sym}\" (click)=\"highlight(row)\"></mat-row>\r\n      </mat-table>\r\n\r\n\r\n      <mat-paginator #pgntor [length]=\"resultsLength\" [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 15]\">\r\n      </mat-paginator>\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/valuation/val-growth/val-growth.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/valuation/val-growth/val-growth.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"valGrowthForm\" >\r\n    <div class=\"header-format\"><H1>Growth :</H1> </div>\r\n    <div class='internalMatGrid'>\r\n      <div fxLayout.xl=\"row wrap\" fxLayout=\"column\" fxLayoutGap=\"20px\" fxLayoutAlign=\"center center\" >\r\n\r\n        <mat-form-field fxFlex=\"10\" >\r\n          <input matInput placeholder=\"Total Growth Year\" type=\"number\" class=\"example-right-align\" formControlName=\"growthYear\">\r\n        </mat-form-field>\r\n\r\n\r\n\r\n\r\n\r\n        <mat-form-field  fxFlex=\"25\">\r\n          <input matInput placeholder=\"1st Yr Tot Equity\" type=\"number\" class=\"example-right-align\" formControlName=\"firstYrGrowth\">\r\n          <span matPrefix>$&nbsp;</span>\r\n          <span matSuffix>.00</span>\r\n        </mat-form-field>\r\n\r\n\r\n\r\n\r\n\r\n        <mat-form-field fxFlex=\"25\">\r\n          <input matInput placeholder=\"Last Yr Tot Equity\" type=\"number\" class=\"example-right-align\" formControlName=\"lastYrGrowth\">\r\n          <span matPrefix>$&nbsp;</span>\r\n          <span matSuffix>.00</span>\r\n        </mat-form-field>\r\n\r\n\r\n\r\n\r\n      </div>\r\n      <div fxLayout.xl=\"row wrap\" fxLayout=\"column\" fxLayoutGap=\"20px\"  fxLayoutAlign=\"center center\" >\r\n        <mat-form-field>\r\n\r\n          <input matInput placeholder=\"Equity Growth CALC \" type=\"number\" class=\"example-right-align\" disabled formControlName=\"calcGrowth\">\r\n          <span matPrefix>%&nbsp;</span>\r\n          <span matSuffix>.00</span>\r\n        </mat-form-field>\r\n\r\n\r\n\r\n\r\n\r\n\r\n        <mat-form-field>\r\n          <input matInput placeholder=\"Analyst Growth \" type=\"number\" class=\"example-right-align\" formControlName=\"analystGrowth\">\r\n          <span matPrefix>%&nbsp;</span>\r\n          <span matSuffix>.00</span>\r\n        </mat-form-field>\r\n        </div>\r\n\r\n        <!--<mat-grid-tile [colspan]=\"2\">\r\n\r\n\r\n\r\n        <button mat-fab color=\"primary\" (click)=\"setGrowth()\">Set</button>\r\n\r\n\r\n    </mat-grid-tile>-->\r\n\r\n\r\n      </div>\r\n</form>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/valuation/val-meta-irr/val-meta-irr.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/valuation/val-meta-irr/val-meta-irr.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"metformGroup\">\r\n  <div class=\"header-format\"><H1>IRR :</H1> </div>\r\n  <div fxLayout.xl=\"row wrap\" fxLayout=\"column\" fxLayoutGap=\"20px\" fxLayoutAlign=\"center center\">\r\n    <mat-form-field>\r\n\r\n      <input matInput placeholder=\"IRR\" type=\"number\" class=\"example-right-align\" formControlName=\"irr\">\r\n      <span matPrefix>%&nbsp;</span>\r\n      <span matSuffix>.00</span>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n\r\n      <input matInput placeholder=\"Holding Term \" type=\"number\" class=\"example-right-align\" formControlName=\"noOfYear\">\r\n\r\n\r\n    </mat-form-field>\r\n\r\n    <!--<mat-form-field>\r\n\r\n        <input matInput placeholder=\"Margin Of Safety \" type=\"number\" class=\"example-right-align\" formControlName=\"mos\">\r\n        <span matPrefix>%&nbsp;</span>\r\n        <span matSuffix>.00</span>\r\n    </mat-form-field>-->\r\n  </div>\r\n  <!--<mat-expansion-panel>\r\n      <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n              IRR\r\n          </mat-panel-title>\r\n          <mat-panel-description>\r\n              Metadata\r\n          </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n\r\n      <div class=\"example-container\">\r\n          <mat-form-field>\r\n\r\n              <input matInput placeholder=\"IRR\" type=\"number\" class=\"example-right-align\" formControlName=\"irr\">\r\n              <span matPrefix>%&nbsp;</span>\r\n              <span matSuffix>.00</span>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field>\r\n\r\n              <input matInput placeholder=\"Holding Term \" type=\"number\" class=\"example-right-align\" formControlName=\"noOfYear\">\r\n\r\n\r\n          </mat-form-field>\r\n\r\n          <mat-form-field>\r\n\r\n              <input matInput placeholder=\"Margin Of Safety \" type=\"number\" class=\"example-right-align\" formControlName=\"mos\">\r\n              <span matPrefix>%&nbsp;</span>\r\n              <span matSuffix>.00</span>\r\n          </mat-form-field>\r\n      </div>-->\r\n  <!--</mat-expansion-panel>-->\r\n  <!--<div class=\"header-format\"><H1>IRR :</H1> </div>\r\n  <div class='internalMatGrid'>\r\n      <mat-grid-list cols=\"3\" rowHeight=\"9:1\">\r\n\r\n          <mat-grid-tile>\r\n\r\n              <mat-form-field>\r\n\r\n                  <input matInput placeholder=\"IRR\" type=\"number\" class=\"example-right-align\" formControlName=\"irr\">\r\n                  <span matPrefix>%&nbsp;</span>\r\n                  <span matSuffix>.00</span>\r\n              </mat-form-field>\r\n\r\n          </mat-grid-tile>\r\n\r\n\r\n          <mat-grid-tile>\r\n\r\n              <mat-form-field>\r\n                  <input matInput placeholder=\"EV/EBIT\" type=\"number\" class=\"example-right-align\" formControlName=\"evbt\">\r\n                  <span matPrefix>$&nbsp;</span>\r\n                  <span matSuffix>.00</span>\r\n              </mat-form-field>\r\n\r\n          </mat-grid-tile>\r\n\r\n\r\n          <mat-grid-tile>\r\n              <mat-form-field>\r\n\r\n                  <input matInput placeholder=\"Margin Of Safety \" type=\"number\" class=\"example-right-align\" formControlName=\"mos\">\r\n                  <span matPrefix>%&nbsp;</span>\r\n                  <span matSuffix>.00</span>\r\n              </mat-form-field>\r\n          </mat-grid-tile>\r\n\r\n\r\n          <mat-grid-tile>\r\n\r\n              <mat-form-field>\r\n                  <input matInput placeholder=\"Current Equity\" type=\"number\" class=\"example-right-align\" formControlName=\"ce\">\r\n                  <span matPrefix>$&nbsp;</span>\r\n                  <span matSuffix>.00</span>\r\n              </mat-form-field>\r\n\r\n          </mat-grid-tile>\r\n\r\n      </mat-grid-list>\r\n  </div>-->\r\n</form>\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/valuation/val-pop-fund/val-pop-fund.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/valuation/val-pop-fund/val-pop-fund.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"header-format\"><H1>Fundemental :</H1> </div>\r\n<div class='internalMatGrid'  fxLayout=\"column\" fxLayoutGap=\"20px\">\r\n\r\n\r\n   \r\n  <mat-label> Debt/Equity : {{data.de}}</mat-label> \r\n\r\n  \r\n\r\n \r\n  <mat-label> Current Equity : {{data.ce}}</mat-label> \r\n\r\n\r\n   \r\n  <mat-label> ROIC :{{data.roic}}</mat-label> \r\n\r\n    \r\n\r\n \r\n  <mat-label> EVBT :{{data.evbt}}</mat-label> \r\n\r\n  \r\n  <mat-label> P/S : {{data.ps}}</mat-label> \r\n\r\n \r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/valuation/val-pop-json/val-pop-json.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/valuation/val-pop-json/val-pop-json.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div >\r\n    \r\n        <textarea \r\n                  [value]=\"data.valdata\" #inputElement\r\n                  style=\"height:230px;width:400px\"\r\n                  wrap=\"hard\" disabled\r\n                  ></textarea>\r\n   \r\n\r\n</div>\r\n    <button (click)=\"copyInputMessage()\" value=\"click to copy\">Copy to clipboard</button>\r\n    <button mat-button (click)=\"onNoClick()\">No Thanks</button>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/valuation/valuation.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/valuation/valuation.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"valFormGroup\">\r\n  <div fxLayout=\"column\"  >\r\n    -<mat-expansion-panel>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          Stock Valuation Input\r\n        </mat-panel-title>\r\n\r\n      </mat-expansion-panel-header>\r\n\r\n      <div class=\"val\" fxLayout.xl=\"row wrap\" fxLayout=\"column\" >\r\n        <div fxLayout=\"column\" fxLayoutGap=\"10px\" class=\"yellow\" fxFlex.xl=\"50\" >\r\n\r\n          <div fxFlex=\"15\">\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Symbol\" type=\"text\" class=\"example-right-align\" formControlName=\"sym\">\r\n\r\n            </mat-form-field>\r\n          </div>\r\n          <div fxFlex=\"15\">\r\n            <mat-form-field>\r\n              <input matInput placeholder=\"Current Price\" type=\"number\" class=\"example-right-align\" formControlName=\"cp\">\r\n\r\n            </mat-form-field>\r\n          </div>\r\n          <div fxLayoutAlign=\"center center\">\r\n            <val-eps></val-eps>\r\n          </div>\r\n        </div>\r\n        <div fxLayout=\"column\" fxLayoutGap=\"10px\" class=\"blue\" fxFlex.xl=\"50\" fxLayoutAlign=\"center center\">\r\n          <val-growth></val-growth>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"val\" fxLayout.xl=\"row wrap\" fxLayout=\"column\">\r\n        <div fxLayout=\"column\" fxLayoutGap=\"10px\" class=\"purple\" fxFlex.xl=\"50\" fxLayoutAlign=\"center center\">\r\n          <val-fundemental></val-fundemental>\r\n        </div>\r\n        <div fxLayout=\"column\" fxLayoutGap=\"10px\" class=\"gray\" fxFlex.xl=\"50\" fxLayoutAlign=\"center center\">\r\n          <val-meta-irr></val-meta-irr>\r\n          <div fxFlex=\"25\" fxLayoutAlign=\"end end\">\r\n\r\n            <button mat-raised-button color=\"primary\" (click)=\"calculateValuation()\" [disabled]=\"!valFormGroup.valid\">Calculate IntrinsicValue</button>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </mat-expansion-panel>\r\n\r\n    <div fxLayout=\"column\"   >\r\n      <val-grid></val-grid>\r\n    </div>\r\n  </div>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    {
        path: 'valuation',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./valuation/valuation.module */ "./src/app/valuation/valuation.module.ts")).then(mod => mod.ValuationModule)
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loader-service */ "./src/app/loader-service.ts");





let AppComponent = class AppComponent {
    constructor(userService, router, loaderService) {
        this.userService = userService;
        this.router = router;
        this.loaderService = loaderService;
        this.title = 'PropDemos';
    }
    ngOnInit() {
        this.userService.currentUser.subscribe((x) => {
            this.loggedInUser = x;
            this.router.navigate(['/valuation']);
        });
        this.showSpinner$ = this.loaderService.loaderState;
    }
    ;
    logout() {
        this.userService.logout();
        this.router.navigate(['/login']);
    }
};
AppComponent.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _security_security_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./security/security.module */ "./src/app/security/security.module.ts");
/* harmony import */ var _valuation_valuation_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./valuation/valuation.module */ "./src/app/valuation/valuation.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _global_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./global.module */ "./src/app/global.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _valuation_valuation_module__WEBPACK_IMPORTED_MODULE_6__["ValuationModule"],
            _security_security_module__WEBPACK_IMPORTED_MODULE_5__["SecurityModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _global_module__WEBPACK_IMPORTED_MODULE_11__["GlobalModule"].forRoot(),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"]
        ],
        providers: [
        //{
        //  provide: HTTP_INTERCEPTORS,
        //  useClass: LoaderInterceptorService,
        //  multi: true
        //},
        //fakeBackendProvider
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);

Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_9__["platformBrowserDynamic"])().bootstrapModule(AppModule);


/***/ }),

/***/ "./src/app/global.module.ts":
/*!**********************************!*\
  !*** ./src/app/global.module.ts ***!
  \**********************************/
/*! exports provided: GlobalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalModule", function() { return GlobalModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
var GlobalModule_1;




let GlobalModule = GlobalModule_1 = class GlobalModule {
    static forRoot() {
        return {
            ngModule: GlobalModule_1,
            providers: [_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]]
        };
    }
};
GlobalModule = GlobalModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    })
], GlobalModule);



/***/ }),

/***/ "./src/app/loader-service.ts":
/*!***********************************!*\
  !*** ./src/app/loader-service.ts ***!
  \***********************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let LoaderService = class LoaderService {
    constructor() {
        this.loaderSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.loaderState = this.loaderSubject.asObservable();
    }
    show() {
        this.loaderSubject.next(true);
    }
    hide() {
        this.loaderSubject.next(false);
    }
};
LoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoaderService);



/***/ }),

/***/ "./src/app/security/security-rout.module.ts":
/*!**************************************************!*\
  !*** ./src/app/security/security-rout.module.ts ***!
  \**************************************************/
/*! exports provided: SecurityRoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityRoutModule", function() { return SecurityRoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _val_login_val_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./val-login/val-login.component */ "./src/app/security/val-login/val-login.component.ts");
/* harmony import */ var _val_register_val_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./val-register/val-register.component */ "./src/app/security/val-register/val-register.component.ts");






const securityRoutes = [
    { path: 'login', component: _val_login_val_login_component__WEBPACK_IMPORTED_MODULE_4__["ValLoginComponent"] },
    { path: 'register', component: _val_register_val_register_component__WEBPACK_IMPORTED_MODULE_5__["ValRegisterComponent"] }
];
let SecurityRoutModule = class SecurityRoutModule {
};
SecurityRoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(securityRoutes)
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
        ]
    })
], SecurityRoutModule);



/***/ }),

/***/ "./src/app/security/security.module.ts":
/*!*********************************************!*\
  !*** ./src/app/security/security.module.ts ***!
  \*********************************************/
/*! exports provided: SecurityModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityModule", function() { return SecurityModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _val_register_val_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./val-register/val-register.component */ "./src/app/security/val-register/val-register.component.ts");
/* harmony import */ var _val_login_val_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./val-login/val-login.component */ "./src/app/security/val-login/val-login.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _security_rout_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./security-rout.module */ "./src/app/security/security-rout.module.ts");







let SecurityModule = class SecurityModule {
};
SecurityModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_val_register_val_register_component__WEBPACK_IMPORTED_MODULE_3__["ValRegisterComponent"], _val_login_val_login_component__WEBPACK_IMPORTED_MODULE_4__["ValLoginComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _security_rout_module__WEBPACK_IMPORTED_MODULE_6__["SecurityRoutModule"]
        ]
    })
], SecurityModule);



/***/ }),

/***/ "./src/app/security/val-login/val-login.component.css":
/*!************************************************************!*\
  !*** ./src/app/security/val-login/val-login.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3VyaXR5L3ZhbC1sb2dpbi92YWwtbG9naW4uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/security/val-login/val-login.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/security/val-login/val-login.component.ts ***!
  \***********************************************************/
/*! exports provided: ValLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValLoginComponent", function() { return ValLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let ValLoginComponent = class ValLoginComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    ngOnInit() {
    }
    onLoginResult(loggedInUser) {
        if (loggedInUser.validLogin === true) {
            this.userService.setCurrentUserVal(loggedInUser);
            this.router.navigate(['/valuation']);
        }
        else {
            this.invalidLogin = true;
        }
    }
};
ValLoginComponent.ctorParameters = () => [
    { type: _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ValLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-val-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./val-login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/security/val-login/val-login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./val-login.component.css */ "./src/app/security/val-login/val-login.component.css")).default]
    })
], ValLoginComponent);



/***/ }),

/***/ "./src/app/security/val-register/val-register.component.css":
/*!******************************************************************!*\
  !*** ./src/app/security/val-register/val-register.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3VyaXR5L3ZhbC1yZWdpc3Rlci92YWwtcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/security/val-register/val-register.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/security/val-register/val-register.component.ts ***!
  \*****************************************************************/
/*! exports provided: ValRegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValRegisterComponent", function() { return ValRegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ValRegisterComponent = class ValRegisterComponent {
    constructor() { }
    ngOnInit() {
    }
};
ValRegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-val-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./val-register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/security/val-register/val-register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./val-register.component.css */ "./src/app/security/val-register/val-register.component.css")).default]
    })
], ValRegisterComponent);



/***/ }),

/***/ "./src/app/shared/Pipe/val-dec-pipe.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/Pipe/val-dec-pipe.pipe.ts ***!
  \**************************************************/
/*! exports provided: ValDecPipePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValDecPipePipe", function() { return ValDecPipePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let ValDecPipePipe = class ValDecPipePipe extends _angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"] {
    transform(value, ...args) {
        let result;
        result = super.transform(value, "1.2-2");
        return result;
    }
};
ValDecPipePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'valDecPipe'
    })
], ValDecPipePipe);



/***/ }),

/***/ "./src/app/shared/angular-mat/angular-mat.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/angular-mat/angular-mat.module.ts ***!
  \**********************************************************/
/*! exports provided: AngularMatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMatModule", function() { return AngularMatModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index */ "./src/app/shared/index.ts");



//import {
//  MatGridListModule, MatFormFieldModule,
//  MatInputModule, MatIconModule, MatCardModule, MatButtonModule,
//  MatExpansionModule, MatPaginator, MatSort, MatTableDataSource, MatTableModule, MatPaginatorModule,
//  MatSortModule, MatDialogModule, MatBottomSheetModule, MatAutocompleteModule, MatToolbarModule,MatToolbarRow
//} from '@angular/material';
let AngularMatModule = class AngularMatModule {
};
AngularMatModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            //CommonModule,
            //MatGridListModule,
            //MatFormFieldModule,
            //MatInputModule,
            //MatIconModule,
            //MatCardModule,
            //MatButtonModule,
            //MatDialogModule,
            //MatExpansionModule,
            //MatTableModule,
            //MatPaginatorModule,
            //MatSortModule,
            //MatBottomSheetModule,
            //MatAutocompleteModule,
            //MatToolbarModule
            _index__WEBPACK_IMPORTED_MODULE_2__["components"]
        ],
        exports: [
            //MatGridListModule,
            //MatFormFieldModule,
            //MatInputModule,
            //MatIconModule,
            //MatDialogModule,
            //MatCardModule,
            //MatButtonModule,
            //MatExpansionModule,
            //MatTableModule,
            //MatPaginatorModule,
            //MatSortModule,
            //MatBottomSheetModule,
            //MatAutocompleteModule,
            //MatToolbarModule
            _index__WEBPACK_IMPORTED_MODULE_2__["components"]
        ]
    })
], AngularMatModule);



/***/ }),

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: components, MatGridListModule, MatFormFieldModule, MatInputModule, MatIconModule, MatCardModule, MatButtonModule, MatExpansionModule, MatTableModule, MatPaginatorModule, MatSortModule, MatDialogModule, MatBottomSheetModule, MatAutocompleteModule, MatToolbarModule, MatProgressSpinnerModule, MatListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatGridListModule", function() { return _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatFormFieldModule", function() { return _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatInputModule", function() { return _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatIconModule", function() { return _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatCardModule", function() { return _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatButtonModule", function() { return _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatExpansionModule", function() { return _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatTableModule", function() { return _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatPaginatorModule", function() { return _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatSortModule", function() { return _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatDialogModule", function() { return _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatBottomSheetModule", function() { return _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatAutocompleteModule", function() { return _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatToolbarModule", function() { return _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatProgressSpinnerModule", function() { return _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MatListModule", function() { return _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"]; });



const components = [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"]
];



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_mat_angular_mat_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./angular-mat/angular-mat.module */ "./src/app/shared/angular-mat/angular-mat.module.ts");
/* harmony import */ var _Pipe_val_dec_pipe_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Pipe/val-dec-pipe.pipe */ "./src/app/shared/Pipe/val-dec-pipe.pipe.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var ng_login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-login */ "./node_modules/ng-login/fesm2015/ng-login.js");
/* harmony import */ var _shared_val_mat_list_val_mat_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @shared/val-mat-list/val-mat-list.component */ "./src/app/shared/val-mat-list/val-mat-list.component.ts");
/* harmony import */ var _val_mat_sel_list_val_mat_sel_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./val-mat-sel-list/val-mat-sel-list.component */ "./src/app/shared/val-mat-sel-list/val-mat-sel-list.component.ts");










let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_Pipe_val_dec_pipe_pipe__WEBPACK_IMPORTED_MODULE_5__["ValDecPipePipe"], _shared_val_mat_list_val_mat_list_component__WEBPACK_IMPORTED_MODULE_8__["ValMatListComponent"], _shared_val_mat_list_val_mat_list_component__WEBPACK_IMPORTED_MODULE_8__["ValMatListComponent"], _val_mat_sel_list_val_mat_sel_list_component__WEBPACK_IMPORTED_MODULE_9__["ValMatSelListComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_mat_angular_mat_module__WEBPACK_IMPORTED_MODULE_4__["AngularMatModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
            ng_login__WEBPACK_IMPORTED_MODULE_7__["NgLoginModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        exports: [
            _angular_mat_angular_mat_module__WEBPACK_IMPORTED_MODULE_4__["AngularMatModule"],
            _Pipe_val_dec_pipe_pipe__WEBPACK_IMPORTED_MODULE_5__["ValDecPipePipe"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
            ng_login__WEBPACK_IMPORTED_MODULE_7__["NgLoginModule"],
            _shared_val_mat_list_val_mat_list_component__WEBPACK_IMPORTED_MODULE_8__["ValMatListComponent"],
            _val_mat_sel_list_val_mat_sel_list_component__WEBPACK_IMPORTED_MODULE_9__["ValMatSelListComponent"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/shared/val-mat-list/val-mat-list.component.css":
/*!****************************************************************!*\
  !*** ./src/app/shared/val-mat-list/val-mat-list.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC92YWwtbWF0LWxpc3QvdmFsLW1hdC1saXN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/shared/val-mat-list/val-mat-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/val-mat-list/val-mat-list.component.ts ***!
  \***************************************************************/
/*! exports provided: ValMatListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValMatListComponent", function() { return ValMatListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let ValMatListComponent = class ValMatListComponent {
    constructor(fb) {
        this.fb = fb;
    }
    ngOnInit() {
        //console.log("%0", this.subMantraForm);
        //this.subMantraForm.valueChanges.subscribe((x) => {
        //  this.cd.detectChanges();
        //});
        if (this.subMantraForm.controls["mantraHeader"]) {
            this.headerControlVal = this.subMantraForm.controls["mantraHeader"].value;
        }
        //if (this.subMantraForm.controls["mantraHeaderItems"]) {
        //  this.mantraHeaderItemsVal = this.subMantraForm.controls["mantraHeaderItems"].value;
        //}
    }
};
ValMatListComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ValMatListComponent.prototype, "subMantraForm", void 0);
ValMatListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'val-mat-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./val-mat-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/val-mat-list/val-mat-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./val-mat-list.component.css */ "./src/app/shared/val-mat-list/val-mat-list.component.css")).default]
    })
], ValMatListComponent);



/***/ }),

/***/ "./src/app/shared/val-mat-sel-list/val-mat-sel-list.component.css":
/*!************************************************************************!*\
  !*** ./src/app/shared/val-mat-sel-list/val-mat-sel-list.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC92YWwtbWF0LXNlbC1saXN0L3ZhbC1tYXQtc2VsLWxpc3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/shared/val-mat-sel-list/val-mat-sel-list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shared/val-mat-sel-list/val-mat-sel-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: ValMatSelListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValMatSelListComponent", function() { return ValMatSelListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ValMatSelListComponent = class ValMatSelListComponent {
    //constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
    constructor() {
        //this.mantraValues = subMantra;
        //this.mantraFormCtrl.setValue(this.mantraValues);
    }
    ngOnInit() {
        if (this.subMantraForm.controls["mantraHeader"]) {
            this.headerControlVal = this.subMantraForm.controls["mantraHeader"].value;
        }
    }
    test() {
        console.log(this.subMantraForm);
    }
    storeMantra(val) {
        console.log(val);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ValMatSelListComponent.prototype, "subMantraForm", void 0);
ValMatSelListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'val-mat-sel-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./val-mat-sel-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/val-mat-sel-list/val-mat-sel-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./val-mat-sel-list.component.css */ "./src/app/shared/val-mat-sel-list/val-mat-sel-list.component.css")).default]
    })
], ValMatSelListComponent);



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let UserService = class UserService {
    constructor() {
        this.currentUserBehSub = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.currentUser = this.currentUserBehSub.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
    }
    setCurrentUserVal(user) {
        //this.currentUser =   this.currentUserBehSub.asObservable().pipe(distinctUntilChanged());
        this.currentUserBehSub.next(user);
    }
    get CurrentUserVal() {
        return this.currentUserBehSub.value;
    }
    logout() {
        // remove user from local storage to log user out
        // localStorage.removeItem('currentUser');
        this.currentUserBehSub.next(null);
    }
};
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserService);



/***/ }),

/***/ "./src/app/valuation/interface/ival.ts":
/*!*********************************************!*\
  !*** ./src/app/valuation/interface/ival.ts ***!
  \*********************************************/
/*! exports provided: valuationParam, valuationResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valuationParam", function() { return valuationParam; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "valuationResponse", function() { return valuationResponse; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class valuationParam {
}
class valuationResponse {
}
//export class valMantra {
//  constructor(valMantraArgs: ivalMantra) {
//    for (let mantra in valMantraArgs) {
//      this[mantra] = valMantraArgs[mantra];
//    }
//  }


/***/ }),

/***/ "./src/app/valuation/interface/model/mantra-form.model.ts":
/*!****************************************************************!*\
  !*** ./src/app/valuation/interface/model/mantra-form.model.ts ***!
  \****************************************************************/
/*! exports provided: MantraForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MantraForm", function() { return MantraForm; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");


class MantraForm {
    constructor(mantraWrapper, fb) {
        this.fb = fb;
        this.ticker = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.subMantras = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([]);
        if (mantraWrapper)
            this.ticker.setValue(mantraWrapper.ticker);
        this.subMantras = this.fb.array(mantraWrapper.subMantras.map((sub) => this.createSubMantra(sub)));
        //  this.fb.array([
        //  this.fb.group({ mantraHeader: '', mantraHeaderItems: [{ code: '', description: '', value: false }] })
        //]);
        // this.subMantras.setValue(mantraWrapper.subMantras);
        // this.fb.array(mantraWrapper.subMantras.map((sub) => this.createSubMantra(sub)
    }
    createSubMantra(sub) {
        return this.fb.group({
            mantraHeader: sub.mantraHeader,
            mantraHeaderItems: this.fb.array(sub.mantraHeaderItems)
        });
    }
}


/***/ }),

/***/ "./src/app/valuation/interface/model/mantra.model.ts":
/*!***********************************************************!*\
  !*** ./src/app/valuation/interface/model/mantra.model.ts ***!
  \***********************************************************/
/*! exports provided: Mantra */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mantra", function() { return Mantra; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Mantra {
    constructor(mantra) {
        if (mantra) {
            this.subMantras = mantra.subMantras;
            this.ticker = mantra.ticker;
        }
    }
}


/***/ }),

/***/ "./src/app/valuation/mantra-dynamic/mantra-dynamic.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/valuation/mantra-dynamic/mantra-dynamic.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZhbHVhdGlvbi9tYW50cmEtZHluYW1pYy9tYW50cmEtZHluYW1pYy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/valuation/mantra-dynamic/mantra-dynamic.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/valuation/mantra-dynamic/mantra-dynamic.component.ts ***!
  \**********************************************************************/
/*! exports provided: MantraDynamicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MantraDynamicComponent", function() { return MantraDynamicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _val_mantra_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @val/mantra.service */ "./src/app/valuation/mantra.service.ts");
/* harmony import */ var _shared_val_mat_sel_list_val_mat_sel_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/val-mat-sel-list/val-mat-sel-list.component */ "./src/app/shared/val-mat-sel-list/val-mat-sel-list.component.ts");






let MantraDynamicComponent = class MantraDynamicComponent {
    constructor(dialogRef, data, mantraService, fb) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.mantraService = mantraService;
        this.fb = fb;
        this.ticker = data.ticker;
        // if (!data.valMantra || data.valMantra === null) {
        this.mantraService.mantra$.subscribe((x) => {
            this.fg = x;
        });
        //}
        //else {
        //  //this.valMantra = data.valMantra;
        //}
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.childComponent.test();
    }
    onCancel() {
        this.fg.reset();
    }
    onSubmit() {
        this.childComponent.test();
        console.log(this.fg.value);
    }
};
MantraDynamicComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _val_mantra_service__WEBPACK_IMPORTED_MODULE_4__["MantraService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_shared_val_mat_sel_list_val_mat_sel_list_component__WEBPACK_IMPORTED_MODULE_5__["ValMatSelListComponent"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: true })
], MantraDynamicComponent.prototype, "childComponent", void 0);
MantraDynamicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'val-mantra-dynamic',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mantra-dynamic.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/valuation/mantra-dynamic/mantra-dynamic.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mantra-dynamic.component.css */ "./src/app/valuation/mantra-dynamic/mantra-dynamic.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], MantraDynamicComponent);



/***/ }),

/***/ "./src/app/valuation/mantra-static/mantra-static.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/valuation/mantra-static/mantra-static.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZhbHVhdGlvbi9tYW50cmEtc3RhdGljL21hbnRyYS1zdGF0aWMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/valuation/mantra-static/mantra-static.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/valuation/mantra-static/mantra-static.component.ts ***!
  \********************************************************************/
/*! exports provided: MantraStaticComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MantraStaticComponent", function() { return MantraStaticComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _val_mantra_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @val/mantra.service */ "./src/app/valuation/mantra.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let MantraStaticComponent = class MantraStaticComponent {
    constructor(mantraService, fb) {
        this.mantraService = mantraService;
        this.fb = fb;
        //this.staticMantraFG = this.fb.group({
        //  ticker :['t']
        //})
    }
    ngOnInit() {
        this.mantraService.mantra$.subscribe((x) => {
            this.staticMantraFG = x;
            this.subMantras = this.staticMantraFG.get('subMantras');
        });
    }
};
MantraStaticComponent.ctorParameters = () => [
    { type: _val_mantra_service__WEBPACK_IMPORTED_MODULE_2__["MantraService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
MantraStaticComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'val-mantra-static',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mantra-static.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/valuation/mantra-static/mantra-static.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mantra-static.component.css */ "./src/app/valuation/mantra-static/mantra-static.component.css")).default]
    })
], MantraStaticComponent);



/***/ }),

/***/ "./src/app/valuation/mantra.service.ts":
/*!*********************************************!*\
  !*** ./src/app/valuation/mantra.service.ts ***!
  \*********************************************/
/*! exports provided: MantraService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MantraService", function() { return MantraService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _val_interface_model_mantra_form_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @val/interface/model/mantra-form.model */ "./src/app/valuation/interface/model/mantra-form.model.ts");
/* harmony import */ var _val_interface_model_mantra_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @val/interface/model/mantra.model */ "./src/app/valuation/interface/model/mantra.model.ts");
/* harmony import */ var _val_valservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @val/valservice.service */ "./src/app/valuation/valservice.service.ts");







let MantraService = class MantraService {
    constructor(fb, valServc) {
        this.fb = fb;
        this.valServc = valServc;
        this.mantra = this.valServc.getStaticMantra();
        this.mantraVal = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.fb.group(new _val_interface_model_mantra_form_model__WEBPACK_IMPORTED_MODULE_4__["MantraForm"](new _val_interface_model_mantra_model__WEBPACK_IMPORTED_MODULE_5__["Mantra"](this.mantra), this.fb)));
        this.mantra$ = this.mantraVal.asObservable();
    }
};
MantraService.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _val_valservice_service__WEBPACK_IMPORTED_MODULE_6__["ValserviceService"] }
];
MantraService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MantraService);



/***/ }),

/***/ "./src/app/valuation/val-eps/val-eps.component.css":
/*!*********************************************************!*\
  !*** ./src/app/valuation/val-eps/val-eps.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZhbHVhdGlvbi92YWwtZXBzL3ZhbC1lcHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/valuation/val-eps/val-eps.component.ts":
/*!********************************************************!*\
  !*** ./src/app/valuation/val-eps/val-eps.component.ts ***!
  \********************************************************/
/*! exports provided: ValEpsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValEpsComponent", function() { return ValEpsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _valservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../valservice.service */ "./src/app/valuation/valservice.service.ts");




let ValEpsComponent = class ValEpsComponent {
    constructor(valEpsBuilder, valService) {
        this.valEpsBuilder = valEpsBuilder;
        this.valService = valService;
    }
    ngOnInit() {
        this.valEpsForm = this.valEpsBuilder.group({
            eps: ['3.02', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            hpe: ['20.01', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lpe: ['19.24', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            //cpe: ['19.62', Validators.required],
            ape: ['20.22', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
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
ValEpsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _valservice_service__WEBPACK_IMPORTED_MODULE_3__["ValserviceService"] }
];
ValEpsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'val-eps',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./val-eps.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/valuation/val-eps/val-eps.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./val-eps.component.css */ "./src/app/valuation/val-eps/val-eps.component.css")).default]
    })
], ValEpsComponent);



/***/ }),

/***/ "./src/app/valuation/val-fundemental/val-fundemental.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/valuation/val-fundemental/val-fundemental.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZhbHVhdGlvbi92YWwtZnVuZGVtZW50YWwvdmFsLWZ1bmRlbWVudGFsLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/valuation/val-fundemental/val-fundemental.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/valuation/val-fundemental/val-fundemental.component.ts ***!
  \************************************************************************/
/*! exports provided: ValFundementalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValFundementalComponent", function() { return ValFundementalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _valservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../valservice.service */ "./src/app/valuation/valservice.service.ts");




let ValFundementalComponent = class ValFundementalComponent {
    constructor(fundmlForm, valService) {
        this.fundmlForm = fundmlForm;
        this.valService = valService;
    }
    ngOnInit() {
        this.fundmlFormGroup = this.fundmlForm.group({
            de: ['.08', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ce: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            roic: [12, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            evbt: [12, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            ps: [5, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    setFundemental() {
        this.valService.setFundemental(this.fundmlFormGroup.value);
    }
};
ValFundementalComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _valservice_service__WEBPACK_IMPORTED_MODULE_3__["ValserviceService"] }
];
ValFundementalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'val-fundemental',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./val-fundemental.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/valuation/val-fundemental/val-fundemental.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./val-fundemental.component.css */ "./src/app/valuation/val-fundemental/val-fundemental.component.css")).default]
    })
], ValFundementalComponent);



/***/ }),

/***/ "./src/app/valuation/val-grid/val-grid.component.css":
/*!***********************************************************!*\
  !*** ./src/app/valuation/val-grid/val-grid.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".customWidthClass{\r\n width: 50%\r\n}\r\n\r\n.my-sb{\r\n   color:limegreen;\r\n}\r\n\r\n.my-b{\r\n   color:aquamarine;\r\n}\r\n\r\n.my-s{\r\n   color:orangered;\r\n}\r\n\r\n.my-h{\r\n   color:rosybrown;\r\n}\r\n\r\n.my-ss{\r\n    color:red\r\n}\r\n\r\n.highlight{\r\n  background: #42A948; /* green */\r\n}\r\n\r\n/*@media screen and (max-width: 960px) {\r\n  .mat-table {\r\n    border: 0;\r\n    vertical-align: middle\r\n  }\r\n\r\n    .mat-table caption {\r\n      font-size: 1em;\r\n    }\r\n\r\n    /*  Enable this to hide header\r\n  .mat-table .mat-header-cell {\r\n    \r\n    border: 10px solid;\r\n    clip: rect(0 0 0 0);\r\n    height: 1px;\r\n    margin: -1px;\r\n    padding: 0;\r\n    position: absolute;\r\n    width: 1px;\r\n  }\r\n  */\r\n\r\n/*.mat-table .mat-row {\r\n      border-bottom: 5px solid #ddd;\r\n      display: block;\r\n    }\r\n    /*\r\n  .mat-table .mat-row:nth-child(even) {background: #CCC}\r\n  .mat-table .mat-row:nth-child(odd) {background: #FFF}\r\n  */\r\n\r\n/*\r\n    * aria-label has no advantage, it won't be read inside a table\r\n    content: attr(aria-label);\r\n    */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmFsdWF0aW9uL3ZhbC1ncmlkL3ZhbC1ncmlkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQztBQUNEOztBQUVBO0dBQ0csZUFBZTtBQUNsQjs7QUFDQTtHQUNHLGdCQUFnQjtBQUNuQjs7QUFDQTtHQUNHLGVBQWU7QUFDbEI7O0FBQ0E7R0FDRyxlQUFlO0FBQ2xCOztBQUNBO0lBQ0k7QUFDSjs7QUFHQTtFQUNFLG1CQUFtQixFQUFFLFVBQVU7QUFDakM7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXFCRzs7QUFDQzs7Ozs7OztHQU9EOztBQUVLOzs7S0FHSCIsImZpbGUiOiJzcmMvYXBwL3ZhbHVhdGlvbi92YWwtZ3JpZC92YWwtZ3JpZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbVdpZHRoQ2xhc3N7XHJcbiB3aWR0aDogNTAlXHJcbn1cclxuXHJcbi5teS1zYntcclxuICAgY29sb3I6bGltZWdyZWVuO1xyXG59XHJcbi5teS1ie1xyXG4gICBjb2xvcjphcXVhbWFyaW5lO1xyXG59XHJcbi5teS1ze1xyXG4gICBjb2xvcjpvcmFuZ2VyZWQ7XHJcbn1cclxuLm15LWh7XHJcbiAgIGNvbG9yOnJvc3licm93bjtcclxufVxyXG4ubXktc3N7XHJcbiAgICBjb2xvcjpyZWRcclxufVxyXG5cclxuXHJcbi5oaWdobGlnaHR7XHJcbiAgYmFja2dyb3VuZDogIzQyQTk0ODsgLyogZ3JlZW4gKi9cclxufVxyXG5cclxuXHJcbi8qQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcclxuICAubWF0LXRhYmxlIHtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGVcclxuICB9XHJcblxyXG4gICAgLm1hdC10YWJsZSBjYXB0aW9uIHtcclxuICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICB9XHJcblxyXG4gICAgLyogIEVuYWJsZSB0aGlzIHRvIGhpZGUgaGVhZGVyXHJcbiAgLm1hdC10YWJsZSAubWF0LWhlYWRlci1jZWxsIHtcclxuICAgIFxyXG4gICAgYm9yZGVyOiAxMHB4IHNvbGlkO1xyXG4gICAgY2xpcDogcmVjdCgwIDAgMCAwKTtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgbWFyZ2luOiAtMXB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxcHg7XHJcbiAgfVxyXG4gICovXHJcbiAgICAvKi5tYXQtdGFibGUgLm1hdC1yb3cge1xyXG4gICAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgI2RkZDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAvKlxyXG4gIC5tYXQtdGFibGUgLm1hdC1yb3c6bnRoLWNoaWxkKGV2ZW4pIHtiYWNrZ3JvdW5kOiAjQ0NDfVxyXG4gIC5tYXQtdGFibGUgLm1hdC1yb3c6bnRoLWNoaWxkKG9kZCkge2JhY2tncm91bmQ6ICNGRkZ9XHJcbiAgKi9cclxuICAgXHJcbiAgICAgICAgLypcclxuICAgICogYXJpYS1sYWJlbCBoYXMgbm8gYWR2YW50YWdlLCBpdCB3b24ndCBiZSByZWFkIGluc2lkZSBhIHRhYmxlXHJcbiAgICBjb250ZW50OiBhdHRyKGFyaWEtbGFiZWwpO1xyXG4gICAgKi9cclxuIl19 */");

/***/ }),

/***/ "./src/app/valuation/val-grid/val-grid.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/valuation/val-grid/val-grid.component.ts ***!
  \**********************************************************/
/*! exports provided: ValGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValGridComponent", function() { return ValGridComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _valservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../valservice.service */ "./src/app/valuation/valservice.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _val_val_pop_json_val_pop_json_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @val/val-pop-json/val-pop-json.component */ "./src/app/valuation/val-pop-json/val-pop-json.component.ts");
/* harmony import */ var _val_pop_fund_val_pop_fund_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../val-pop-fund/val-pop-fund.component */ "./src/app/valuation/val-pop-fund/val-pop-fund.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _val_mantra_dynamic_mantra_dynamic_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @val/mantra-dynamic/mantra-dynamic.component */ "./src/app/valuation/mantra-dynamic/mantra-dynamic.component.ts");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





//import { ValPopJsonComponent } from '../val-pop-json/val-pop-json.component'; 







let ValGridComponent = class ValGridComponent {
    //get filterSymCtrl() { return this.valgridFG.controls['filterSym']; }
    constructor(valgridBuilder, valService, dialog, bottomSheet) {
        this.valgridBuilder = valgridBuilder;
        this.valService = valService;
        this.dialog = dialog;
        this.bottomSheet = bottomSheet;
        this.displayedColumns = ['sym', 'irr', 'noOfYear', 'mos', 'eps', 'futurePE', 'futureGrowth', 'fairPrice', 'futurePrice',
            'currenttPrice', 'finalPrice', 'difference', 'decision', 'payBack', 'actionsColumn'];
        this.filterSym = new rxjs__WEBPACK_IMPORTED_MODULE_10__["BehaviorSubject"]("");
        this.decisionIds = {
            'Strong Buy': 1,
            'Buy': 2,
            'Hold': 3,
            'Sell': 4,
            'Strong Sell': 5
        };
        this.selectedSym = "";
    }
    ngOnInit() {
        this.reload();
        this.filterSym
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(value => {
            return value;
        })).subscribe((filter) => {
            if (this.dataSource) {
                this.dataSource.filter = filter;
                if (this.dataSource.paginator) {
                    this.dataSource.paginator.firstPage();
                }
            }
        });
        if (this.dataSource) {
            this.dataSource.filterPredicate = (data, filter) => {
                if (data && data['sym']) {
                    return data['sym'].toLowerCase().includes(filter);
                }
                return false;
            };
        }
    }
    reload() {
        this.valService.getValuation().subscribe((data) => {
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](data);
            this.resultsLength = data.length;
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
            this.dataSource.sortingDataAccessor = (data, property) => {
                switch (property) {
                    case 'decision': return this.decisionIds[data[property]];
                    default: return data[property];
                }
            };
            this.dataSource.sort = this.sort;
        });
    }
    reCalculateValuation(row) {
        this.valService.setValuation(row);
        this.valService.calcValuation()
            .subscribe((jsonData) => {
            //this.openDialog(jsonData);
            let recalc = JSON.parse(jsonData);
            const index = this.dataSource.data.findIndex((sym) => sym.sym === recalc.sym);
            if (index > -1) {
                this.dataSource.data[index] = recalc;
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
            }
        });
    }
    showJsonVal(row) {
        this.valService.setValuation(row);
        this.valService.calcValuation()
            .subscribe((jsonData) => {
            this.openDialog(jsonData);
        });
    }
    showMantra(row) {
        this.valService.setValuation(row);
        const dialogRef = this.dialog.open(_val_mantra_dynamic_mantra_dynamic_component__WEBPACK_IMPORTED_MODULE_8__["MantraDynamicComponent"], {
            height: '750px',
            width: '550px',
            data: { ticker: row.sym, valMantra: row.mantra }
        });
    }
    openDialog(valdata) {
        const dialogRef = this.dialog.open(_val_val_pop_json_val_pop_json_component__WEBPACK_IMPORTED_MODULE_5__["ValPopJsonComponent"], {
            height: '550px',
            width: '550px',
            data: { valdata }
        });
    }
    highlight(row) {
        this.selectedSym = row.sym;
    }
    openBottomSheet(row) {
        this.bottomSheet.open(_val_pop_fund_val_pop_fund_component__WEBPACK_IMPORTED_MODULE_6__["ValPopFundComponent"], { data: row });
    }
};
ValGridComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _valservice_service__WEBPACK_IMPORTED_MODULE_3__["ValserviceService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] },
    { type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_9__["MatBottomSheet"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('pgntor', { static: false })
], ValGridComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: false })
], ValGridComponent.prototype, "sort", void 0);
ValGridComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'val-grid',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./val-grid.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/valuation/val-grid/val-grid.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./val-grid.component.css */ "./src/app/valuation/val-grid/val-grid.component.css")).default]
    })
], ValGridComponent);



/***/ }),

/***/ "./src/app/valuation/val-growth/val-growth.component.css":
/*!***************************************************************!*\
  !*** ./src/app/valuation/val-growth/val-growth.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZhbHVhdGlvbi92YWwtZ3Jvd3RoL3ZhbC1ncm93dGguY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/valuation/val-growth/val-growth.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/valuation/val-growth/val-growth.component.ts ***!
  \**************************************************************/
/*! exports provided: ValGrowthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValGrowthComponent", function() { return ValGrowthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var decimal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! decimal.js */ "./node_modules/decimal.js/decimal.js");
/* harmony import */ var decimal_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(decimal_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _valservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../valservice.service */ "./src/app/valuation/valservice.service.ts");






let ValGrowthComponent = class ValGrowthComponent {
    constructor(valformBuilder, valService) {
        this.valformBuilder = valformBuilder;
        this.valService = valService;
    }
    get valGrowthControls() { return this.valGrowthForm.controls; }
    get firstYrGrowth() {
        return this.valGrowthForm.controls['firstYrGrowth'];
    }
    get lastYrGrowth() { return this.valGrowthForm.controls['lastYrGrowth']; }
    get growthYear() { return this.valGrowthForm.controls['growthYear']; }
    get calcGrowth() { return this.valGrowthForm.controls['calcGrowth']; }
    get analystGrowth() { return this.valGrowthForm.controls['analystGrowth']; }
    ngOnInit() {
        this.valGrowthForm = this.valformBuilder.group({
            firstYrGrowth: ['521743', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastYrGrowth: ['766961', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            growthYear: ['4', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            calcGrowth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            analystGrowth: ['15.3']
        });
        this.registerSubscriptions();
    }
    registerSubscriptions() {
        this.lastYrGrowth.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(500))
            .subscribe((lastYrGrowthVal) => {
            let growthDiscount = this.growthYear.value == 0 ? 0 : (1 / this.growthYear.value);
            let y = new decimal_js__WEBPACK_IMPORTED_MODULE_4___default.a(lastYrGrowthVal);
            let x = new decimal_js__WEBPACK_IMPORTED_MODULE_4___default.a(this.firstYrGrowth.value);
            let z = new decimal_js__WEBPACK_IMPORTED_MODULE_4___default.a(1 / this.growthYear.value);
            //let dervive1Val : any  = ( / this.firstYrGrowth.value);
            let derivedGrowth = ((y.dividedBy(x)).toPower(z)).sub(1).mul(100);
            this.calcGrowth.setValue(derivedGrowth.toFixed(2));
        });
        this.valService.obsColumnScreenSize.subscribe((size) => {
            if (size == 1) {
                this.gridCol = size;
            }
            else {
                this.gridCol = 2;
            }
        });
    }
    setGrowth() {
        this.valService.setGrowth(this.valGrowthForm.value);
    }
};
ValGrowthComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _valservice_service__WEBPACK_IMPORTED_MODULE_5__["ValserviceService"] }
];
ValGrowthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'val-growth',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./val-growth.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/valuation/val-growth/val-growth.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./val-growth.component.css */ "./src/app/valuation/val-growth/val-growth.component.css")).default]
    })
], ValGrowthComponent);



/***/ }),

/***/ "./src/app/valuation/val-meta-irr/val-meta-irr.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/valuation/val-meta-irr/val-meta-irr.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-expansion-panel-header {\r\nbackground-color:burlywood;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmFsdWF0aW9uL3ZhbC1tZXRhLWlyci92YWwtbWV0YS1pcnIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLDBCQUEwQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL3ZhbHVhdGlvbi92YWwtbWV0YS1pcnIvdmFsLW1ldGEtaXJyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlciB7XHJcbmJhY2tncm91bmQtY29sb3I6YnVybHl3b29kO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/valuation/val-meta-irr/val-meta-irr.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/valuation/val-meta-irr/val-meta-irr.component.ts ***!
  \******************************************************************/
/*! exports provided: ValMetaIRRComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValMetaIRRComponent", function() { return ValMetaIRRComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _valservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../valservice.service */ "./src/app/valuation/valservice.service.ts");




let ValMetaIRRComponent = class ValMetaIRRComponent {
    constructor(metaform, valService) {
        this.metaform = metaform;
        this.valService = valService;
    }
    ngOnInit() {
        this.metformGroup = this.metaform.group({
            irr: ['15', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            noOfYear: ['5', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            mos: ['30', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    setMeta() {
        this.valService.setMeta(this.metformGroup.value);
    }
};
ValMetaIRRComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _valservice_service__WEBPACK_IMPORTED_MODULE_3__["ValserviceService"] }
];
ValMetaIRRComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'val-meta-irr',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./val-meta-irr.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/valuation/val-meta-irr/val-meta-irr.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./val-meta-irr.component.css */ "./src/app/valuation/val-meta-irr/val-meta-irr.component.css")).default]
    })
], ValMetaIRRComponent);



/***/ }),

/***/ "./src/app/valuation/val-pop-fund/val-pop-fund.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/valuation/val-pop-fund/val-pop-fund.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZhbHVhdGlvbi92YWwtcG9wLWZ1bmQvdmFsLXBvcC1mdW5kLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/valuation/val-pop-fund/val-pop-fund.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/valuation/val-pop-fund/val-pop-fund.component.ts ***!
  \******************************************************************/
/*! exports provided: ValPopFundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValPopFundComponent", function() { return ValPopFundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/esm2015/bottom-sheet.js");




let ValPopFundComponent = class ValPopFundComponent {
    constructor(_bottomSheetRef, data) {
        this._bottomSheetRef = _bottomSheetRef;
        this.data = data;
    }
    ngOnInit() {
    }
};
ValPopFundComponent.ctorParameters = () => [
    { type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MAT_BOTTOM_SHEET_DATA"],] }] }
];
ValPopFundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'val-pop-fund',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./val-pop-fund.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/valuation/val-pop-fund/val-pop-fund.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./val-pop-fund.component.css */ "./src/app/valuation/val-pop-fund/val-pop-fund.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_2__["MAT_BOTTOM_SHEET_DATA"]))
], ValPopFundComponent);



/***/ }),

/***/ "./src/app/valuation/val-pop-json/val-pop-json.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/valuation/val-pop-json/val-pop-json.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZhbHVhdGlvbi92YWwtcG9wLWpzb24vdmFsLXBvcC1qc29uLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/valuation/val-pop-json/val-pop-json.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/valuation/val-pop-json/val-pop-json.component.ts ***!
  \******************************************************************/
/*! exports provided: ValPopJsonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValPopJsonComponent", function() { return ValPopJsonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");



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
ValPopJsonComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputElement', { static: false })
], ValPopJsonComponent.prototype, "inputElement", void 0);
ValPopJsonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-val-pop-json',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./val-pop-json.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/valuation/val-pop-json/val-pop-json.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./val-pop-json.component.css */ "./src/app/valuation/val-pop-json/val-pop-json.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], ValPopJsonComponent);



/***/ }),

/***/ "./src/app/valuation/valservice.service.ts":
/*!*************************************************!*\
  !*** ./src/app/valuation/valservice.service.ts ***!
  \*************************************************/
/*! exports provided: ValserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValserviceService", function() { return ValserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _valuation_interface_ival__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../valuation/interface/ival */ "./src/app/valuation/interface/ival.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var decimal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! decimal.js */ "./node_modules/decimal.js/decimal.js");
/* harmony import */ var decimal_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(decimal_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");







let ValserviceService = class ValserviceService {
    constructor(http) {
        this.http = http;
        this.isCalculateValuation = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.columnScreenSize = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](1);
        this.obsColumnScreenSize = this.columnScreenSize.asObservable();
        this.valMain = new _valuation_interface_ival__WEBPACK_IMPORTED_MODULE_2__["valuationParam"]();
    }
    setColumnScreenSize(size) {
        this.columnScreenSize.next(size);
    }
    getValuation() {
        return this.http.get("../assets/Valuation.json");
    }
    setGrowth(growth) {
        if (growth.calcGrowth <= growth.analystGrowth) {
            this.valMain.futureGrowth = new decimal_js__WEBPACK_IMPORTED_MODULE_4___default.a(growth.calcGrowth);
        }
        else {
            this.valMain.futureGrowth = new decimal_js__WEBPACK_IMPORTED_MODULE_4___default.a(growth.analystGrowth);
        }
    }
    setProfit(pft) {
        let x = new decimal_js__WEBPACK_IMPORTED_MODULE_4___default.a(pft.hpe);
        let y = new decimal_js__WEBPACK_IMPORTED_MODULE_4___default.a(pft.lpe);
        let avgPe = x.add(y).dividedBy(2);
        let growthPe = this.valMain.futureGrowth.mul(2);
        if (avgPe.lessThanOrEqualTo(growthPe) || growthPe.equals(0)) {
            this.valMain.futurePe = avgPe;
        }
        else {
            this.valMain.futurePe = growthPe;
        }
        this.valMain.eps = new decimal_js__WEBPACK_IMPORTED_MODULE_4___default.a(pft.eps);
    }
    setFundemental(vf) {
        this.valMain.ce = new decimal_js__WEBPACK_IMPORTED_MODULE_4___default.a(vf.ce);
        this.valMain.de = new decimal_js__WEBPACK_IMPORTED_MODULE_4___default.a(vf.de);
        this.valMain.roic = new decimal_js__WEBPACK_IMPORTED_MODULE_4___default.a(vf.roic);
        this.valMain.evbt = new decimal_js__WEBPACK_IMPORTED_MODULE_4___default.a(vf.evbt);
        this.valMain.ps = new decimal_js__WEBPACK_IMPORTED_MODULE_4___default.a(vf.ps);
    }
    setMeta(meta) {
        this.valMain.meta = meta;
        if (this.valMain.ps.greaterThan(5)) {
            this.valMain.meta.mos = 50;
        }
        else if (this.valMain.ce.greaterThanOrEqualTo(2) && this.valMain.de.lessThanOrEqualTo(0.5) && this.valMain.roic.greaterThanOrEqualTo(10)) {
            this.valMain.meta.mos = 25;
        }
        else if (this.valMain.ce.greaterThanOrEqualTo(2) && this.valMain.de.lessThanOrEqualTo(0.5)) {
            this.valMain.meta.mos = 35;
        }
        else {
            this.valMain.meta.mos = 50;
        }
    }
    setValBasic(val) {
        this.valMain.sym = val.sym;
        this.valMain.currenttPrice = new decimal_js__WEBPACK_IMPORTED_MODULE_4___default.a(val.cp);
    }
    setValuation(val) {
        this.valMain.sym = val.sym;
        this.valMain.currenttPrice = new decimal_js__WEBPACK_IMPORTED_MODULE_4___default.a(val.currenttPrice);
        this.valMain.eps = new decimal_js__WEBPACK_IMPORTED_MODULE_4___default.a(val.eps);
        this.valMain.futurePe = new decimal_js__WEBPACK_IMPORTED_MODULE_4___default.a(val.futurePE);
        this.valMain.futureGrowth = new decimal_js__WEBPACK_IMPORTED_MODULE_4___default.a(val.futureGrowth);
        this.valMain.de = val.de;
        this.valMain.ce = val.ce;
        this.valMain.evbt = val.evbt;
        this.valMain.ps = val.ps;
        this.valMain.roic = val.roic;
        this.valMain.meta = val.meta;
    }
    calcValuation() {
        let x = new decimal_js__WEBPACK_IMPORTED_MODULE_4___default.a(this.valMain.meta.irr);
        let currenttPrice = new decimal_js__WEBPACK_IMPORTED_MODULE_4___default.a(this.valMain.currenttPrice);
        let growthPct = this.valMain.futureGrowth.dividedBy(100);
        let growthDis = (this.valMain.futureGrowth.dividedBy(100).add(1)).toPower(this.valMain.meta.noOfYear);
        let futureGrowthVal = (this.valMain.eps.mul(growthDis));
        let futurePrice = futureGrowthVal.mul(this.valMain.futurePe);
        let fairPrice = futurePrice.dividedBy(x.dividedBy(100).add(1).toPower(this.valMain.meta.noOfYear));
        let payCeilNm = (currenttPrice.dividedBy(this.valMain.eps).add(1)).mul(growthPct).add(1).naturalLogarithm();
        let payBackDm = (growthPct.add(1)).naturalLogarithm();
        let test = this.valMain.futureGrowth.naturalLogarithm();
        //let payBack = ((growthPct.add(1).mul((currenttPrice.dividedBy(this.valMain.eps)).add(1))).naturalLogarithm().dividedBy
        //    (growthPct.add(1)).naturalLogarithm()).sub(-1);
        let payBack = payCeilNm.dividedBy(payBackDm).sub(1);
        let finalPrice = ((new decimal_js__WEBPACK_IMPORTED_MODULE_4___default.a(100).sub(this.valMain.meta.mos)).mul(fairPrice)).dividedBy(100);
        let valuationRes = new _valuation_interface_ival__WEBPACK_IMPORTED_MODULE_2__["valuationResponse"]();
        valuationRes.eps = this.valMain.eps;
        valuationRes.futureGrowthValue = futureGrowthVal;
        valuationRes.futureGrowth = new decimal_js__WEBPACK_IMPORTED_MODULE_4___default.a(this.valMain.futureGrowth.toFixed(2));
        valuationRes.futurePE = this.valMain.futurePe;
        valuationRes.futurePrice = futurePrice;
        valuationRes.fairPrice = fairPrice;
        valuationRes.sym = this.valMain.sym;
        valuationRes.currenttPrice = currenttPrice;
        valuationRes.meta = this.valMain.meta;
        valuationRes.finalPrice = finalPrice;
        valuationRes.difference = (valuationRes.currenttPrice.sub(finalPrice)).dividedBy(finalPrice).mul(100);
        valuationRes.de = this.valMain.de;
        valuationRes.ce = this.valMain.ce;
        valuationRes.roic = this.valMain.roic;
        valuationRes.evbt = this.valMain.evbt;
        valuationRes.ps = this.valMain.ps;
        valuationRes.payBack = payBack;
        if (valuationRes.difference.lessThan(0)) {
            valuationRes.decision = "Strong Buy";
        }
        else if (valuationRes.difference.lessThan(20)) {
            valuationRes.decision = "Buy";
        }
        else if (valuationRes.difference.lessThan(35)) {
            valuationRes.decision = "Hold";
        }
        else if (valuationRes.difference.lessThan(50)) {
            valuationRes.decision = "Sell";
        }
        else {
            valuationRes.decision = "Strong Sell";
        }
        let jsonVal = JSON.stringify(valuationRes);
        const jsonvalObs = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(jsonVal);
        console.log("val obj", jsonVal);
        console.log("future price", futurePrice);
        console.log("fair price", fairPrice);
        return jsonvalObs;
    }
    getStaticMantra() {
        const submantras = [{
                mantraHeader: "Long Term Prospect",
                mantraHeaderItems: [
                    { code: "LG", description: "Industry future", value: false },
                    { code: "SM", description: "Strong Moat", value: false },
                    { code: "RS", description: "Reap & Sow ", value: false }
                ]
            },
            {
                mantraHeader: "Management Prospect",
                mantraHeaderItems: [
                    { code: "10K", description: "Read Management report 10k ,Leader by words", value: false },
                    { code: "AO", description: "Less Acquistion and options", value: false },
                    { code: "RD", description: "5-10% R&D spending  ", value: false }
                ]
            },
            {
                mantraHeader: "Strong Financial Health",
                mantraHeaderItems: [
                    { code: "FF", description: "Net  Operating Free Cashflow consistent growth", value: false },
                    { code: "SM", description: "Strong Moat", value: false },
                    { code: "RS", description: "Reap & Sow ", value: false }
                ]
            }
        ];
        const valMantra = {
            subMantras: submantras,
            ticker: "test"
        };
        return valMantra;
    }
};
ValserviceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
];
ValserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ValserviceService);



/***/ }),

/***/ "./src/app/valuation/valuation-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/valuation/valuation-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ValuationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValuationRoutingModule", function() { return ValuationRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _valuation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./valuation.component */ "./src/app/valuation/valuation.component.ts");
/* harmony import */ var _val_mantra_static_mantra_static_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @val/mantra-static/mantra-static.component */ "./src/app/valuation/mantra-static/mantra-static.component.ts");





const routes = [
    { path: '', component: _valuation_component__WEBPACK_IMPORTED_MODULE_3__["ValuationComponent"] },
    { path: 'mantra', component: _val_mantra_static_mantra_static_component__WEBPACK_IMPORTED_MODULE_4__["MantraStaticComponent"] }
];
let ValuationRoutingModule = class ValuationRoutingModule {
};
ValuationRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ValuationRoutingModule);



/***/ }),

/***/ "./src/app/valuation/valuation.component.css":
/*!***************************************************!*\
  !*** ./src/app/valuation/valuation.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.val md-grid-list {\r\n  /*margin: 8px;*/ }\r\n\r\n.val .yellow {\r\n  background: #ffff8d; }\r\n\r\n.val .green {\r\n  background: #b9f6ca; }\r\n\r\n.val .blue {\r\n  background: #84ffff; }\r\n\r\n.val .purple {\r\n  background: #b388ff; }\r\n\r\n.val .red {\r\n  background: #ff8a80; }\r\n\r\n.val .gray {\r\n  background: #f5f5f5; }\r\n\r\n/*.example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.example-container > * {\r\n  width: 60%;\r\n}*/\r\n\r\n.text-center-align {\r\n vertical-align: text-top;\r\n}\r\n\r\n/*input.example-right-align {\r\n  -moz-appearance: textfield;\r\n}\r\n.internalMatGrid {\r\n    border: 1px solid Green;\r\n    min-width: 60%;\r\n   \r\n}*/\r\n\r\n.header-format{   min-width:20%;  text-align:left ;}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmFsdWF0aW9uL3ZhbHVhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLGVBQWUsRUFBRTs7QUFFbkI7RUFDRSxtQkFBbUIsRUFBRTs7QUFFdkI7RUFDRSxtQkFBbUIsRUFBRTs7QUFFdkI7RUFDRSxtQkFBbUIsRUFBRTs7QUFFdkI7RUFDRSxtQkFBbUIsRUFBRTs7QUFFdkI7RUFDRSxtQkFBbUIsRUFBRTs7QUFHdkI7RUFDRSxtQkFBbUIsRUFBRTs7QUFFdkI7Ozs7Ozs7RUFPRTs7QUFJRjtDQUNDLHdCQUF3QjtBQUN6Qjs7QUFJQTs7Ozs7OztFQU9FOztBQUVGLGtCQUFrQixhQUFhLEdBQUcsZ0JBQWdCLENBQUMiLCJmaWxlIjoic3JjL2FwcC92YWx1YXRpb24vdmFsdWF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnZhbCBtZC1ncmlkLWxpc3Qge1xyXG4gIC8qbWFyZ2luOiA4cHg7Ki8gfVxyXG5cclxuLnZhbCAueWVsbG93IHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZjhkOyB9XHJcblxyXG4udmFsIC5ncmVlbiB7XHJcbiAgYmFja2dyb3VuZDogI2I5ZjZjYTsgfVxyXG5cclxuLnZhbCAuYmx1ZSB7XHJcbiAgYmFja2dyb3VuZDogIzg0ZmZmZjsgfVxyXG5cclxuLnZhbCAucHVycGxlIHtcclxuICBiYWNrZ3JvdW5kOiAjYjM4OGZmOyB9XHJcblxyXG4udmFsIC5yZWQge1xyXG4gIGJhY2tncm91bmQ6ICNmZjhhODA7IH1cclxuXHJcblxyXG4udmFsIC5ncmF5IHtcclxuICBiYWNrZ3JvdW5kOiAjZjVmNWY1OyB9XHJcblxyXG4vKi5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uZXhhbXBsZS1jb250YWluZXIgPiAqIHtcclxuICB3aWR0aDogNjAlO1xyXG59Ki9cclxuXHJcblxyXG5cclxuLnRleHQtY2VudGVyLWFsaWduIHtcclxuIHZlcnRpY2FsLWFsaWduOiB0ZXh0LXRvcDtcclxufVxyXG5cclxuXHJcblxyXG4vKmlucHV0LmV4YW1wbGUtcmlnaHQtYWxpZ24ge1xyXG4gIC1tb3otYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xyXG59XHJcbi5pbnRlcm5hbE1hdEdyaWQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgR3JlZW47XHJcbiAgICBtaW4td2lkdGg6IDYwJTtcclxuICAgXHJcbn0qL1xyXG5cclxuLmhlYWRlci1mb3JtYXR7ICAgbWluLXdpZHRoOjIwJTsgIHRleHQtYWxpZ246bGVmdCA7fVxyXG5cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/valuation/valuation.component.ts":
/*!**************************************************!*\
  !*** ./src/app/valuation/valuation.component.ts ***!
  \**************************************************/
/*! exports provided: ValuationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValuationComponent", function() { return ValuationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _val_growth_val_growth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./val-growth/val-growth.component */ "./src/app/valuation/val-growth/val-growth.component.ts");
/* harmony import */ var _val_meta_irr_val_meta_irr_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./val-meta-irr/val-meta-irr.component */ "./src/app/valuation/val-meta-irr/val-meta-irr.component.ts");
/* harmony import */ var _val_fundemental_val_fundemental_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./val-fundemental/val-fundemental.component */ "./src/app/valuation/val-fundemental/val-fundemental.component.ts");
/* harmony import */ var _val_eps_val_eps_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./val-eps/val-eps.component */ "./src/app/valuation/val-eps/val-eps.component.ts");
/* harmony import */ var _valservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./valservice.service */ "./src/app/valuation/valservice.service.ts");
/* harmony import */ var _val_pop_json_val_pop_json_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./val-pop-json/val-pop-json.component */ "./src/app/valuation/val-pop-json/val-pop-json.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");













let ValuationComponent = class ValuationComponent {
    constructor(valService, valformBuilder, dialog, observableMedia, userService, router) {
        this.valService = valService;
        this.valformBuilder = valformBuilder;
        this.dialog = dialog;
        this.observableMedia = observableMedia;
        this.userService = userService;
        this.router = router;
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
            sym: ['ALB', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            cp: ['61', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        if (this.userService.CurrentUserVal === null) {
            this.router.navigate(['/login']);
        }
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
        const dialogRef = this.dialog.open(_val_pop_json_val_pop_json_component__WEBPACK_IMPORTED_MODULE_8__["ValPopJsonComponent"], {
            height: '550px',
            width: '550px',
            data: { valdata }
        });
    }
};
ValuationComponent.ctorParameters = () => [
    { type: _valservice_service__WEBPACK_IMPORTED_MODULE_7__["ValserviceService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] },
    { type: _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["MediaObserver"] },
    { type: _user_service__WEBPACK_IMPORTED_MODULE_11__["UserService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_val_growth_val_growth_component__WEBPACK_IMPORTED_MODULE_3__["ValGrowthComponent"], { static: false })
], ValuationComponent.prototype, "valGrowth", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_val_meta_irr_val_meta_irr_component__WEBPACK_IMPORTED_MODULE_4__["ValMetaIRRComponent"], { static: false })
], ValuationComponent.prototype, "valMeta", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_val_eps_val_eps_component__WEBPACK_IMPORTED_MODULE_6__["ValEpsComponent"], { static: false })
], ValuationComponent.prototype, "valEps", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_val_fundemental_val_fundemental_component__WEBPACK_IMPORTED_MODULE_5__["ValFundementalComponent"], { static: false })
], ValuationComponent.prototype, "valFundml", void 0);
ValuationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'val-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./valuation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/valuation/valuation.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./valuation.component.css */ "./src/app/valuation/valuation.component.css")).default]
    })
], ValuationComponent);



/***/ }),

/***/ "./src/app/valuation/valuation.module.ts":
/*!***********************************************!*\
  !*** ./src/app/valuation/valuation.module.ts ***!
  \***********************************************/
/*! exports provided: ValuationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValuationModule", function() { return ValuationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _valuation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./valuation.component */ "./src/app/valuation/valuation.component.ts");
/* harmony import */ var _valuation_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./valuation-routing.module */ "./src/app/valuation/valuation-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _val_eps_val_eps_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./val-eps/val-eps.component */ "./src/app/valuation/val-eps/val-eps.component.ts");
/* harmony import */ var _val_growth_val_growth_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./val-growth/val-growth.component */ "./src/app/valuation/val-growth/val-growth.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _valuation_valservice_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../valuation/valservice.service */ "./src/app/valuation/valservice.service.ts");
/* harmony import */ var _val_mantra_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @val/mantra.service */ "./src/app/valuation/mantra.service.ts");
/* harmony import */ var _val_meta_irr_val_meta_irr_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./val-meta-irr/val-meta-irr.component */ "./src/app/valuation/val-meta-irr/val-meta-irr.component.ts");
/* harmony import */ var _val_fundemental_val_fundemental_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./val-fundemental/val-fundemental.component */ "./src/app/valuation/val-fundemental/val-fundemental.component.ts");
/* harmony import */ var _val_grid_val_grid_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./val-grid/val-grid.component */ "./src/app/valuation/val-grid/val-grid.component.ts");
/* harmony import */ var _val_pop_json_val_pop_json_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./val-pop-json/val-pop-json.component */ "./src/app/valuation/val-pop-json/val-pop-json.component.ts");
/* harmony import */ var _val_pop_fund_val_pop_fund_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./val-pop-fund/val-pop-fund.component */ "./src/app/valuation/val-pop-fund/val-pop-fund.component.ts");
/* harmony import */ var _security_security_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../security/security.module */ "./src/app/security/security.module.ts");
/* harmony import */ var _mantra_static_mantra_static_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./mantra-static/mantra-static.component */ "./src/app/valuation/mantra-static/mantra-static.component.ts");
/* harmony import */ var _mantra_dynamic_mantra_dynamic_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./mantra-dynamic/mantra-dynamic.component */ "./src/app/valuation/mantra-dynamic/mantra-dynamic.component.ts");



















let ValuationModule = class ValuationModule {
};
ValuationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_valuation_component__WEBPACK_IMPORTED_MODULE_3__["ValuationComponent"], _val_eps_val_eps_component__WEBPACK_IMPORTED_MODULE_6__["ValEpsComponent"], _val_growth_val_growth_component__WEBPACK_IMPORTED_MODULE_7__["ValGrowthComponent"], _val_meta_irr_val_meta_irr_component__WEBPACK_IMPORTED_MODULE_11__["ValMetaIRRComponent"], _val_fundemental_val_fundemental_component__WEBPACK_IMPORTED_MODULE_12__["ValFundementalComponent"], _val_grid_val_grid_component__WEBPACK_IMPORTED_MODULE_13__["ValGridComponent"], _val_pop_json_val_pop_json_component__WEBPACK_IMPORTED_MODULE_14__["ValPopJsonComponent"], _val_pop_fund_val_pop_fund_component__WEBPACK_IMPORTED_MODULE_15__["ValPopFundComponent"], _mantra_static_mantra_static_component__WEBPACK_IMPORTED_MODULE_17__["MantraStaticComponent"], _mantra_dynamic_mantra_dynamic_component__WEBPACK_IMPORTED_MODULE_18__["MantraDynamicComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _valuation_routing_module__WEBPACK_IMPORTED_MODULE_4__["ValuationRoutingModule"],
            _security_security_module__WEBPACK_IMPORTED_MODULE_16__["SecurityModule"]
        ],
        entryComponents: [_val_pop_json_val_pop_json_component__WEBPACK_IMPORTED_MODULE_14__["ValPopJsonComponent"], _val_pop_fund_val_pop_fund_component__WEBPACK_IMPORTED_MODULE_15__["ValPopFundComponent"], _mantra_dynamic_mantra_dynamic_component__WEBPACK_IMPORTED_MODULE_18__["MantraDynamicComponent"]],
        providers: [
            _valuation_valservice_service__WEBPACK_IMPORTED_MODULE_9__["ValserviceService"],
            _val_mantra_service__WEBPACK_IMPORTED_MODULE_10__["MantraService"]
        ]
    })
], ValuationModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\PropDemoVS\PropDemoVS\AngularApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map