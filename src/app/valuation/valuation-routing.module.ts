import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ValuationComponent } from './valuation.component';
import { MantraStaticComponent } from '@val/mantra-static/mantra-static.component';

const routes: Routes = [
  { path: '', component: ValuationComponent },
  { path: 'mantra', component: MantraStaticComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValuationRoutingModule { }
