import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('pagination-links', 'Integration | Component | pagination links', {
  integration: true
});

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
  assert.equal($('.nav-next')[0].href, this.get('pages.next'));
  assert.equal($('.nav-last')[0].href, this.get('pages.last'));
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
  assert.equal($('.nav-first')[0].href, this.get('pages.first'));
  assert.equal($('.nav-prev')[0].href, this.get('pages.prev'));
});
