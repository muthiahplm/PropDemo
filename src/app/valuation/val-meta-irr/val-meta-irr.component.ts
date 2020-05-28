import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValserviceService } from '../valservice.service';

@Component({
  selector: 'val-meta-irr',
  templateUrl: './val-meta-irr.component.html',
  styleUrls: ['./val-meta-irr.component.css']
})
export class ValMetaIRRComponent implements OnInit {

    constructor(private metaform: FormBuilder, private valService: ValserviceService) { }
    metformGroup: FormGroup;
    ngOnInit() {
        this.metformGroup =   this.metaform.group({

            irr: ['15', Validators.required],
            noOfYear: ['5', Validators.required],
            mos: ['30', Validators.required],

        });
  }
     setMeta() {
         this.valService.setMeta(this.metformGroup.value);
    }
}
