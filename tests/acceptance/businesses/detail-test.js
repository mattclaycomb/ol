import { test } from 'qunit';
import moduleForAcceptance from 'ol/tests/helpers/module-for-acceptance';

var business;

moduleForAcceptance('Acceptance | businesses/detail', {
    beforeEach() {
        business = server.create('business');
    }
});

test('visiting first business', function(assert) {
    visit('/businesses/1');

    andThen(function() {
        assert.equal(currentURL(), '/businesses/1');
        // No need to test for other properties presence,
        // they're all passed in the same way
        find(`a[href='${business.website}']`);
    });
});

test('visiting business that does not exist', function(assert) {
    visit('/businesses/-1');

    andThen(function() {
        assert.equal($('.error-message').text().trim(), 'Business with ID -1 not found');
    });
});
