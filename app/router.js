import EmberRouter from '@ember/routing/router';
import config from 'data-multiple-unload/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('company-list');
  this.route('home');
});
