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
    this.setState({purpose: event.target.value})
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
        <input
          name='name'
          type='text'
          placeholder='Your name'
          value={this.state.name}
          onChange={this.updateNameState}>
        </input>
        <input
          name='email'
          type='text'
          placeholder='Your email address'
          value={this.state.email}
          onChange={this.updateEmailState}>
        </input>
        <select defaultValue='' onChange={this.updatePurposeState} required>
          <option value='' disabled>Choose a purpose</option>
          <option value='business'>Business</option>
          <option value='vacation'>Vacation</option>
          <option value='other'>Other</option>
        </select>
        <input
          id='business-radio'
          type='radio'
          name='purpose'
          value='business'
          onChange={this.updatePurposeState}>
        </input>
        <label htmlFor='business-radio'>Business</label>
        <input
          id='vacation-radio'
          type='radio'
          name='purpose'
          value='vacation'
          onChange={this.updatePurposeState}>
        </input>
        <label htmlFor='vacation-radio'>Vacation</label>
        <input
          id='other-radio'
          type='radio'
          name='purpose'
          value='other'
          onChange={this.updatePurposeState}>
        </input>
        <label htmlFor='other-radio'>Other</label>
        <button
        onClick={this.onLogin}
        type='submit'>
        Login</button>
        <p>{this.state.error}</p>
      </form>
    )
  }
}

export default Login;
