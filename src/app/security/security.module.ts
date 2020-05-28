import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValRegisterComponent } from './val-register/val-register.component';
import { ValLoginComponent } from './val-login/val-login.component';
import { SharedModule } from '../shared/shared.module';
import { SecurityRoutModule } from './security-rout.module';



@NgModule({
  declarations: [ValRegisterComponent, ValLoginComponent],
  imports: [
    CommonModule,
    SharedModule,
    SecurityRoutModule
  ]
})
export class SecurityModule { }
