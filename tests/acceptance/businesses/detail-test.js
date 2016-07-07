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
        find(`a[href='${business.website}']`);
    });
});
