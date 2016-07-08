import { moduleFor, test } from 'ember-qunit';

moduleFor('service:error-message', 'Unit | Service | error message');

test('it can reset', function(assert) {
  let service = this.subject();
  service.set('message', 'Test');
  service.reset();
  assert.notOk(service.get('message'));
});
