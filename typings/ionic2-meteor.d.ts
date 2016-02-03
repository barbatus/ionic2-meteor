/// <reference path="../angular2/angular2" />
/// <reference path="ionic-framework/ionic" />

declare module 'ionic2-meteor' {
  export function MeteorApp(args?: {}): (cls: core.Type) => any;
}
