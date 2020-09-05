import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Index from 'pages/index'
import About from 'pages/about'
import Login from 'pages/login'

export default function Routing() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Index />
        </Route>
        <Route path="/login">
          <Login />
        </Route>

        <Route path="/login">
          <div>Register</div>
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Router>
  )
}
