'use strict';

import {METEOR_PROVIDERS} from 'angular2-meteor';

import {App} from 'ionic/ionic';

export function MeteorApp(args: any={}) {
  return function(cls) {
    args.providers = [].concat(METEOR_PROVIDERS, args.providers || []);
    cls = App(args)(cls);

    let annotations = Reflect.getMetadata('annotations', cls);
    annotations[0].selector = 'app';

    return cls;
  }
}
