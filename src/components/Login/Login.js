import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      purpose: '',
      error: ''
    }
  }

  updateNameState = (event) => {
    this.setState({name: event.target.value})
  }

  updateEmailState = (event) => {
    this.setState({email: event.target.value})
  }

  updatePurposeState = (event) => {
    this.setState({email: event.target.value})
  }

  onLogin = (event) => {
    event.preventDefault();
    if (!this.state.name || !this.state.email || !this.state.purpose) {
      this.setState({error: '*All input fields required'})
    }
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
          value={this.state.purpose}
          onChange={this.updatePurposeState}>
        </input>
        <label for="business">Business</label>
        <input 
          type="radio" 
          name="purpose" 
          value={this.state.purpose}
          onChange={this.updatePurposeState}>
        </input>
        <label for="vacation">Vacation</label>
        <input 
          type="radio" 
          name="purpose" 
          value={this.state.purpose}
          onChange={this.updatePurposeState}>
        </input>
        <label for="other">Other</label>
        <button 
        onClick={this.onLogin}
        type="submit">
        Login</button>
        <p>{this.state.error}</p>
      </form>
    )
  }
}

export default Login;