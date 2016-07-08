define('ol/tests/acceptance/businesses/detail-test', ['exports', 'qunit', 'ol/tests/helpers/module-for-acceptance'], function (exports, _qunit, _olTestsHelpersModuleForAcceptance) {

    var business;

    (0, _olTestsHelpersModuleForAcceptance['default'])('Acceptance | businesses/detail', {
        beforeEach: function beforeEach() {
            business = server.create('business');
        }
    });

    (0, _qunit.test)('visiting first business', function (assert) {
        visit('/businesses/1');

        andThen(function () {
            assert.equal(currentURL(), '/businesses/1');
            // No need to test for other properties presence,
            // they're all passed in the same way
            find('a[href=\'' + business.website + '\']');
        });
    });

    (0, _qunit.test)('visiting business that does not exist', function (assert) {
        visit('/businesses/-1');

        andThen(function () {
            assert.equal($('.error-message').text().trim(), 'Business with ID -1 not found');
        });
    });
});
define('ol/tests/acceptance/businesses/detail-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | acceptance/businesses/detail-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/businesses/detail-test.js should pass jshint.');
  });
});
define('ol/tests/acceptance/businesses/index-test', ['exports', 'qunit', 'ol/tests/helpers/module-for-acceptance'], function (exports, _qunit, _olTestsHelpersModuleForAcceptance) {

  (0, _olTestsHelpersModuleForAcceptance['default'])('Acceptance | businesses/index', {
    beforeEach: function beforeEach() {
      server.createList('business', 400);
    }
  });

  (0, _qunit.test)('visiting /businesses', function (assert) {
    visit('/businesses');

    andThen(function () {
      assert.equal(currentURL(), '/businesses');
      // First and previous should be disabled
      find('.nav-first.disabled');
      find('.nav-prev.disabled');
      // Default is 50 rows
      assert.equal($('.business-row').length, 50);
      assert.equal($('.business-row:last-child td:first-child').text().trim(), '50');
    });
  });

  (0, _qunit.test)('can load second page', function (assert) {
    visit('/businesses');
    click('.nav-next');

    andThen(function () {
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

  (0, _qunit.test)('it can load just 25 businesses per page', function (assert) {
    visit('/businesses');
    fillIn('select', '25');

    andThen(function () {
      assert.equal(currentURL(), '/businesses?per_page=25');

      assert.equal($('.business-row').length, 25);
      assert.equal($('.business-row:last-child td:first-child').text().trim(), '25');
    });
  });

  (0, _qunit.test)('last page has next and last disabled', function (assert) {
    visit('/businesses?page=8');

    andThen(function () {
      assert.notOk(find('.nav-first').hasClass('disabled'));
      assert.notOk(find('.nav-prev').hasClass('disabled'));
      assert.ok(find('.nav-next').hasClass('disabled'));
      assert.ok(find('.nav-last').hasClass('disabled'));
    });
  });
});
define('ol/tests/acceptance/businesses/index-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | acceptance/businesses/index-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/businesses/index-test.js should pass jshint.');
  });
});
define('ol/tests/adapters/business.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | adapters/business.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/business.js should pass jshint.');
  });
});
define('ol/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('ol/tests/components/pagination-links.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/pagination-links.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/pagination-links.js should pass jshint.');
  });
});
define('ol/tests/controllers/business/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/business/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/business/index.js should pass jshint.');
  });
});
define('ol/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
    server.shutdown();
  }
});
define('ol/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('ol/tests/helpers/format-phone.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/format-phone.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/format-phone.js should pass jshint.');
  });
});
define('ol/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'ol/tests/helpers/start-app', 'ol/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _olTestsHelpersStartApp, _olTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _olTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _olTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('ol/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('ol/tests/helpers/resolver', ['exports', 'ol/resolver', 'ol/config/environment'], function (exports, _olResolver, _olConfigEnvironment) {

  var resolver = _olResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _olConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _olConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('ol/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('ol/tests/helpers/start-app', ['exports', 'ember', 'ol/app', 'ol/config/environment'], function (exports, _ember, _olApp, _olConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _olConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _olApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('ol/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('ol/tests/integration/components/pagination-links-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('pagination-links', 'Integration | Component | pagination links', {
    integration: true
  });

  // Unfortunately, the routing service has url generation disabled in integration tests
  // so we can't test the urls are correct
  (0, _emberQunit.test)('it disables the first and previous links', function (assert) {
    this.set('pages', {
      next: 'http://example.com/value1',
      last: 'http://example.com/value2'
    });
    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 32
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'pagination-links', [], ['pages', ['subexpr', '@mut', [['get', 'pages', ['loc', [null, [1, 25], [1, 30]]]]], [], []]], ['loc', [null, [1, 0], [1, 32]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.ok($('.nav-first').hasClass('disabled'));
    assert.ok($('.nav-prev').hasClass('disabled'));
    assert.notOk($('.nav-next').hasClass('disabled'));
    assert.notOk($('.nav-last').hasClass('disabled'));
  });

  (0, _emberQunit.test)('it disables the next and last links', function (assert) {
    this.set('pages', {
      first: 'http://example.com/value1',
      prev: 'http://example.com/value2'
    });
    this.render(Ember.HTMLBars.template((function () {
      return {
        meta: {
          'fragmentReason': {
            'name': 'missing-wrapper',
            'problems': ['wrong-type']
          },
          'revision': 'Ember@2.6.1',
          'loc': {
            'source': null,
            'start': {
              'line': 1,
              'column': 0
            },
            'end': {
              'line': 1,
              'column': 32
            }
          }
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment('');
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [['inline', 'pagination-links', [], ['pages', ['subexpr', '@mut', [['get', 'pages', ['loc', [null, [1, 25], [1, 30]]]]], [], []]], ['loc', [null, [1, 0], [1, 32]]]]],
        locals: [],
        templates: []
      };
    })()));

    assert.notOk($('.nav-first').hasClass('disabled'));
    assert.notOk($('.nav-prev').hasClass('disabled'));
    assert.ok($('.nav-next').hasClass('disabled'));
    assert.ok($('.nav-last').hasClass('disabled'));
  });
});
define('ol/tests/integration/components/pagination-links-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | integration/components/pagination-links-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/pagination-links-test.js should pass jshint.');
  });
});
define('ol/tests/models/business.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/business.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/business.js should pass jshint.');
  });
});
define('ol/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('ol/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('ol/tests/routes/businesses/detail.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/businesses/detail.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/businesses/detail.js should pass jshint.');
  });
});
define('ol/tests/routes/businesses/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/businesses/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/businesses/index.js should pass jshint.');
  });
});
define('ol/tests/routes/businesses.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/businesses.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/businesses.js should pass jshint.');
  });
});
define('ol/tests/routes/error.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/error.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/error.js should pass jshint.');
  });
});
define('ol/tests/routes/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass jshint.');
  });
});
define('ol/tests/serializers/business.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | serializers/business.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'serializers/business.js should pass jshint.');
  });
});
define('ol/tests/services/error-message.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | services/error-message.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/error-message.js should pass jshint.');
  });
});
define('ol/tests/test-helper', ['exports', 'ol/tests/helpers/resolver', 'ember-qunit'], function (exports, _olTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_olTestsHelpersResolver['default']);
});
define('ol/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('ol/tests/unit/helpers/format-phone-test', ['exports', 'ol/helpers/format-phone', 'qunit'], function (exports, _olHelpersFormatPhone, _qunit) {

  (0, _qunit.module)('Unit | Helper | format phone');

  (0, _qunit.test)('it formats 10 digit numbers', function (assert) {
    var result = (0, _olHelpersFormatPhone.formatPhone)([5125551234]);
    assert.equal(result, '(512) 555-1234');
  });
});
define('ol/tests/unit/helpers/format-phone-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/helpers/format-phone-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/format-phone-test.js should pass jshint.');
  });
});
define('ol/tests/unit/services/error-message-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('service:error-message', 'Unit | Service | error message');

  (0, _emberQunit.test)('it can reset', function (assert) {
    var service = this.subject();
    service.set('message', 'Test');
    service.reset();
    assert.notOk(service.get('message'));
  });
});
define('ol/tests/unit/services/error-message-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/services/error-message-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/error-message-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('ol/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map