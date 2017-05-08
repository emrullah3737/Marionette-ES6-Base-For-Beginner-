import Marionette from 'backbone.marionette';
import View from './page2_view';

export default class Controller extends Marionette.Object {

  constructor(...args) {
    super(...args);
    this.region = this.options.mainView.getRegion('pagesRegion');
    this.show();
  }

  show() {
    const view = new View({});
    this.region.show(view);
  }

}
