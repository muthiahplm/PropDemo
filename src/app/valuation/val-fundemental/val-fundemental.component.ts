import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValserviceService } from '../valservice.service';

@Component({
  selector: 'val-fundemental',
  templateUrl: './val-fundemental.component.html',
  styleUrls: ['./val-fundemental.component.css']
})
export class ValFundementalComponent implements OnInit {

    constructor(private fundmlForm: FormBuilder, private valService: ValserviceService) { }
    fundmlFormGroup: FormGroup;

    ngOnInit() {
        this.fundmlFormGroup = this.fundmlForm.group({

            de: ['.08', Validators.required],
            ce: ['1', Validators.required],
            roic: [12, Validators.required],
            evbt: [12, Validators.required],
            ps:[5,Validators.required]
        });
    }

    setFundemental() {
        this.valService.setFundemental(this.fundmlFormGroup.value);
    }

}
