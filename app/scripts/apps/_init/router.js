import Marionette from 'backbone.marionette';
import Controller from './controller';

export default class Router extends Marionette.AppRouter {
  constructor(...args) {
    super(...args);
    console.log(this.slug());
  }

  slug() {
    return 'Router';
  }

  get controller() {
    return new Controller({ mainView: this.options.mainView });
  }

  get appRoutes() {
    return {
      '': 'goHome',
      page1: 'goPage1',
    };
  }
}
