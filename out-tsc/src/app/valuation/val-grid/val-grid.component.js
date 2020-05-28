import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource } from '@angular/material';
import { ValPopJsonComponent } from '../val-pop-json/val-pop-json.component';
import { ValPopFundComponent } from '../val-pop-fund/val-pop-fund.component';
import { BehaviorSubject } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
let ValGridComponent = class ValGridComponent {
    //get filterSymCtrl() { return this.valgridFG.controls['filterSym']; }
    constructor(valgridBuilder, valService, dialog, bottomSheet) {
        this.valgridBuilder = valgridBuilder;
        this.valService = valService;
        this.dialog = dialog;
        this.bottomSheet = bottomSheet;
        this.displayedColumns = ['sym', 'irr', 'noOfYear', 'mos', 'eps', 'futurePE', 'futureGrowth', 'fairPrice', 'futurePrice',
            'currenttPrice', 'finalPrice', 'difference', 'decision', 'payBack', 'actionsColumn'];
        this.filterSym = new BehaviorSubject("");
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
            .pipe(startWith(''), map(value => {
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
            this.dataSource = new MatTableDataSource(data);
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
    openDialog(valdata) {
        const dialogRef = this.dialog.open(ValPopJsonComponent, {
            height: '550px',
            width: '550px',
            data: { valdata }
        });
    }
    highlight(row) {
        this.selectedSym = row.sym;
    }
    openBottomSheet(row) {
        this.bottomSheet.open(ValPopFundComponent, { data: row });
    }
};
tslib_1.__decorate([
    ViewChild('pgntor', { static: false })
], ValGridComponent.prototype, "paginator", void 0);
tslib_1.__decorate([
    ViewChild(MatSort, { static: false })
], ValGridComponent.prototype, "sort", void 0);
ValGridComponent = tslib_1.__decorate([
    Component({
        selector: 'val-grid',
        templateUrl: './val-grid.component.html',
        styleUrls: ['./val-grid.component.css']
    })
], ValGridComponent);
export { ValGridComponent };
//# sourceMappingURL=val-grid.component.js.map