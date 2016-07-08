import Ember from 'ember';

export default Ember.Route.extend({
    errorMessage: Ember.inject.service(),

    setupController(controller) {
        controller.set('message', this.get('errorMessage.message'));

        // Now that we've read the error message, delete it so it won't be displayed again
        this.get('errorMessage').reset();
    }
});
