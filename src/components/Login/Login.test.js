import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
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
})
