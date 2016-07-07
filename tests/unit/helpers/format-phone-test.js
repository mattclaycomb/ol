import { formatPhone } from 'ol/helpers/format-phone';
import { module, test } from 'qunit';

module('Unit | Helper | format phone');

test('it formats 10 digit numbers', function(assert) {
  let result = formatPhone([5125551234]);
  assert.equal(result, '(512) 555-1234');
});
