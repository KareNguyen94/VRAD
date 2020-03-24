import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Login from '../Login/Login.js';
import AreaContainer from '../AreaContainer/AreaContainer.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      areas: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/areas')
      .then(response => response.json())
      .then(areaData => {
        const areaPromises = areaData.areas.map(area => {
          return fetch('http://localhost:3001' + area.details)
            .then(response => response.json())
            .then(detail => {
              return {
                shortname: area.area,
                name: detail.name,
                description: detail.about
              }
            })
            .catch(error => console.log(error))
        })
        return Promise.all(areaPromises);
      })
      .then(areas => this.setState({ areas }))
      .catch(error => console.log(error))
  }

  render () {
    return (
      <div>
        <header>
          <h1>Welcome</h1>
        </header>
        <Router>
          <Switch>
            <Route path='/areas'>
              <AreaContainer areas={this.state.areas} />
            </Route>
            <Route path='/'>
              <Login />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
