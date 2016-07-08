import Ember from 'ember';

export function formatPhone([number]) {
    return number.toString().replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
}

export default Ember.Helper.helper(formatPhone);
