import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxSmartFormModule } from '../src';
import { AppComponent } from './app.component';

import { BasicComponent } from './basic/basic.component';
import { ValidatorsComponent } from './basic/validators.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    ValidatorsComponent
  ],
  imports: [BrowserModule, NgxSmartFormModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
