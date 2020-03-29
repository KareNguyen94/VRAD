import React, { Component } from 'react';
import './Login.css';
import { Redirect } from 'react-router-dom'

class Login extends Component {
  constructor(props) {
    super(props);
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
      } else {
        let user = {
          name: this.state.name,
          email: this.state.email,
          purpose: this.state.purpose,
          favorites: []
        }
        this.props.loginUser(user)
      }
  }

  render() {
    if (this.props.user) {
      return <Redirect to='/areas'/>
    }
    return (
      <form className='login-form'>
        <input
          className='all-inputs'
          name='name'
          type='text'
          placeholder='Your name'
          value={this.state.name}
          onChange={this.updateNameState}>
        </input>
        <input
        className='all-inputs'
          name='email'
          type='text'
          placeholder='Your email address'
          value={this.state.email}
          onChange={this.updateEmailState}>
        </input>
        <div>
          <input
            id='business-radio'
            type='radio'
            name='purpose'
            value='business'
            onClick={(event) => this.updatePurposeState(event)}>
          </input>
          <label className='radio-buttons' htmlFor='business-radio'>Business</label>
          <input
            id='vacation-radio'
            type='radio'
            name='purpose'
            value='vacation'
            onClick={(event) => this.updatePurposeState(event)}>
          </input>
          <label className='radio-buttons' htmlFor='vacation-radio'>Vacation</label>
          <input
            id='other-radio'
            type='radio'
            name='purpose'
            value='other'
            onClick={(event) => this.updatePurposeState(event)}>
          </input>
        <label className='radio-buttons' htmlFor='other-radio'>Other</label>
        </div>
        <button
        onClick={(event) => this.onLogin(event)}
        type='submit'
        name='submit-button'
        className='login-button'
        >
        Login</button>
        <p>{this.state.error}</p>
      </form>
    )
  }
}

export default Login;
