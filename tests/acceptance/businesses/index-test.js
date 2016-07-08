import { test } from 'qunit';
import moduleForAcceptance from 'ol/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | businesses/index', {
    beforeEach() {
        server.createList('business', 400);
    }
});

test('visiting /businesses', function(assert) {
  visit('/businesses');

  andThen(function() {
    assert.equal(currentURL(), '/businesses');
    // First and previous should be disabled
    find('.nav-first.disabled');
    find('.nav-prev.disabled');
    // Default is 50 rows
    assert.equal($('.business-row').length, 50);
    assert.equal($('.business-row:last-child td:first-child').text().trim(), '50');
  });
});

test('can load second page', function(assert) {
  visit('/businesses');
  click('.nav-next');

  andThen(function() {
    assert.equal(currentURL(), '/businesses?page=2');
    // All navigation links should be enabled
    assert.notOk(find('.nav-first').hasClass('disabled'));
    assert.notOk(find('.nav-prev').hasClass('disabled'));
    assert.notOk(find('.nav-next').hasClass('disabled'));
    assert.notOk(find('.nav-last').hasClass('disabled'));
    assert.equal($('.business-row').length, 50);
    assert.equal($('.business-row:first-child td:first-child').text().trim(), '51');
  });
});

test('it can load just 25 businesses per page', function(assert) {
  visit('/businesses');
  fillIn('select', '25');

  andThen(function() {
    assert.equal(currentURL(), '/businesses?per_page=25');

    assert.equal($('.business-row').length, 25);
    assert.equal($('.business-row:last-child td:first-child').text().trim(), '25');
  });
});

test('last page has next and last disabled', function(assert) {
    visit('/businesses?page=8');

    andThen(function() {
        assert.notOk(find('.nav-first').hasClass('disabled'));
        assert.notOk(find('.nav-prev').hasClass('disabled'));
        assert.ok(find('.nav-next').hasClass('disabled'));
        assert.ok(find('.nav-last').hasClass('disabled'));
    });
});
