import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Login from '../pages/Login'

const Routes = () => {
  return (
    <Switch>
      {/* <Route Layout={Auth} path="/" exact component={SignIn} /> */}
      <Route path="/" component={Login} />

      {/* <Route Layout={Dashboard} isPrivate component={NotFound} /> */}
    </Switch>
  )
}

export default Routes
