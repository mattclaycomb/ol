import Ember from 'ember';

// Controllers in ember are eventually going away, but are still necessary for query params
export default Ember.Controller.extend({
    queryParams: ['page', 'per_page'],
    per_page: 50
});
