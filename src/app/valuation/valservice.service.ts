import { Injectable } from '@angular/core';
import { valuationParam, valGrowth, valMeta, valEPS, valFund, valuationResponse,ivalMantra,ivalMantrapProperty } from '../valuation/interface/ival';
import { BehaviorSubject } from 'rxjs';
import Decimal from "decimal.js";
import { HttpClient } from '@angular/common/http';
import { Observable, from, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ValserviceService {

  valMain: valuationParam;

  public isCalculateValuation = new BehaviorSubject<boolean>(false);
  private columnScreenSize = new BehaviorSubject<number>(1);
  public obsColumnScreenSize: Observable<number> = this.columnScreenSize.asObservable();

  constructor(private http: HttpClient) {
    this.valMain = new valuationParam();
  }


  public setColumnScreenSize(size: number) {
    this.columnScreenSize.next(size);
  }

  public getValuation(): Observable<valuationResponse[]> {
    
    return this.http.get<valuationResponse[]>("../assets/Valuation.json");
  }

  public setGrowth(growth: valGrowth) {
    if (growth.calcGrowth <= growth.analystGrowth) {
      this.valMain.futureGrowth = new Decimal(growth.calcGrowth);
    }
    else {
      this.valMain.futureGrowth = new Decimal(growth.analystGrowth);
    }
  }
  public setProfit(pft: valEPS) {
    let x = new Decimal(pft.hpe);
    let y = new Decimal(pft.lpe);
    let avgPe = x.add(y).dividedBy(2);
    let growthPe = this.valMain.futureGrowth.mul(2);
    if (avgPe.lessThanOrEqualTo(growthPe) || growthPe.equals(0)) {
      this.valMain.futurePe = avgPe;
    }
    else {
      this.valMain.futurePe = growthPe;
    }
    this.valMain.eps = new Decimal(pft.eps);
  }

  public setFundemental(vf: valFund) {

    this.valMain.ce = new Decimal(vf.ce);
    this.valMain.de = new Decimal(vf.de);
    this.valMain.roic = new Decimal(vf.roic);
    this.valMain.evbt = new Decimal(vf.evbt);
    this.valMain.ps = new Decimal(vf.ps);
  }

  public setMeta(meta: valMeta) {
    this.valMain.meta = meta;
    if (this.valMain.ps.greaterThan(5)) {

      this.valMain.meta.mos = 50;
    }

    else if (this.valMain.ce.greaterThanOrEqualTo(2) && this.valMain.de.lessThanOrEqualTo(0.5) && this.valMain.roic.greaterThanOrEqualTo(10)) {
      this.valMain.meta.mos = 25;
    }
    else if (this.valMain.ce.greaterThanOrEqualTo(2) && this.valMain.de.lessThanOrEqualTo(0.5)) {
      this.valMain.meta.mos = 35;
    }


    else {
      this.valMain.meta.mos = 50;

    }
  }

  public setValBasic(val: any) {
    this.valMain.sym = val.sym;
    this.valMain.currenttPrice = new Decimal(val.cp);
  }
  public setValuation(val: valuationResponse) {
    this.valMain.sym = val.sym;
    this.valMain.currenttPrice = new Decimal(val.currenttPrice);
    this.valMain.eps = new Decimal(val.eps);
    this.valMain.futurePe = new Decimal(val.futurePE);
    this.valMain.futureGrowth = new Decimal(val.futureGrowth);
    this.valMain.de = val.de;
    this.valMain.ce = val.ce;
    this.valMain.evbt = val.evbt;
    this.valMain.ps = val.ps;
    this.valMain.roic = val.roic;
    this.valMain.meta = val.meta;
  }

  public calcValuation(): Observable<string> {

    let x = new Decimal(this.valMain.meta.irr);
    let currenttPrice = new Decimal(this.valMain.currenttPrice);
    let growthPct = this.valMain.futureGrowth.dividedBy(100);
    let growthDis = (this.valMain.futureGrowth.dividedBy(100).add(1)).toPower(this.valMain.meta.noOfYear);
    let futureGrowthVal = (this.valMain.eps.mul(growthDis));
    let futurePrice = futureGrowthVal.mul(this.valMain.futurePe);
    let fairPrice = futurePrice.dividedBy(x.dividedBy(100).add(1).toPower(this.valMain.meta.noOfYear));
    let payCeilNm = (currenttPrice.dividedBy(this.valMain.eps).add(1)).mul(growthPct).add(1).naturalLogarithm();
    let payBackDm = (growthPct.add(1)).naturalLogarithm();
    let test = this.valMain.futureGrowth.naturalLogarithm();
    //let payBack = ((growthPct.add(1).mul((currenttPrice.dividedBy(this.valMain.eps)).add(1))).naturalLogarithm().dividedBy
    //    (growthPct.add(1)).naturalLogarithm()).sub(-1);

    let payBack = payCeilNm.dividedBy(payBackDm).sub(1);

    let finalPrice = ((new Decimal(100).sub(this.valMain.meta.mos)).mul(fairPrice)).dividedBy(100);
    let valuationRes = new valuationResponse();
    valuationRes.eps = this.valMain.eps;
    valuationRes.futureGrowthValue = futureGrowthVal;
    valuationRes.futureGrowth = new Decimal(this.valMain.futureGrowth.toFixed(2));
    valuationRes.futurePE = this.valMain.futurePe;
    valuationRes.futurePrice = futurePrice;
    valuationRes.fairPrice = fairPrice;
    valuationRes.sym = this.valMain.sym;
    valuationRes.currenttPrice = currenttPrice;
    valuationRes.meta = this.valMain.meta;
    valuationRes.finalPrice = finalPrice;
    valuationRes.difference = (valuationRes.currenttPrice.sub(finalPrice)).dividedBy(finalPrice).mul(100);
    valuationRes.de = this.valMain.de;
    valuationRes.ce = this.valMain.ce;
    valuationRes.roic = this.valMain.roic;
    valuationRes.evbt = this.valMain.evbt;
    valuationRes.ps = this.valMain.ps;
    valuationRes.payBack = payBack;

    if (valuationRes.difference.lessThan(0)) {
      valuationRes.decision = "Strong Buy";
    }
    else if (valuationRes.difference.lessThan(20)) {
      valuationRes.decision = "Buy"
    }
    else if (valuationRes.difference.lessThan(35)) {
      valuationRes.decision = "Hold"
    }
    else if (valuationRes.difference.lessThan(50)) {
      valuationRes.decision = "Sell"
    }
    else {
      valuationRes.decision = "Strong Sell"
    }
    let jsonVal = JSON.stringify(valuationRes);
    const jsonvalObs = of(jsonVal);

    console.log("val obj", jsonVal);
    console.log("future price", futurePrice);
    console.log("fair price", fairPrice);
    return jsonvalObs;
  }

  public getStaticMantra(): ivalMantra {
    const submantras: ivalMantrapProperty[] = [{
      mantraHeader: "Long Term Prospect",
      mantraHeaderItems: [
        { code: "LG", description: "Industry future", value: false },
        { code: "SM", description: "Strong Moat", value: false },
        { code: "RS", description: "Reap & Sow ", value: false }
      ]
    },
    {
      mantraHeader: "Management Prospect",
      mantraHeaderItems: [
        { code: "10K", description: "Read Management report 10k ,Leader by words", value: false },
        { code: "AO", description: "Less Acquistion and options", value: false },
        { code: "RD", description: "5-10% R&D spending  ", value: false }
      ]
    }
    ,{
      mantraHeader: "Strong Financial Health",
      mantraHeaderItems: [
        { code: "FF", description: "Net  Operating Free Cashflow consistent growth", value: false },
        { code: "SM", description: "Strong Moat", value: false },
        { code: "RS", description: "Reap & Sow ", value: false }
      ]
      }
    ];

    const valMantra: ivalMantra = {
      subMantras: submantras,
      ticker : "test"
    };

    return valMantra;

  }
}
