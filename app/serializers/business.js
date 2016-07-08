import Ember from 'ember';
import RESTSerializer from 'ember-data/serializers/rest';

function queryParamsFromUrl(url) {
    let params = {};
    url.split('?')[1].split('&').forEach(p => {
        let name = p.split('=')[0];
        let value = parseInt(p.split('=')[1]);
        params[name] = value;
    });
    return params;
}

export default RESTSerializer.extend({
    // Ember is expecting the meta data to be in a meta hash,
    // in this API it's in pages
    extractMeta: function(store, typeClass, payload) {
        if (payload && payload.hasOwnProperty('pages')) {
            let meta = payload.pages;
            delete payload.pages;

            // We really only want the page and per_page from the url
            for (var key in meta) {
                meta[key] = queryParamsFromUrl(meta[key]);
            }

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
