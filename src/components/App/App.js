import React, { Component } from 'react';
import './App.css';
import Login from '../Login/Login.js';

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
        <h1>Welcome</h1>
        <Login />
      </div>
    )
  }
}

export default App;
