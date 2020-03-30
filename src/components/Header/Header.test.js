import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <Router>
      <Header />
      </Router>);
    const titleElement = getByText('VRAD');
    const subtitleElement = getByText('Vacation Rentals Around Denver');
    expect(titleElement).toBeInTheDocument();
    expect(subtitleElement).toBeInTheDocument();
  });
  it('renders differently when a user is logged in', () => {
    const user={
      name: 'Jonathan',
      email: 'email@email.com',
      purpose: 'business',
      favorites: []
    }
    const { getByText } = render(
      <Router>
      <Header user={user} />
      </Router>);
    const welcomeMessage = getByText('Welcome Jonathan');
    const tripTypeMessage = getByText('Let\'s plan your business trip!');
    const favoritesButton = getByText('Favorites (0)');
    const signOutButton = getByText('Sign out');
    expect(welcomeMessage).toBeInTheDocument();
    expect(tripTypeMessage).toBeInTheDocument();
    expect(favoritesButton).toBeInTheDocument();
    expect(signOutButton).toBeInTheDocument();
  });
})
