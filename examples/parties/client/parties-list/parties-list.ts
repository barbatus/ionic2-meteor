import {Page, NavController} from 'ionic/ionic';

import {Parties} from 'collections/parties';

import {PartyDetails} from 'client/party-details/party-details';

import {MeteorComponent} from 'angular2-meteor';

@Page({
    templateUrl: '/client/parties-list/parties-list.html'
})
export class PartiesList extends MeteorComponent {
    parties: Mongo.Cursor<Party>;
    nav: NavController;

    constructor(nav: NavController) {
        super();

        this.nav = nav;

        let options = {
            limit: 10,
            skip: 0
        };
        this.subscribe('parties', options, null, () => {
            this.parties = Parties.find();
        }, true);
    }

    removeParty(party) {
        Parties.remove(party._id);
    }

    navDetails(partyId: number) {
        this.nav.push(PartyDetails, { partyId });
    }
}
