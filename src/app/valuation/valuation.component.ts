import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValGrowthComponent } from './val-growth/val-growth.component';
import { ValMetaIRRComponent } from './val-meta-irr/val-meta-irr.component';
import { ValFundementalComponent } from './val-fundemental/val-fundemental.component';
import { ValEpsComponent } from './val-eps/val-eps.component';
import { ValserviceService } from './valservice.service';
import { tap, startWith, delay } from 'rxjs/operators';
import { pipe } from 'rxjs';
import { ValPopJsonComponent } from './val-pop-json/val-pop-json.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}


@Component({
  selector: 'val-header',
  templateUrl: './valuation.component.html',
  styleUrls: ['./valuation.component.css']
})
export class ValuationComponent implements OnInit {

  @ViewChild(ValGrowthComponent, { static: false }) valGrowth: ValGrowthComponent;
  @ViewChild(ValMetaIRRComponent, { static: false }) valMeta: ValMetaIRRComponent;
  @ViewChild(ValEpsComponent, { static: false }) valEps: ValEpsComponent;
  @ViewChild(ValFundementalComponent, { static: false }) valFundml: ValFundementalComponent;
  valFormGroup: FormGroup;

  tiles: Tile[] = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
  ];

  gridCol: number = 2;

  gridByBreakpoint = {
    xl: 2,
    lg: 1,
    md: 1,
    sm: 1,
    xs: 1
  }

  constructor(private valService: ValserviceService, private valformBuilder: FormBuilder,
    public dialog: MatDialog,
    private observableMedia: MediaObserver,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.valFormGroup = this.valformBuilder.group({
      sym: ['ALB', Validators.required],
      cp: ['61', Validators.required]
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

    this.observableMedia.media$.subscribe((change: MediaChange) => {
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
  openDialog(valdata: string): void {
    const dialogRef = this.dialog.open(ValPopJsonComponent, {
      height: '550px',
      width: '550px',
      data: { valdata }
    });
  }

}
