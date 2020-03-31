import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, waitFor } from '@testing-library/react';
import Favorites from './Favorites';

describe('Favorites', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <Router>
        <Favorites
          favorites={[]}
        />
      </Router>);
    expect(getByText('Favorites')).toBeInTheDocument();
    expect(getByText('No listings favorited')).toBeInTheDocument();
  });
  it('renders differently when a user has favorites', async () => {
    const { getByText } = render(
      <Router>
        <Favorites
          favorites={[3, 44]}
        />
      </Router>);
    await waitFor(() => getByText('Lowkey Industrial Chic'));

    expect(getByText('Hip RiNo Party Spot')).toBeInTheDocument();
    expect(getByText('Lowkey Industrial Chic')).toBeInTheDocument();
  });
})
