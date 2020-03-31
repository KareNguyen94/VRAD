import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, fireEvent, waitFor } from '@testing-library/react';
import ListingCard from './ListingCard';
import { getListing } from '../../apiCalls.js';
jest.mock('../../apiCalls.js');

describe('ListingCard', () => {
  it('renders correctly', async () => {
    getListing.mockResolvedValueOnce({
      listing_id: 3,
      area_id: 590,
      name: 'Hip RiNo Party Spot  ',
    })
    const { getByText, getByAltText } = render(
      <Router>
        <ListingCard
          listing={'/api/v1/listings/3'}
          key={'/api/v1/listings/3'}
          favorites={[]}
        />
      </Router>);
    await waitFor(() => getByText('Hip RiNo Party Spot'))

    expect(getByText('Hip RiNo Party Spot')).toBeInTheDocument();
    expect(getByAltText('')).toBeInTheDocument();
    expect(getByText('More details')).toBeInTheDocument();
    expect(getByText('Favorite')).toBeInTheDocument();
    });

    it('should navigate to the listings details', async () => {
      getListing.mockResolvedValueOnce({
        listing_id: 3,
        area_id: 590,
        name: 'Hip RiNo Party Spot  ',
      })
      const { getByText } =
      render(
        <Router>
          <ListingCard favorites={[]} listing={'/api/v1/listings/3'} />
        </Router>
      );

      await waitFor(() => getByText('Hip RiNo Party Spot'));
      fireEvent.click(getByText('More details'));
      expect(location.pathname).toBe('/areas/590/listings/3');
    });

    it('should fire toggle favorites when favorite button is clicked', async () => {
      getListing.mockResolvedValueOnce({
        listing_id: 3,
        area_id: 590,
        name: 'Hip RiNo Party Spot  ',
      })
      const mockToggleFavorite = jest.fn();
      const { getByText } =
      render(
        <Router>
          <ListingCard toggleFavorite={mockToggleFavorite} favorites={[]} listing={'/api/v1/listings/3'} />
        </Router>
      );

      await waitFor(() => getByText('Hip RiNo Party Spot'));
      fireEvent.click(getByText('Favorite'));
      expect(mockToggleFavorite).toHaveBeenCalledWith(3);
    });
});
