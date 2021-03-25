import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Login from '../pages/Login'
import Home from '../pages/Home'
import Header from '../components/Header'
import Schedule from '../components/Schedule'
import Card from '../components/Card'

const Routes = () => {
  return (
    <Switch>
      {/* <Route Layout={Auth} path="/" exact component={SignIn} /> */}
      <Route path="/login" component={Login} />
      <Route path="/" component={Home} />
      {/* <Route path="/" component={Header} /> */}

      {/* <Route Layout={Dashboard} isPrivate component={NotFound} /> */}
    </Switch>
  )
}

export default Routes
