import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pagination-links', 'Integration | Component | pagination links', {
  integration: true
});

// Unfortunately, the routing service has url generation disabled in integration tests
// so we can't test the urls are correct
test('it disables the first and previous links', function(assert) {
  this.set('pages', {
      next: 'http://example.com/value1',
      last: 'http://example.com/value2'
  });
  this.render(hbs`{{pagination-links pages=pages}}`);

  assert.ok($('.nav-first').hasClass('disabled'));
  assert.ok($('.nav-prev').hasClass('disabled'));
  assert.notOk($('.nav-next').hasClass('disabled'));
  assert.notOk($('.nav-last').hasClass('disabled'));
});

test('it disables the next and last links', function(assert) {
  this.set('pages', {
      first: 'http://example.com/value1',
      prev: 'http://example.com/value2'
  });
  this.render(hbs`{{pagination-links pages=pages}}`);

  assert.notOk($('.nav-first').hasClass('disabled'));
  assert.notOk($('.nav-prev').hasClass('disabled'));
  assert.ok($('.nav-next').hasClass('disabled'));
  assert.ok($('.nav-last').hasClass('disabled'));
});
