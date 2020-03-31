import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, fireEvent, waitFor } from '@testing-library/react';
import ListingDetail from './ListingDetail';
import { getListing } from '../../apiCalls.js';
jest.mock('../../apiCalls.js');

describe('ListingDetail', () => {
  it('renders correctly', async () => {
    getListing.mockResolvedValueOnce({
      name: 'Hip RiNo Party Spot',
      address: {
        street: '2250 Lawrence St',
        zip: '80205'
      },
      details: {
        beds: 3,
        baths: 2.5,
        cost_per_night: 420,
        features: [
          'hot tub',
          'espresso machine'
        ]
      }
    })
    const { getByText, getAllByAltText } = render(
      <Router>
        <ListingDetail
          area_id={590}
          listing_id={3}
          favorites={[]}
        />
      </Router>);
    await waitFor(() => getByText('Hip RiNo Party Spot'))

    expect(getByText('Hip RiNo Party Spot')).toBeInTheDocument();
    expect(getByText('2250 Lawrence St, 80205')).toBeInTheDocument();
    expect(getAllByAltText('').length).toBe(3);
    expect(getByText('3 Bedrooms, 2.5 Bathrooms')).toBeInTheDocument();
    expect(getByText('$420')).toBeInTheDocument();
    expect(getByText('-hot tub')).toBeInTheDocument();
    expect(getByText('Favorite')).toBeInTheDocument();
    });


  it('should fire toggle favorites when favorite button is clicked', async () => {
    getListing.mockResolvedValueOnce({
      listing_id: 3,
      name: 'Hip RiNo Party Spot',
      address: {
        street: '2250 Lawrence St',
        zip: '80205'
      },
      details: {
        beds: 3,
        baths: 2.5,
        cost_per_night: 420,
        features: [
          'hot tub',
          'espresso machine'
        ]
      }
    })
    const mockToggleFavorite = jest.fn();
    const { getByText } =
    render(
      <Router>
        <ListingDetail toggleFavorite={mockToggleFavorite} favorites={[]} listing_id={3} />
      </Router>
    );

    await waitFor(() => getByText('Hip RiNo Party Spot'));
    fireEvent.click(getByText('Favorite'));
    expect(mockToggleFavorite).toHaveBeenCalledWith(3);
  });
})
