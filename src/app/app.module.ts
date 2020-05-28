import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecurityModule } from './security/security.module';
import { ValuationModule } from './valuation/valuation.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GlobalModule } from './global.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LoaderInterceptorService } from './loader-interceptor.service';
import { fakeBackendProvider } from './fake-backend-interceptor.service';



@NgModule({
  declarations: [
        AppComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      AppRoutingModule,
    ValuationModule,
    SecurityModule,
    SharedModule,
    GlobalModule.forRoot(),
    HttpClientModule  
  ],
  providers: [
    //{
    //  provide: HTTP_INTERCEPTORS,
    //  useClass: LoaderInterceptorService,
    //  multi: true
    //},
    //fakeBackendProvider
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
