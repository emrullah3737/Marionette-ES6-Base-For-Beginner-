import Marionette from 'backbone.marionette';
import Page1Controller from '../pages/page1/page1_controller';

export default class Controller extends Marionette.Object {
  constructor(...args) {
    super(...args);
    console.log('Router Controller');
    this.obj = this.options.mainView;
  }

  goPage1() {
    console.log('page1');
    new Page1Controller({ mainView: this.obj });
  }

  goHome() {
    console.log('HOME');
  }
}
