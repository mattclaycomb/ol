import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
    uuid: attr('string'),
    name: attr('string'),
    address: attr('string'),
    address2: attr('string'),
    city: attr('string'),
    state: attr('string'),
    zip: attr('number'),
    country: attr('string'),
    phone: attr('number'),
    website: attr('string'),
    createdAt: attr('date')
});
