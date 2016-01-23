
import {Type} from 'angular2/core';

import {Page, NavController} from 'ionic/ionic';

import {Parties} from 'collections/parties';

import {PartyDetails} from 'client/party-details/party-details';

import {MeteorComponent} from 'angular2-meteor';

import {InjectUser} from 'meteor-accounts';

@Page({
    templateUrl: '/client/parties-list/parties-list.html'
})
@InjectUser()
export class PartiesList extends MeteorComponent {
    parties: Mongo.Cursor<Party>;
    partyDetails: Type;
    pageSize: number = 10;
    curPage: ReactiveVar<number> = new ReactiveVar<number>(1);
    nameOrder: ReactiveVar<number> = new ReactiveVar<number>(1);
    partiesSize: number = 0;
    location: ReactiveVar<string> = new ReactiveVar<string>(null);
    user: Meteor.User;

    constructor() {
        super();

        this.partyDetails = PartyDetails;

        this.autorun(() => {
            let options = {
                limit: this.pageSize,
                skip: (this.curPage.get() - 1) * this.pageSize,
                sort: { name: this.nameOrder.get() }
            };
            this.subscribe('parties', options, this.location.get(), () => {
                this.parties = Parties.find({}, { sort: { name: this.nameOrder.get() } });
            }, true);
        });

        this.autorun(() => {
            this.partiesSize = Counts.get('numberOfParties');
        }, true);
    }

    removeParty(party) {
        Parties.remove(party._id);
    }

    isOwner(party: Party): boolean {
        if (this.user) {
            return this.user._id === party.owner;
        }

        return false;
    }
}
