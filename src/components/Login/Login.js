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

  updateNameState = (event) => {
    this.setState({name: event.target.value})
  }

  updateEmailState = (event) => {
    this.setState({email: event.target.value})
  }

  render() {
    return (
      <form>
        <label>Name</label>
        <input 
          type='text'
          placeholder=''
          value={this.state.name}
          onChange={this.updateNameState}>
        </input>
        <label>Email</label>
        <input
          type='text'
          placeholder=''
          value={this.state.email}
          onChange={this.updateEmailState}>  
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