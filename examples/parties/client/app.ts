'use strict';

import {MeteorComponent} from 'angular2-meteor';

import {MeteorApp} from 'ionic2-meteor';

import {Parties} from 'collections/parties';

@MeteorApp({
  templateUrl: '/client/app.html'
})
export class Socially extends MeteorComponent {
  constructor() {
    super();
    this.subscribe('parties', 'Palo Alto');

    this.parties = Parties.find();
  }
}
