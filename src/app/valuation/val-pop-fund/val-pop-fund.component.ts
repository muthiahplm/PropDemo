import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

@Component({
  selector: 'val-pop-fund',
  templateUrl: './val-pop-fund.component.html',
  styleUrls: ['./val-pop-fund.component.css']
})
export class ValPopFundComponent implements OnInit {

    constructor(private _bottomSheetRef: MatBottomSheetRef<ValPopFundComponent>,
        @Inject(MAT_BOTTOM_SHEET_DATA) public data: any) 
    { }

  ngOnInit() {
  }

}
