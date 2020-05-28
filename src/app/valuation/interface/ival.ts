import Decimal from "decimal.js";

export interface valGrowth {
  firstYrGrowth: number,
  lastYrGrowth: number,
  growthYear: number,
  calcGrowth: Decimal,
  analystGrowth: Decimal
}
export interface valMeta {
  irr: Decimal,
  noOfYear: number,
  mos: number

}
export interface valEPS {

  eps: Decimal,
  hpe: Decimal,
  lpe: Decimal,
  ape: Decimal,
  cpe: Decimal


}
export interface valFund {

  de: Decimal,
  ce: Decimal,
  roic: Decimal,
  evbt: Decimal

  ps: Decimal;

}
export class valuationParam {
  futureGrowth: Decimal;
  meta: valMeta;
  sym: string;
  currenttPrice: Decimal;
  futurePe: Decimal;
  eps: Decimal;
  ce: Decimal;
  de: Decimal;
  roic: Decimal;
  evbt: Decimal;
  ps: Decimal;
}

export class valuationResponse {
  futureGrowthValue: Decimal;
  futureGrowth: Decimal;
  meta: valMeta;
  sym: string;
  eps: Decimal;
  futurePE: Decimal;

  futurePrice: Decimal;
  fairPrice: Decimal;
  currenttPrice: Decimal;
  finalPrice: Decimal;
  difference: Decimal;
  payBack: Decimal;
  decision: string;

  ce: Decimal;
  de: Decimal;
  roic: Decimal;
  evbt: Decimal;
  ps: Decimal;
  mantra: ivalMantra;
}
export interface codeDescription {
  code: string;
  description: string;
  value: boolean;
}

export interface ivalMantrapProperty {
  mantraHeader: string;

  mantraHeaderItems: codeDescription[];

}
export interface ivalMantra {
  ticker: string;
  subMantras: ivalMantrapProperty[];

}

//export class valMantra {

//  constructor(valMantraArgs: ivalMantra) {
//    for (let mantra in valMantraArgs) {
//      this[mantra] = valMantraArgs[mantra];
//    }
//  }


