'use strict';

import {Type} from 'angular2/core';

import {MeteorComponent} from 'angular2-meteor';

import {MeteorApp} from 'ionic2-meteor';

import {IonicApp} from 'ionic/ionic';

import {Parties} from 'collections/parties';

import {PartiesList} from 'client/parties-list/parties-list';

import {Login} from 'client/login/login';

import {PartyForm} from 'client/party-form/party-form';

@MeteorApp({
  templateUrl: '/client/app.html'
})
export class Socially {
    partiesList: Type;
    login; Type;
    partyForm: Type;
    app: IonicApp;

    constructor(app: IonicApp) {
        this.app = app;
        this.login = Login;
        this.partyForm = PartyForm;
        this.partiesList = PartiesList;
    }

    openPage(page) {
        this.app.getComponent('leftMenu').close();

        let nav = this.app.getComponent('nav');
        nav.push(page);
    }
}
