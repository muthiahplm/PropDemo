import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { valuationParam, valuationResponse } from '../valuation/interface/ival';
import { BehaviorSubject } from 'rxjs';
import Decimal from "decimal.js";
import { of } from 'rxjs';
let ValserviceService = class ValserviceService {
    constructor(http) {
        this.http = http;
        this.isCalculateValuation = new BehaviorSubject(false);
        this.columnScreenSize = new BehaviorSubject(1);
        this.obsColumnScreenSize = this.columnScreenSize.asObservable();
        this.valMain = new valuationParam();
    }
    setColumnScreenSize(size) {
        this.columnScreenSize.next(size);
    }
    getValuation() {
        return this.http.get("../assets/Valuation.json");
    }
    setGrowth(growth) {
        if (growth.calcGrowth <= growth.analystGrowth) {
            this.valMain.futureGrowth = new Decimal(growth.calcGrowth);
        }
        else {
            this.valMain.futureGrowth = new Decimal(growth.analystGrowth);
        }
    }
    setProfit(pft) {
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
    setFundemental(vf) {
        this.valMain.ce = new Decimal(vf.ce);
        this.valMain.de = new Decimal(vf.de);
        this.valMain.roic = new Decimal(vf.roic);
        this.valMain.evbt = new Decimal(vf.evbt);
        this.valMain.ps = new Decimal(vf.ps);
    }
    setMeta(meta) {
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
    setValBasic(val) {
        this.valMain.sym = val.sym;
        this.valMain.currenttPrice = new Decimal(val.cp);
    }
    setValuation(val) {
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
    calcValuation() {
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
            valuationRes.decision = "Buy";
        }
        else if (valuationRes.difference.lessThan(35)) {
            valuationRes.decision = "Hold";
        }
        else if (valuationRes.difference.lessThan(50)) {
            valuationRes.decision = "Sell";
        }
        else {
            valuationRes.decision = "Strong Sell";
        }
        let jsonVal = JSON.stringify(valuationRes);
        const jsonvalObs = of(jsonVal);
        console.log("val obj", jsonVal);
        console.log("future price", futurePrice);
        console.log("fair price", fairPrice);
        return jsonvalObs;
    }
};
ValserviceService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], ValserviceService);
export { ValserviceService };
//# sourceMappingURL=valservice.service.js.map