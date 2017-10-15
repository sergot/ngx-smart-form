import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxSmartFormModule } from '../src';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [BrowserModule, NgxSmartFormModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
