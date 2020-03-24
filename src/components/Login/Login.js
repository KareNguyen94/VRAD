import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: ''
    }
  }

  render() {
    return (
      <form>
        <input 
          type='text'
          placeholder=''
          value={this.state.name}>
        </input>

        <input
          type='text'
          placeholder=''
          value={this.state.email}>  
        </input>

        <input 
          type="radio" 
          name="purpose" 
          value="business">
        </input>
        <label for="business">Business</label>
        <input 
          type="radio" 
          name="purpose" 
          value="vacation">
        </input>
        <label for="vacation">Vacation</label>
        <input 
          type="radio" 
          name="purpose" 
          value="other">
        </input>
        <label for="other">Other</label>
      </form>
    )
  }
}

export default Login;