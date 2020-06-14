import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../containers/Contents/Main/Home'
import Promotion from '../containers/Contents/Main/Promotion'
import Profile from '../containers/Contents/Main/Promotion'


export default () => (
    <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/search' component={Promotion} />
    <Route path='/profile' component={Profile} />
</Switch>
  )