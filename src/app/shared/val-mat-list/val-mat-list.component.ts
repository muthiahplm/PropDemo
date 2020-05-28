import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';


@Component({
  selector: 'val-mat-list',
  templateUrl: './val-mat-list.component.html',
  styleUrls: ['./val-mat-list.component.css']
})
export class ValMatListComponent implements OnInit {

  @Input() subMantraForm: FormGroup ;

  headerControlVal: string;

  mantraHeaderItemsVal: string;

  constructor(private fb: FormBuilder) { }

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

}
