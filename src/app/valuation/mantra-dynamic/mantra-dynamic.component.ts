import { Component, OnInit, Inject,ViewChild,AfterViewInit, ElementRef } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { ivalMantra } from '@val/interface/ival';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MantraService } from '@val/mantra.service';
import { ValMatSelListComponent } from '@shared/val-mat-sel-list/val-mat-sel-list.component';

@Component({
  selector: 'val-mantra-dynamic',
  templateUrl: './mantra-dynamic.component.html',
  styleUrls: ['./mantra-dynamic.component.css']
})
export class MantraDynamicComponent implements OnInit, AfterViewInit {


  ticker: string;
  //valMantra: ivalMantra;
  fg: FormGroup;
  @ViewChild(ValMatSelListComponent, { read: ElementRef,static:true}) childComponent: ValMatSelListComponent;

  constructor(
    public dialogRef: MatDialogRef<MantraDynamicComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private mantraService: MantraService,
    private fb: FormBuilder
     
  ) {
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

}
