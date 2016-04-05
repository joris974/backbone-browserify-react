import Backbone from 'backbone'
import Todo from './../models/todo'

const TodoCollection = Backbone.Collection.extend({
  model: Todo,
  url: "RESOURCE"
})

export default TodoCollection
