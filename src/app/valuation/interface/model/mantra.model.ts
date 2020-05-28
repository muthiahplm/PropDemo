import { ivalMantrapProperty, ivalMantra } from '@val/interface/ival';
export class Mantra {

  ticker: string;
  subMantras: ivalMantrapProperty[]

  constructor(mantra: ivalMantra) {
    if (mantra) {
      this.subMantras = mantra.subMantras;

      this.ticker = mantra.ticker;
    }
  }
}
