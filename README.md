# Ionic 2

There are two namespaces that become available after package installation: `ionic/ionic` and `ionic2-meteor`.

The former is a core Ionic 2 namespace that contains all Ionic 2 components, which you can find [here](http://ionicframework.com/docs/v2/components/#overview).

The latter has so far one class decorator that glues Meteor and Ionic 2 together.

## Bootstrapping

In order to boostrap your Ionic 2 app, import and apply `MeteorApp` decorator as follows:

```ts

import {MeteorApp} from 'ionic2-meteor';

MeteorApp({
  templateUrl: 'app.html'
})
export class Socially {}

```

## Typings

This package adds two declaration files into the `typings` folder of your app: one for Ionic 2 and one for Ionic2-Meteor.


## Demo

Check out an Ionic 2 demo in the `examples` folder, which's a copy of the Angular 2 Tutorial's [Socially app](https://github.com/Urigo/meteor-angular2.0-socially) built with Ionic2
(except maps).


