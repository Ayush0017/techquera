import React from 'react'
import Menu from './Menu'

import { Switch , Route } from 'react-router-dom'

import Home from './web/Home' 
import Contact from './web/Contact'
import Register from './web/Register'
import Login from './web/Login'
import UserHome from './user/UserHome'
import Query from './user/Query'
import Profile from './user/Profile'
export default class App extends React.Component
{
  render(){
    return <>     	
        
        <Menu/>

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>

          <Route path="/user/home" component={UserHome}/>
          <Route path="/user/query" component={Query}/>
          <Route path="/user/profile" component={Profile}/>
        </Switch>
    </>
  }
}