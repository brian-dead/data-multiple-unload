import { module, test } from 'qunit';

import { setupTest } from 'data-multiple-unload/tests/helpers';

module('Unit | Model | company', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('company', {});
    assert.ok(model);
  });
});
