import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngx-smart-form',
  templateUrl: './smart-form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  // encapsulation: ViewEncapsulation.None,
  styleUrls: ['./smart-form.component.scss'],
  // host: {
  //   class: 'ngx-smart-form'
  // }
})
export class SmartFormComponent implements OnInit {
  @Input() settings: any;

  @Output() onSubmit = new EventEmitter<any>();

  inputs: any[] = [];

  smartForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.smartForm = this.formBuilder.group({});

    for (const name in this.settings.inputs) {
      if (this.settings.inputs.hasOwnProperty(name)) {
        const input = this.settings.inputs[name];
        input.name = name;
        this.inputs.push(input);
        this.smartForm.addControl(input.name, new FormControl());
      }
    }
  }

  callOnSubmit() {
    this.onSubmit.emit(this.smartForm.value);
  }
}
