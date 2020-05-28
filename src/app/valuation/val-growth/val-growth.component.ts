import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import Decimal from "decimal.js";
import { ValserviceService } from '../valservice.service';

@Component({
    selector: 'val-growth',
    templateUrl: './val-growth.component.html',
    styleUrls: ['./val-growth.component.css']
})
export class ValGrowthComponent implements OnInit {

    valGrowthForm: FormGroup;
  gridCol: number;

    get valGrowthControls() { return this.valGrowthForm.controls; }
    get firstYrGrowth() {
        return this.valGrowthForm.controls['firstYrGrowth'];
    }
    get lastYrGrowth() { return this.valGrowthForm.controls['lastYrGrowth']; }
    get growthYear() { return this.valGrowthForm.controls['growthYear']; }
    get calcGrowth() { return this.valGrowthForm.controls['calcGrowth']; }
    get analystGrowth() { return this.valGrowthForm.controls['analystGrowth']; }

    constructor(private valformBuilder: FormBuilder, private valService: ValserviceService) { }

    ngOnInit() {
        this.valGrowthForm = this.valformBuilder.group({
            firstYrGrowth: ['521743', Validators.required],
            lastYrGrowth: ['766961', Validators.required],
            growthYear: ['4', Validators.required],
            calcGrowth: ['', Validators.required],
            analystGrowth: ['15.3']

        });

        this.registerSubscriptions();

    }

    registerSubscriptions() {

        this.lastYrGrowth.valueChanges
            .pipe(debounceTime(500))
            .subscribe((lastYrGrowthVal: any) => {

                let growthDiscount = this.growthYear.value == 0 ? 0 : (1 / this.growthYear.value);

                let y = new Decimal(lastYrGrowthVal);
                let x = new Decimal(this.firstYrGrowth.value);
                let z = new Decimal(1 / this.growthYear.value);
                
                //let dervive1Val : any  = ( / this.firstYrGrowth.value);
                let derivedGrowth = ((y.dividedBy(x)).toPower(z)).sub(1).mul(100) ;

                this.calcGrowth.setValue(derivedGrowth.toFixed(2));

             
            });
      this.valService.obsColumnScreenSize.subscribe((size) => {
        if (size == 1) {
          this.gridCol = size;
        } else {
          this.gridCol = 2;
        }

      });


        
    }


    setGrowth() {
        this.valService.setGrowth(this.valGrowthForm.value);
    }


}
