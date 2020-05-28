import { Mantra } from '@val/interface/model/mantra.model';
import { Submantra} from '@shared/model/submantra.model'
import { FormArray, FormControl,FormBuilder,FormGroup } from '@angular/forms';
import { ivalMantrapProperty } from '../ival';

export class MantraForm {

  ticker = new FormControl();
  subMantras = new FormArray([]);

  constructor(mantraWrapper: Mantra,private fb : FormBuilder) {
    if (mantraWrapper)
      this.ticker.setValue(mantraWrapper.ticker);
    
    this.subMantras = this.fb.array(mantraWrapper.subMantras.map((sub) => this.createSubMantra(sub)));
    //  this.fb.array([
    //  this.fb.group({ mantraHeader: '', mantraHeaderItems: [{ code: '', description: '', value: false }] })
    //]);
   // this.subMantras.setValue(mantraWrapper.subMantras);

   // this.fb.array(mantraWrapper.subMantras.map((sub) => this.createSubMantra(sub)
  }

  createSubMantra(sub: ivalMantrapProperty): FormGroup {
    return this.fb.group({
      mantraHeader: sub.mantraHeader,
      mantraHeaderItems: this.fb.array(sub.mantraHeaderItems)
    });
  }
}
