import { module, test } from 'qunit';
import { setupTest } from 'data-multiple-unload/tests/helpers';

module('Unit | Route | company-list', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:company-list');
    assert.ok(route);
  });
});
