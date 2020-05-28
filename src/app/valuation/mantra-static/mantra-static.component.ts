import { Component, OnInit } from '@angular/core';
import { ivalMantra, codeDescription } from '@val/interface/ival';

import { MantraService } from '@val/mantra.service';
import { FormGroup,FormArray ,FormBuilder} from '@angular/forms';

@Component({
  selector: 'val-mantra-static',
  templateUrl: './mantra-static.component.html',
  styleUrls: ['./mantra-static.component.css']
})
export class MantraStaticComponent implements OnInit {

  staticMantraFG: FormGroup;
  subMantras: FormArray;

  constructor(
    private mantraService: MantraService,
    private fb: FormBuilder
  
  ) {

    //this.staticMantraFG = this.fb.group({
    //  ticker :['t']
    //})
  }

  ngOnInit() {
   

   this.mantraService.mantra$.subscribe((x) => {
     this.staticMantraFG = x;
     this.subMantras = this.staticMantraFG.get('subMantras') as FormArray
    });
    
  }
  




}
