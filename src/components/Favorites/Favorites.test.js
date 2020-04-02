import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, waitFor } from '@testing-library/react';
import Favorites from './Favorites';
import { getListing } from '../../apiCalls.js';
jest.mock('../../apiCalls.js');

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
    getListing.mockResolvedValueOnce({
      listing_id: '3',
      area_id: '490',
      name: 'Hip RiNo Party Spot'
    });
    getListing.mockResolvedValueOnce({
      listing_id: '44',
      area_id: '490',
      name: 'Lowkey Industrial Chic'
    });
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
