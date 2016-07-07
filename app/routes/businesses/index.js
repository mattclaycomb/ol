import Ember from 'ember';

export default Ember.Route.extend({
    // When page changes, causes the model hook to rerun,
    // updating the businesses/pages in the template
    queryParams: {
        page: { refreshModel: true },
        per_page: { refreshModel: true }
    },

    model(params) {
        return this.store.query('business', params);
    },

    setupController(controller, model) {
        controller.set('businesses', model);
    },

    actions: {
        error(error) {
            if (error) {
                this.transitionTo('error');
            }
        }
    }
});
