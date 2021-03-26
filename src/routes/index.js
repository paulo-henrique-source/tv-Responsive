import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from '../pages/Login'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/home" exact component={Home} />
      <Route component={NotFound} />

      {/* <Route Layout={Dashboard} isPrivate component={NotFound} /> */}
    </Switch>
  )
}

export default Routes
