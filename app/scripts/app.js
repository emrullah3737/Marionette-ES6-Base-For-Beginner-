import Marionette from 'backbone.marionette';
import Backbone from 'backbone';

// Create our Application
const app = new Marionette.Application();

// Start history when our application is ready
app.on('start', () => {
  Backbone.history.start();
  console.log('App started');
});

app.start();
