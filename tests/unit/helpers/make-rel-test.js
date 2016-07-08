import { makeRel } from 'ol/helpers/make-rel';
import { module, test } from 'qunit';

module('Unit | Helper | make rel');

test('it removes the origin', function(assert) {
    let result1 = makeRel(['http://example.com/business?page=1']);
    let result2 = makeRel(['http://example.com/business/0']);
    assert.equal(result1, '/business?page=1');
    assert.equal(result2, '/business/0');
});
