import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import Decimal from "decimal.js";
import { ValserviceService } from '../valservice.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { valuationResponse, valuationParam } from '../interface/ival';
//import { ValPopJsonComponent } from '../val-pop-json/val-pop-json.component'; 
import { ValPopJsonComponent } from '@val/val-pop-json/val-pop-json.component'; 
import { ValPopFundComponent } from '../val-pop-fund/val-pop-fund.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MantraDynamicComponent } from '@val/mantra-dynamic/mantra-dynamic.component';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Observable, BehaviorSubject } from 'rxjs';
import { startWith, map } from 'rxjs/operators'; 

@Component({
  selector: 'val-grid',
  templateUrl: './val-grid.component.html',
  styleUrls: ['./val-grid.component.css']
})
export class ValGridComponent implements OnInit {

  displayedColumns = ['sym', 'irr', 'noOfYear', 'mos', 'eps', 'futurePE', 'futureGrowth', 'fairPrice', 'futurePrice',
    'currenttPrice', 'finalPrice', 'difference', 'decision', 'payBack', 'actionsColumn'];
  selectedSym: string;
  dataSource: MatTableDataSource<valuationResponse>;
  @ViewChild('pgntor', { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  resultsLength: number;
  filteredSymbols: Observable<string[]>;
  valgridFG: FormGroup;
  filterSym = new BehaviorSubject<string>("");

  decisionIds = {
    'Strong Buy': 1,
    'Buy': 2,
    'Hold': 3,
    'Sell': 4,
    'Strong Sell': 5
  }
  //get filterSymCtrl() { return this.valgridFG.controls['filterSym']; }

  constructor(private valgridBuilder: FormBuilder, private valService: ValserviceService,
    public dialog: MatDialog,
    private bottomSheet: MatBottomSheet
  ) {
    this.selectedSym = "";
  }

  ngOnInit() {
  
    
 

    this.reload();

    this.filterSym
      .pipe(
        startWith(''),
        map(value => {
          return value;
        })

    ).subscribe((filter) => {
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
      }
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
  reCalculateValuation(row: valuationResponse) {

    this.valService.setValuation(row);
    this.valService.calcValuation()
      .subscribe((jsonData) => {
        //this.openDialog(jsonData);
        let recalc = JSON.parse(jsonData);

        const index = this.dataSource.data.findIndex((sym) => sym.sym === recalc.sym);
        if (index > -1) {
          this.dataSource.data[index] = recalc;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort
        }


      });
  }
  showJsonVal(row: valuationResponse) {

    this.valService.setValuation(row);
    this.valService.calcValuation()
      .subscribe((jsonData) => {
        this.openDialog(jsonData);

      });
  }

  showMantra(row: valuationResponse) {

    this.valService.setValuation(row);
    const dialogRef = this.dialog.open(MantraDynamicComponent, {
      height: '750px',
      width: '550px',
 
   

      data: { ticker: row.sym, valMantra : row.mantra }
    });

    
  }

  openDialog(valdata: string): void {
    const dialogRef = this.dialog.open(ValPopJsonComponent, {
      height: '550px',
      width: '550px',
      data: { valdata }
    });
  }

  highlight(row) {
    this.selectedSym = row.sym;
  }

  openBottomSheet(row: valuationResponse): void {
    this.bottomSheet.open(ValPopFundComponent, { data: row });
  }
}
