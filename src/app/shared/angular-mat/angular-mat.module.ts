import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as AngularComponents from '../index';

//import {
//  MatGridListModule, MatFormFieldModule,
//  MatInputModule, MatIconModule, MatCardModule, MatButtonModule,
//  MatExpansionModule, MatPaginator, MatSort, MatTableDataSource, MatTableModule, MatPaginatorModule,
//  MatSortModule, MatDialogModule, MatBottomSheetModule, MatAutocompleteModule, MatToolbarModule,MatToolbarRow
//} from '@angular/material';


@NgModule({
  declarations: [],
  imports: [
    //CommonModule,
    //MatGridListModule,
    //MatFormFieldModule,
    //MatInputModule,
    //MatIconModule,
    //MatCardModule,
    //MatButtonModule,
    //MatDialogModule,
    //MatExpansionModule,
    //MatTableModule,
    //MatPaginatorModule,
    //MatSortModule,
    //MatBottomSheetModule,
    //MatAutocompleteModule,
    //MatToolbarModule
    AngularComponents.components

  ],
  exports: [
    //MatGridListModule,
    //MatFormFieldModule,
    //MatInputModule,
    //MatIconModule,
    //MatDialogModule,
    //MatCardModule,
    //MatButtonModule,
    //MatExpansionModule,
    //MatTableModule,
    //MatPaginatorModule,
    //MatSortModule,
    //MatBottomSheetModule,
    //MatAutocompleteModule,
    //MatToolbarModule
    AngularComponents.components
  ]
})
export class AngularMatModule { }
