import { Component, Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dynamic-demo',
  template: `
    <div>
      <div class="row">
        <div class="col-sm-12">
          <h3>Dynamic Example</h3>
          <p>This example shows the simpliest form with a simple action onSubmit() and dynamic options for select.</p>
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
export class DynamicComponent {

  cars = [];
  owners = [];

  settings = {};

  constructor() {
    // this.owners = [
    //   { value: '', text: '- select option -' },
    //   { value: '1', text: 'Jon Snow' },
    //   { value: '2', text: 'John Snow' },
    // ];
    this.getOwners().subscribe(o => {
      this.owners = o;
      this.settings = this.loadSettings();
    });
  }

  loadSettings() {
    return {
      inputs: {
        ownerId: {
          label: 'Owner',
          type: 'select',

          config: {
            select: {
              options: this.owners,
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
  }

  onSubmit(form) {
    this.cars.push(form);
  }

  getOwners(): Observable<object[]> {
    return Observable.of([
      { value: '', text: '- select option -' },
      { value: '1', text: 'Jon Snow' },
      { value: '2', text: 'John Snow' },
    ]);
  }
}
