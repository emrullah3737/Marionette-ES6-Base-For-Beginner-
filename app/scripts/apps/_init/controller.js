import Marionette from 'backbone.marionette';
import Page1Controller from '../pages/page1/page1_controller';
import Page2Controller from '../pages/page2/page2_controller';

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

  goPage2() {
    console.log('page2');
    new Page2Controller({ mainView: this.obj });
  }
}
