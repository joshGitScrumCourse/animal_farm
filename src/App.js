import React, { Component } from 'react';
import Home from './components/pages/Home';
import Pictures from './components/pages/Pictures';
import NotFound from './components/pages/NotFound';

import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/pictures' component={Pictures} />
            <Route component={NotFound}/>
          </Switch>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
