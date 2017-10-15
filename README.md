# ngx-smart-form

[![Maintainability](https://api.codeclimate.com/v1/badges/7dc4d76f7186b0c1122b/maintainability)](https://codeclimate.com/github/sergot/ngx-smart-form/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/7dc4d76f7186b0c1122b/test_coverage)](https://codeclimate.com/github/sergot/ngx-smart-form/test_coverage)
[![Build Status](https://travis-ci.org/sergot/ngx-smart-form.svg?branch=master)](https://travis-ci.org/sergot/ngx-smart-form)

ngx-smart-form is an Angular module for generating forms in your application.

# Features

- generates correct angular form based on provided settings
- ...

# Usage

    <ngx-smart-form [settings]="settings" (onSubmit)="onSubmit($event)"></ngx-smart-form>

Where settings look like:

    settings = {
      inputs: {
        field: {
          label: 'Field',
          type: 'text',
        },
      },
    }

and onSubmit:

    onSubmit(form) {
      this.items.push(form);
    }

# Future features

- custom classes
- custom buttons

# TODOs

- Docs
- Ghpages - better example site
- E2E tests - protractor

## Thanks to

Thanks to [swimlane/ngx-datatable](https://github.com/swimlane/ngx-datatable/),
I used this repo as a point of start to create an angular2+ module.