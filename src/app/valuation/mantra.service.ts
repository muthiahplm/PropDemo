import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Observable, BehaviorSubject } from 'rxjs';
import { ivalMantra, ivalMantrapProperty } from '@val/interface/ival';
import { MantraForm } from '@val/interface/model/mantra-form.model';
import { Mantra } from '@val/interface/model/mantra.model';
import { SubmantraForm } from '@shared/model/submantra-form.model';
import { Submantra } from '@shared/model/submantra.model';
import { ValserviceService } from '@val/valservice.service';


@Injectable({
  providedIn: 'root'
})
export class MantraService {

  private arr: FormArray;
  private mantra: ivalMantra;



  private mantraVal: BehaviorSubject<FormGroup | undefined>;
  

  mantra$: Observable<FormGroup>;
    

  constructor(private fb: FormBuilder,
    private valServc: ValserviceService
  ) {
    this.mantra = this.valServc.getStaticMantra();
    this.mantraVal = new BehaviorSubject(this.fb.group(new MantraForm(new Mantra(this.mantra),this.fb)));
    this.mantra$ = this.mantraVal.asObservable();

  }

}
