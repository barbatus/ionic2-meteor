/// <reference path='typings/tsd.d.ts' />
/// by corre.pw
///Counts.d.ts for https://atmospherejs.com/tmeasday/publish-counts
interface ICountOptions<T> {
    /** If you publish a count within a publication that also returns cursor(s), you probably want to pass {noReady: true} */
    noReady?: boolean;
    /** If you specify {nonReactive: true} the cursor won't be observed and only the initial count will be sent on initially subscribing. */
    nonReactive?: boolean;
    /** Pass the option, noWarnings: true, to Counts.publish to disable its warnings in
     a development environment. */
    noWarnings?: boolean;
    /** countFromField allows you to specify a field to calculate the sum of its numbers across all documents. */
    countFromField?: (string | ((doc: T) => number));
    /** countFromFieldLength allows you to specify a field to calculate the sum of its length across all documents. */
    countFromFieldLength?: (string | ((doc: T) => { length: number }));
}
interface ICountsPublisFn {
    <T>(/** Meteor subscription */
        currentSubscription: Subscription,
        /** Counter-name for identify counter on client */
        counterName: string,
        /** Cursor for count */
        cursor: Mongo.Cursor<T>,
        /**  */
        options?: ICountOptions<T>): { stop: () => void };
    /** This function disables all development warnings on the server from publish-counts. */
    noWarnings: () => void;
}
interface ICountsServerSide {
    /**Server only function */
    publish: ICountsPublisFn;
}

interface ICountsClientSide extends Mongo.Collection<{ _id: string, count: number }> {
    /**client side only */
    get: (name: string) => number;
    /**client side only */
    has: (name: string) => boolean;
}

interface ICounts extends ICountsServerSide, ICountsClientSide { }

declare var Counts: ICounts