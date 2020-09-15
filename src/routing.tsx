import React, { Suspense, lazy } from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import AuthRoute from 'components/AuthRoute'
import ProtectedRoute from 'components/ProtectedRoute'

const Settings = lazy(() => import('pages/settings'))
const Index = lazy(() => import('pages/index'))
const About = lazy(() => import('pages/about'))
const Login = lazy(() => import('pages/login'))

export default function Routing() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/">
            <Index />
          </Route>
          <Route path="/login">
            <AuthRoute>
              <Login />
            </AuthRoute>
          </Route>

          <Route path="/signup">
            <AuthRoute>
              <div>Register</div>
            </AuthRoute>
          </Route>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/settings">
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          </Route>
        </Switch>
      </Suspense>
    </Router>
  )
}
