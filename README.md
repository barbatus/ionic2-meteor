# Ionic 2

There are two namespaces that become available after package installation: `ionic/ionic` and `ionic2-meteor`.

The former is a core Ionic 2 namespace that contains all Ionic 2 components, which you can find [here](http://ionicframework.com/docs/v2/components/#overview).

The latter has so far one class decorator that glues Meteor and Ionic 2 together.

Ionic 2 version - **alpha-56**.

## Bootstrapping

In order to bootstrap your Ionic 2 app, import and apply `MeteorApp` decorator as follows:

```ts

import {MeteorApp} from 'ionic2-meteor';

MeteorApp({
  templateUrl: 'app.html'
})
export class Socially {}

```

## Typings

This package adds two definition files into the `typings` folder of your app: one for Ionic 2 and one for Ionic2-Meteor.

Other typings dependencies that need to be installed: Meteor, ES6-promise and ES6-shim:

````bash
  npm install typings -g

  typings install meteor --ambient

  typings install es6-promise --ambient

  typings install es6-shim --ambient
````

`typings` will create `main.ts` in the _typings_ folder. Add it to the `tsconfig.json` of your app along with Ionic 2 and
Angular2-Meteor definitions:

````json
  {
    "typings": [
      "typings/ionic2-meteor/ionic-framework/ionic.d.ts",
      "typings/ionic2-meteor/ionic2-meteor.d.ts",
      "typings/angular2-meteor/angular2-meteor.d.ts",
      "typings/main.d.ts"
    ]
  }
````

## Demo

Check out an Ionic 2 demo in the `examples` folder, which's a copy of the Angular 2 Tutorial's [Socially app](https://github.com/Urigo/meteor-angular2.0-socially) built with Ionic2
(except maps). 

To run the demo hit `meteor run ios`.


