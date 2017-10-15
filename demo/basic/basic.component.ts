import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'basic-demo',
  template: `
    <div>
      <div class="row">
        <div class="col-sm-12">
          <h3>Basic Example</h3>
          <p>This example shows the simpliest form with a simple action onSubmit().</p>
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
export class BasicComponent {

  cars = [];

  settings = {
    inputs: {
      client: {
        label: 'Owner',
        type: 'text',
      },
      licensePlate: {
        label: 'License Plate',
        type: 'text',
      },
    },

    // XXX: more buttons
    buttons: {
      submit: {
        value: 'Add',
      }
    }
  };

  constructor() { }

  onSubmit(form) {
    this.cars.push(form);
  }

}
