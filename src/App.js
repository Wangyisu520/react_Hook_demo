import React from 'react';
import { BrowserRouter as Router, Switch, Route,Redirect  } from 'react-router-dom'
import './App.css';
import Navbar from './components/layout/Navbar'
import User from './components/users/User'
import Alert from './components/layout/Aleat'
import About from './components/pages/About'
import Home from './components/pages/Home'

import AlertState from './context/alert/alertState'
import GithubState from './context/github/githubState'

const App = () => {

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} /> 
                <Redirect from="/*" to='/' />
              </Switch>
            </div>

          </div>
        </Router>
      </AlertState>
    </GithubState>
  );


}

export default App;
