import React from 'react'
import ReactDOM from 'react-dom'
import { hashHistory, Router, Route, IndexRoute } from 'react-router'

// Components
import BaseComponent from './components/Base.js'
import HomeComponent from './components/Home'
import AboutComponent from './components/About'
import NotFoundComponent from './components/Home'

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={BaseComponent}>
      <IndexRoute component={HomeComponent} />
      <Route path="about" component={AboutComponent}/>
      <Route path="*" component={NotFoundComponent}/>
    </Route>
  </Router>
), document.getElementById('main-container'))
