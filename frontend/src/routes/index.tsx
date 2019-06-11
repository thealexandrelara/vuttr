import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import Home from '../pages/Home'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'

import PrivateRoute from './private'
import GuestRoute from './guest'

function Routes() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <GuestRoute exact path="/login" component={Login} />
        <GuestRoute exact path="/signup" component={SignUp} />
      </Switch>

    </Router>
  )
}

export default Routes
