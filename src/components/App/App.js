import React, { Component } from 'react';
import './App.css';
import Login from '../Login/Login.js';

class App extends Component {
  constructor() {
    super();
    this.state = {

    }
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
