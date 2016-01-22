import {loadParties} from './load-parties';
import './parties';
import './users';
import 'collections/methods';

Meteor.startup(loadParties);
