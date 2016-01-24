'use strict';

import {METEOR_PROVIDERS} from 'angular2-meteor';

import {App, IONIC_DIRECTIVES, ionicProviders, TapClick} from 'ionic/ionic';

import {bootstrap} from 'angular2/platform/browser';

import {Component} from 'angular2/core';

/**
* Simply copy&paste Ionic2 bootstrap decorator to change
* the app selector to 'app' (only way currently) and
* add Meteor providers.
*/
export function MeteorApp(args: any={}) {
  return function(cls) {
    let annotations = Reflect.getMetadata('annotations', cls) || [];

    args.selector = 'app';

    // auto add Ionic directives
    args.directives = args.directives ? args.directives.concat(IONIC_DIRECTIVES) : IONIC_DIRECTIVES;

    // if no template was provided, default so it has a root <ion-nav>
    if (!args.templateUrl && !args.template) {
      args.template = '<ion-nav></ion-nav>';
    }

    // create @Component
    annotations.push(new Component(args));

    // redefine with added annotations
    Reflect.defineMetadata('annotations', annotations, cls);

    // define array of bootstrap providers
    let providers = ionicProviders(args).concat(args.providers || [], METEOR_PROVIDERS);

    bootstrap(cls, providers).then(appRef => {
      appRef.injector.get(TapClick);
    });

    return cls;
  }
}
