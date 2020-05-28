import { Component, OnInit, Inject, ViewChild, ElementRef } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-val-pop-json',
  templateUrl: './val-pop-json.component.html',
  styleUrls: ['./val-pop-json.component.css']
})
export class ValPopJsonComponent implements OnInit {

    @ViewChild('inputElement', { static: false }) inputElement: ElementRef;

    constructor(
        public dialogRef: MatDialogRef<ValPopJsonComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {
        console.log(this.data)
            ;    }

  ngOnInit() {
  }
    /* To copy Text from Textbox */
    copyInputMessage() {
        this.inputElement.nativeElement.select();
        document.execCommand('copy');
        this.inputElement.nativeElement.setSelectionRange(0, 0);
    }

    onNoClick(): void {
        this.dialogRef.close();
    }

}
