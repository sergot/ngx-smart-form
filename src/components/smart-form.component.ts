import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import { NgxSmartFormSettings, NgxSmartFormInput } from '../interfaces';

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
  @Input() settings: NgxSmartFormSettings;

  @Output() onSubmit = new EventEmitter<any>();

  inputs: NgxSmartFormInput[] = [];

  smartForm: FormGroup;

  // XXX: add custom classes
  defaultSettings: NgxSmartFormSettings = {
    // XXX: should we have default values here?
    inputs: {},

    // XXX: add custom buttons
    buttons: {
      submit: {
        value: 'Submit',
      },
    },
  };

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.settings = this.extendObject(this.settings, this.defaultSettings);

    this.smartForm = this.formBuilder.group({});

    for (const name in this.settings.inputs) {
      if (this.settings.inputs.hasOwnProperty(name)) {
        const input = this.settings.inputs[name];
        input.name = name;
        this.inputs.push(input);

        // XXX: allow default value (forms that edit an object)
        this.smartForm.addControl(input.name, new FormControl(null, input.validators));
      }
    }
  }

  callOnSubmit() {
    this.onSubmit.emit(this.smartForm.value);
  }

  // XXX: this should be more advanced
  private extendObject(dest: NgxSmartFormSettings, source: NgxSmartFormSettings): NgxSmartFormSettings {
    if (!dest.inputs) {
      dest.inputs = source.inputs;
    }
    // XXX: do we want to force input types?
    // else {
    //   for (const name in dest) {
    //     if (dest.hasOwnProperty(name)) {
    //       var element = dest[name];
    //       if (!element.type) {
    //         element.type = 'text';
    //       }
    //       if (!element.label) {
    //         element.label = name;
    //       }
    //     }
    //   }
    // }

    if (!dest.buttons) {
      dest.buttons = source.buttons;
    }

    return dest;
  }
}
