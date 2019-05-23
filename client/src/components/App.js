import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Dashboard from '../pages/Dashboard'
import Navigation from './navigation/Navigation'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Navigation />
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <Route path='/dashboard' component={Dashboard} />
        </Switch>
      </div>   
      </BrowserRouter>
    );
  }
}

export default App;
