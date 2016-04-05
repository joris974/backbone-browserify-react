import Backbone from 'backbone'

import React from 'react'
import ReactDOM from 'react-dom'

import Todos from './../collections/todos'
import Todo from './../models/todo'

// Components
import Base             from './../components/Base.js'
import TodosComponent             from './../components/Todos'
import TodoComponent              from './../components/Todo'
import HomeComponent              from './../components/Home'

const Router = Backbone.Router.extend({

  routes: {
    "": "home",
    "todos": "todos",
    "todos/:id": "todo"
  },

  renderReact: component => {
    const container = document.getElementById('main-container')
    ReactDOM.render(
      <Base>{component}</Base>
      , container)
  },

  home: function() {
    const component = <HomeComponent />
    this.renderReact(component)
  },

  todos: function() {
    const todos = new Todos()
    const component = <TodosComponent todos = {todos} />
    this.renderReact(component)
  },

  todo: function(id) {
    console.log("Launching Todo View")
    const todo = new Todo({id: id})
    todo.fetch({
      success: function (data) {
        console.log("fetched")
      }
    })
    const component = <TodoComponent todo = {todo} />
    this.renderReact(component)
  }
})

export default Router
