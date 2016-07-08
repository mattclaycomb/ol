import Ember from 'ember';

// This is an ancestor route of the other routes,
// so any errors thrown in those routes will propagate to here.
export default Ember.Route.extend({
    errorMessage: Ember.inject.service('error-message'),

    actions: {
        error(error) {
            if (error) {
                // We can't pass anything to the error route here,
                // so we're going set the value on a service, and
                // clear the service when it's read.
                this.set('errorMessage.message', error.errors);
                this.intermediateTransitionTo('error');
            }
        }
    }
});
