import Ember from 'ember';

// the index route should redirect to the businesses listings
export default Ember.Route.extend({
    beforeModel() {
        this.transitionTo('businesses');
    }
});
