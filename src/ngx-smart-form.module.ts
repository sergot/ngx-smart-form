import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import 'rxjs/add/observable/fromEvent';

import {
  SmartFormComponent
} from './components';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
  ],
  declarations: [
    SmartFormComponent
  ],
  exports: [
    SmartFormComponent
  ]
})
export class NgxSmartFormModule { }
