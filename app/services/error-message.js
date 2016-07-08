import Ember from 'ember';

// There is no good way of getting the error from the adapter into the error route.
// This service is a holding spot for these error messages
export default Ember.Service.extend({
    message: null,

    reset() {
        this.set('message', null);
    }
});
