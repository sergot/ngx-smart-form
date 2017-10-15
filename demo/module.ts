import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxSmartFormModule } from '../src';
import { AppComponent } from './app.component';

import { BasicComponent } from './basic/basic.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent
  ],
  imports: [BrowserModule, NgxSmartFormModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
