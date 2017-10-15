import { Component, ViewEncapsulation } from '@angular/core';
import { Location, LocationStrategy, HashLocationStrategy } from '@angular/common';

@Component({
  selector: 'app-demo',
  styleUrls: [
  ],
  encapsulation: ViewEncapsulation.None,
  providers: [
    Location, {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }
  ],
  template: `
    <div>
      <div>
        <p *ngFor="let c of cars">{{ c.client }} - {{ c.licensePlate }}</p>
      </div>
      <ngx-smart-form [settings]="settings" (onSubmit)="onSubmit($event)"></ngx-smart-form>
    </div>
  `
})
export class AppComponent {
  cars = [];

  settings = {
    inputs: {
      client: {
        label: 'Właściciel',
        type: 'text',
      },
      licensePlate: {
        label: 'Rejestracja',
        type: 'text',
      },
    },

    // XXX: more buttons
    buttons: {
      submit: {
        value: 'Wyślij',
      }
    }
  };

  get state() {
    return window.state;
  }

  set state(state) {
    window.state = state;
  }

  version: string = APP_VERSION;

  constructor(location: Location) {
    this.state = location.path(true);
  }

  onSubmit(form) {
    this.cars.push(form);
  }

}
