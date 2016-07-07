import Ember from 'ember';
import RESTSerializer from 'ember-data/serializers/rest';

export default RESTSerializer.extend({
    // Ember is expecting the meta data to be in a meta hash,
    // in this API it's in pages
    extractMeta: function(store, typeClass, payload) {
        if (payload && payload.hasOwnProperty('pages')) {
            let meta = payload.pages;
            delete payload.pages;
            return meta;
        }
    },

    // Our data source uses underscores
    keyForAttribute: function(attr) {
        return Ember.String.underscore(attr);
    },

    // Ember is expecting the response to be wrapped with the model name,
    // manually setting it
    normalizeFindRecordResponse(store, primaryModelClass, payload, id, requestType) {
        return this._super(store, primaryModelClass, { business: payload }, id, requestType);
    }
});
