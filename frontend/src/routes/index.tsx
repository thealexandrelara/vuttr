import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import Home from '../pages/Home'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>

    </Router>
  )
}

export default Routes
