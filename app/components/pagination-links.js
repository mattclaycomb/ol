import Ember from 'ember';

export default Ember.Component.extend({
    firstDisabled: Ember.computed.empty('pages.first'),
    prevDisabled: Ember.computed.empty('pages.prev'),
    nextDisabled: Ember.computed.empty('pages.next'),
    lastDisabled: Ember.computed.empty('pages.last')
});
