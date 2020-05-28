import { Component, OnInit, Inject, Input } from '@angular/core';
import { ivalMantra, ivalMantrapProperty } from '@val/interface/ival';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'val-mat-sel-list',
  templateUrl: './val-mat-sel-list.component.html',
  styleUrls: ['./val-mat-sel-list.component.css']
})
export class ValMatSelListComponent implements OnInit {
  @Input() subMantraForm: FormGroup;

  headerControlVal: string;

  mantraHeaderItemsVal: string;
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
  storeMantra(val: any) {
    console.log(val);
  }
}
