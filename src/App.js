import React, { Component } from 'react';
import Home from './components/pages/Home';
import Pictures from './components/pages/Pictures';
import NotFound from './components/pages/NotFound';
import DietInformation from './components/pages/DietInformation';
import MatingReproduction from './components/pages/MatingReproduction';
import HabitatInformation from './components/pages/HabitatInformation';
import BiologyInformation from './components/pages/BiologyInformation';
import Scientific from './components/pages/Scientific';
import Appbar from './components/AppBar';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      currentTheme:"dark",
        theme: getMuiTheme(darkBaseTheme)
    };
    this.changeTheme = this.changeTheme.bind(this);
  }

  changeTheme(){
    switch(this.state.currentTheme){
        case "light":
          this.setState({theme: getMuiTheme(darkBaseTheme), currentTheme:"dark" });
            break;
        case "dark":
            this.setState({theme: getMuiTheme(lightBaseTheme), currentTheme:"light" });
            break;
        default:
            this.setState({theme: getMuiTheme(darkBaseTheme), currentTheme:"dark" });
    }
  }

  render() {
    return (
      <Router>
        <MuiThemeProvider muiTheme={this.state.theme}>
          <div>
          <Appbar changeThemeCallback={this.changeTheme}/>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/pictures' component={Pictures} />
            <Route exact path='/dietinfo' component={DietInformation} />
            <Route exact path='/mating' component={MatingReproduction} />
            <Route exact path='/habitat' component={HabitatInformation} />
            <Route exact path='/biology' component={BiologyInformation} />
            <Route exact path='/scientific' component={Scientific} />
            <Route component={NotFound}/>
          </Switch>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
