import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, waitForElement } from '@testing-library/react';
import ListingCard from './ListingCard';

describe('ListingCard', () => {
  it('renders correctly', async () => {
    const { getByText, getByAltText } = render(
      <Router>
        <ListingCard
          listing={'/api/v1/listings/3'}
          key={'/api/v1/listings/3'}
          favorites={[]}
        />
      </Router>);
    await waitForElement(() => getByText('Hip RiNo Party Spot'))

    expect(getByText('Hip RiNo Party Spot')).toBeInTheDocument();
    expect(getByAltText('')).toBeInTheDocument();
    expect(getByText('More details')).toBeInTheDocument();
    expect(getByText('Favorite')).toBeInTheDocument();
    });
})
