import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Landing from "./components/Landing";


class App extends Component {
  render() {
    return (
        <Router>
            <Switch>
                <Route path='/' component={Landing}/>
            </Switch>
        </Router>
    );
  }
}

export default App;
