import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import Login from './Login';

describe('Login', () => {
  it('renders correctly', () => {
    const { getByPlaceholderText, getByLabelText, getByText } = render(
      <Router>
        <Login />
      </Router>);
      expect(getByPlaceholderText('Your name')).toBeInTheDocument();
      expect(getByPlaceholderText('Your email address')).toBeInTheDocument();
      expect(getByLabelText('Business')).toBeInTheDocument();
      expect(getByLabelText('Vacation')).toBeInTheDocument();
      expect(getByLabelText('Other')).toBeInTheDocument();
      expect(getByText('Login')).toBeInTheDocument();
    });

  it('should not run login function when there are no inputs', () => {
    const mockLogin = jest.fn()
    const { getByText } = 
    render(
      <Router>
        <Login loginUser={mockLogin}/>
      </Router>
    );

    fireEvent.click(getByText('Login'))
    expect(mockLogin).not.toHaveBeenCalled();
  })

  it('should run login function when inputs are filled in', () => {
    const mockLogin = jest.fn();
    const mockUser = {name: 'mockName', email: 'mockEmail@yahoo.com', purpose: 'vacation', favorites: []}
    const { getByText, getByPlaceholderText, getByLabelText } = 
    render(
      <Router>
        <Login loginUser={mockLogin}/>
      </Router>
    );

    fireEvent.change(getByPlaceholderText('Your name'), {target: {value: 'mockName'}});
    fireEvent.change(getByPlaceholderText('Your email address'), {target: {value: 'mockEmail@yahoo.com'}});
    fireEvent.click(getByLabelText('Vacation'));
    fireEvent.click(getByText('Login'));
    expect(mockLogin).toHaveBeenCalledWith(mockUser);
  });
});
