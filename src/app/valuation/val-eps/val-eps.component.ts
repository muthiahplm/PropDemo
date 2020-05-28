import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import Decimal from "decimal.js";
import { ValserviceService } from '../valservice.service';

@Component({
  selector: 'val-eps',
  templateUrl: './val-eps.component.html',
  styleUrls: ['./val-eps.component.css']
})
export class ValEpsComponent implements OnInit {
  
  valEpsForm: FormGroup;
  gridCol: number;
  test: number;

    constructor(private valEpsBuilder: FormBuilder, private valService: ValserviceService) { }

    ngOnInit() {
        this.valEpsForm = this.valEpsBuilder.group({
           
            eps: ['3.02', Validators.required],
            hpe: ['20.01', Validators.required],
            lpe: ['19.24', Validators.required],
            //cpe: ['19.62', Validators.required],
            ape: ['20.22', Validators.required],
        });

      this.valService.obsColumnScreenSize.subscribe((size) => {
        if (size == 1) {
          this.gridCol = size;
        } else {
          this.gridCol = 3;
        }

      });
  }

   



    setProfit() {
        this.valService.setProfit(this.valEpsForm.value);
    }
}
