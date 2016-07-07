import Ember from 'ember';
import { RestSerializer } from 'ember-cli-mirage';
const { underscore } = Ember.String;

export default RestSerializer.extend({
    keyForAttribute(attr) {
        return underscore(attr);
    }
});
