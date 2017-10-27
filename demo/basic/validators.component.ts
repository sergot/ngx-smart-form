import { Component } from '@angular/core';
import { Validators } from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'validators-demo',
  template: `
    <div>
      <div class="row">
        <div class="col-sm-12">
          <h3>Validators Example</h3>
          <p>This example shows the simpliest form with a simple action onSubmit() and validation of email field.</p>
          <ngx-smart-form [settings]="settings" (onSubmit)="onSubmit($event)"></ngx-smart-form>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <p>Add something using above form to see the result here:</p>
          <p>List of cars: {{ cars | json }}</p>
        </div>
      </div>
    </div>
  `
})
export class ValidatorsComponent {

  cars = [];

  settings = {
    inputs: {
      ownerId: {
        label: 'Owner',
        type: 'select',

        config: {
          select: {
            options: [
              { value: '', text: '- select option -' },
              { value: '1', text: 'Jon Snow' },
              { value: '2', text: 'John Snow' },
            ],
          },
        },
      },
      email: {
        label: 'E-mail',
        type: 'email',
        validators: [Validators.email],
      },
      desc: {
        label: 'Description',
        type: 'textarea',
      },
    },
  };

  constructor() { }

  onSubmit(form) {
    this.cars.push(form);
  }

}
