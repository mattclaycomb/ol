import RESTAdapter from 'ember-data/adapters/rest';

export default RESTAdapter.extend({
    // This is necessary config for CORS models,
    // in a larger project, this would be specified in a parent class
    // host: 'http://ec2-54-84-251-148.compute-1.amazonaws.com',
    // ajax: function(url, method, hash) {
    //     hash.crossDomain = true;
    //     hash.xhrFields = { withCredentials: true };
    //     return this._super(url, method, hash);
    // }
});
