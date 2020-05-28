import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValuationComponent } from './valuation.component';
import { ValuationRoutingModule } from './valuation-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ValEpsComponent } from './val-eps/val-eps.component';
import { ValGrowthComponent } from './val-growth/val-growth.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ValserviceService } from '../valuation/valservice.service';
import { MantraService } from '@val/mantra.service';
import { ValMetaIRRComponent } from './val-meta-irr/val-meta-irr.component';
import { ValFundementalComponent } from './val-fundemental/val-fundemental.component';
import { ValGridComponent } from './val-grid/val-grid.component';

import { ValPopJsonComponent } from './val-pop-json/val-pop-json.component';
import { ValPopFundComponent } from './val-pop-fund/val-pop-fund.component';
import { SecurityModule } from '../security/security.module';
import { MantraStaticComponent } from './mantra-static/mantra-static.component';
import { MantraDynamicComponent } from './mantra-dynamic/mantra-dynamic.component';

@NgModule({
  declarations: [ValuationComponent, ValEpsComponent, ValGrowthComponent, ValMetaIRRComponent, ValFundementalComponent, ValGridComponent, ValPopJsonComponent, ValPopFundComponent, MantraStaticComponent, MantraDynamicComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ValuationRoutingModule,
    
    SecurityModule
  ],
  entryComponents: [ValPopJsonComponent, ValPopFundComponent, MantraDynamicComponent],
  providers: [
    ValserviceService,
    MantraService
  ] 

})
export class ValuationModule { }
