import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//import forms and http module
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ZomatoRestComponent } from './zomato-rest/zomato-rest.component';

import { InterceptorModule } from './restaurantservice.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    ZomatoRestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    InterceptorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
