import {Page, NavController} from 'ionic/ionic';

import {FormBuilder, Control, ControlGroup, Validators} from 'angular2/common';

import {Parties} from 'collections/parties';

@Page({
    templateUrl: '/client/party-form/party-form.html'
})
export class PartyForm {
    partiesForm: ControlGroup;
    nav: NavController;

    constructor(nav: NavController) {
        this.nav = nav;
        var fb = new FormBuilder();
        this.partiesForm = fb.group({
            name: ['', Validators.required],
            description: [''],
            location: ['', Validators.required],
            public: [false]
        });
    }

    addParty(party) {
        if (this.partiesForm.valid) {
            if (Meteor.userId()) {
                Parties.insert({
                    name: party.name,
                    description: party.description,
                    location: party.location,
                    public: party.public,
                    owner: Meteor.userId()
                }, () => {
                    this.nav.pop();
                });

                (<Control>this.partiesForm.controls['name']).updateValue('');
                (<Control>this.partiesForm.controls['description']).updateValue('');
                (<Control>this.partiesForm.controls['location']).updateValue('');
                (<Control>this.partiesForm.controls['public']).updateValue(false);
            } else {
                alert('Please log in to add a party');
            }
        }
    }
}
