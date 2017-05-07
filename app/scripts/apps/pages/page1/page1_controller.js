import Marionette from 'backbone.marionette';
import View from './page1_view';

export default class Page1Controller extends Marionette.Object {

  constructor(...args) {
    super(...args);
    this.region = this.options.mainView.getRegion('page1Region');
    this.show();
  }

  show() {
    const view = new View({});
    this.region.show(view);
  }

}
