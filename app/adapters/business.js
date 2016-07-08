import RESTAdapter from 'ember-data/adapters/rest';

export default RESTAdapter.extend({
    // This is necessary config for CORS models,
    // in a larger project, this would be specified in a parent class
    host: 'http://ec2-54-84-251-148.compute-1.amazonaws.com',

    ajax(url, method, hash) {
        hash.crossDomain = true;
        hash.xhrFields = { withCredentials: true };
        return this._super(url, method, hash);
    },

    // The api is returning errors with 200 status codes, if the response container error,
    // it should be an adapter error
    isSuccess(status, header, payload) {
        return !payload.hasOwnProperty('error') && this._super(status, header, payload);
    },

    // Ember is expecting our error in to be errors, but it is in error instead
    normalizeErrorResponse(status, headers, payload) {
        return payload.error;
    }
});
