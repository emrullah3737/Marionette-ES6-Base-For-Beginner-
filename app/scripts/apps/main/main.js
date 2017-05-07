import Marionette from 'backbone.marionette';
import Template from './main.hbs';

export default class MainView extends Marionette.View {
  constructor(...args) {
    super(...args);
    console.log('Main View');
  }

  get el() {
    return '.wrapper';
  }

  template() {
    return Template;
  }
}
