import $ from 'jquery'
import Backbone from 'backbone'
Backbone.$ = $;

import Router from './routers/router'
const router = new Router()

Backbone.history.start()
