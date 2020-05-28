import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMatModule } from './angular-mat/angular-mat.module';
import { ValDecPipePipe } from './Pipe/val-dec-pipe.pipe';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgLoginModule } from 'ng-login';
import { ValMatListComponent } from '@shared/val-mat-list/val-mat-list.component';
import { ValMatSelListComponent } from './val-mat-sel-list/val-mat-sel-list.component';


@NgModule({
  declarations: [ValDecPipePipe, ValMatListComponent, ValMatListComponent, ValMatSelListComponent],
  imports: [
    CommonModule,
    AngularMatModule,
    FlexLayoutModule,
    NgLoginModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AngularMatModule, 
    ValDecPipePipe,
    FlexLayoutModule,
    NgLoginModule, 
    ValMatListComponent,
    ValMatSelListComponent
  ]
})
export class SharedModule { }
