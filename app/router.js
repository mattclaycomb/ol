import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('businesses', function() {
    this.route('detail', { path: '/:business_id' });
  });
  // the error route isn't intended to be visited directly
  this.route('error');
});

export default Router;
