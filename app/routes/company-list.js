import { action } from '@ember/object';
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class CompanyListRoute extends Route {
  @service store;

  model() {
    this.store.push({
      data: [
        {
          type: 'company',
          id: '1',
          attributes: {
            name: 'Amazon'
          }
        },
        {
          type: 'company',
          id: '2',
          attributes: {
            name: 'Google'
          }
        }
      ]
    });

    return this.store.peekAll('company');
  }

  @action
  willTransition() {
    this.store.unloadAll('company');
  }
}
