import Ember from 'ember';

export function makeRel([url]) {
    if (typeof url !== 'string') {
        return undefined;
    }
    let origin = url.split('/',3).join('/');
    return url.replace(origin, '');
}

export default Ember.Helper.helper(makeRel);
