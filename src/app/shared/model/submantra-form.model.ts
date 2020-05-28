import {  FormControl } from '@angular/forms';
import { Submantra } from '@shared/model/submantra.model';

export class SubmantraForm {

  subMantra = new FormControl();

  constructor(subMantraValue: Submantra) {

    this.subMantra.setValue(subMantraValue);
  }
}
