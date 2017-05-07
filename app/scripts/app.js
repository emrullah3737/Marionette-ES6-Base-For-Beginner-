import Marionette from 'backbone.marionette';
import Backbone from 'backbone';
import MainLayoutView from './apps/main/main';
import Router from './apps/_init/router';

// Create our Application
const app = new Marionette.Application();

// Start history when our application is ready
app.on('start', () => {
  const opts = {
    pushState: false,
  };
  console.log('App started');
  const options = {
    regions: {
      homeRegion: '.home',
      page1Region: '.page1',
    },
  };
  const mainView = new MainLayoutView(options);
  mainView.render();
  new Router({ mainView });

  Backbone.history.start(opts);
});

app.start();
