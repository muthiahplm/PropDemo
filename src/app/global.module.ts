import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class GlobalModule {
  static forRoot() {
    return {
      ngModule: GlobalModule,
      providers: [UserService]
    }
  }
}
