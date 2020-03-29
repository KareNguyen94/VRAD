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
      const nameInput = getByPlaceholderText('Your name');
      const emailInput = getByPlaceholderText('Your email address');
      const businessInput = getByLabelText('Business');
      const vacationInput = getByLabelText('Vacation');
      const otherInput = getByLabelText('Other');
      const loginButton = getByText('Login');
      expect(nameInput).toBeInTheDocument();
      expect(emailInput).toBeInTheDocument();
      expect(businessInput).toBeInTheDocument();
      expect(vacationInput).toBeInTheDocument();
      expect(otherInput).toBeInTheDocument();
      expect(loginButton).toBeInTheDocument();
    });
})
