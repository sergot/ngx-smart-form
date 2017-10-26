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
    <div class="container-fluid">
      <div class="row">
        <nav class="col-sm-3 col-md-2 d-none d-sm-block bg-light sidebar">
          <ul class="nav nav-pills flex-column">
            <li class="nav-item">
              <a href="#" class="nav-link" [class.active]="state === ''" (click)="state = ''">Basic</a>
            </li>
            <li class="nav-item">
              <a href="#validators" class="nav-link" [class.active]="state === 'validators'" (click)="state = 'validators'">Validators</a>
            </li>
          </ul>
        </nav>
        <main class="col-sm-9 ml-sm-auto col-md-10 pt-3">
          <basic-demo *ngIf="!state"></basic-demo>
          <validators-demo *ngIf="state === 'validators'"></validators-demo>
        </main>
      </div>
    </div>
  `
})
export class AppComponent {

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

}
