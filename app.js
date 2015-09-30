var $ = require('jquery')
var Backbone = require('backbone');
Backbone.$ = $;

var Router = require('./routers/router');
var router = new Router();

Backbone.history.start();
