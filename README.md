# ngx-smart-form

[![Join the chat at https://gitter.im/ngx-smart-form/Lobby](https://badges.gitter.im/ngx-smart-form/Lobby.svg)](https://gitter.im/ngx-smart-form/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![Maintainability](https://api.codeclimate.com/v1/badges/7dc4d76f7186b0c1122b/maintainability)](https://codeclimate.com/github/sergot/ngx-smart-form/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/7dc4d76f7186b0c1122b/test_coverage)](https://codeclimate.com/github/sergot/ngx-smart-form/test_coverage)
[![Build Status](https://travis-ci.org/sergot/ngx-smart-form.svg?branch=master)](https://travis-ci.org/sergot/ngx-smart-form)

ngx-smart-form is an Angular module for generating forms in your application.

# Features

- generates correct angular form based on provided settings
- ...

# Installation

    npm install --save-dev ngx-smart-form

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
- generating forms based on passed model

# TODOs

- Docs
- Ghpages - better example site
- E2E tests - protractor

## Thanks to

Thanks to [swimlane/ngx-datatable](https://github.com/swimlane/ngx-datatable/),
I used this repo as a point of start to create an angular2+ module.