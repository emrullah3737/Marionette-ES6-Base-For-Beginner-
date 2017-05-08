import Marionette from 'backbone.marionette';
import Template from './page2_template.hbs';

export default class View extends Marionette.View {

  constructor(...args) {
    super(...args);
  }
  get template() {
    return Template;
  }

  serializeData() {
    return {
      data: 'data returned',
    };
  }
}
