import React from 'react'
import { Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Login from '../pages/Login'
import SignUp from '../pages/SignUp'

import PrivateRoute from './private'
import GuestRoute from './guest'

function Routes() {
  return (
    <>
      <Switch>
        <GuestRoute exact path="/login" component={Login} />
        <GuestRoute exact path="/signup" component={SignUp} />
        <PrivateRoute exact path="/" component={Home} />
      </Switch>

    </>
  )
}

export default Routes
