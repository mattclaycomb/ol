import Ember from 'ember';

export default Ember.Controller.extend({
    queryParams: ['page', 'per_page'],
    per_page: 50
});
