import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return this.store.findRecord('business', params.business_id);
    },

    setupController(controller, model) {
        controller.set('business', model);
    }
});
