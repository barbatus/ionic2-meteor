'use strict';

import {METEOR_PROVIDERS} from 'angular2-meteor';

import {App} from 'ionic/ionic';

export function MeteorApp(args: any={}) {
  return function(cls) {
    args.providers = [].concat(METEOR_PROVIDERS, args.providers || []);
    return App(args)(cls);
  }
}
