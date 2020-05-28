import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes, Route} from '@angular/router';
import { ValLoginComponent } from './val-login/val-login.component';
import { ValRegisterComponent } from './val-register/val-register.component';

const securityRoutes: Routes = [

  { path: 'login', component: ValLoginComponent },
  { path: 'register', component: ValRegisterComponent }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(securityRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SecurityRoutModule { }
