import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <Router>
        <App />
      </Router>);
      const appHeader = getByText('VRAD');
      expect(appHeader).toBeInTheDocument();
    });
})
