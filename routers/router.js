var $ = require('jquery')
var Backbone = require('backbone')
Backbone.$ = $;


var React = require('react')

var Todos = require('./../collections/todos')

var Base = require('./../components/base.js')

var TodosComponent = require('./../components/todos')
var TodoComponent = require('./../components/todo')
var HomeComponent = require('./../components/home')

module.exports = Backbone.Router.extend({

  routes: {
    "": "home",
    "todos": "todos",
    "todos/:id": "todo"
  },

  renderReact: function (component) {
    var container = document.getElementById('main-container')
    React.render(
      <Base>{component}</Base>
      , container)
  },

  home: function () {
    var component = <HomeComponent />
    this.renderReact(component)
  },

  todos: function () {
    var todos = new Todos()
    todos.fetch({
      success: function (data) {
        console.log("fetched")
      }
    })
    var component = <TodosComponent todos = {todos} />
    this.renderReact(component)
  },

  todo: function (id) {
    console.log("Launching Todo View")
    var todo = new Todo({id: id})
    todo.fetch({
      success: function (data) {
        console.log("fetched")
      }
    })
    var component = <TodoComponent todo = {todo} />
    this.renderReact(component)
  }
})
