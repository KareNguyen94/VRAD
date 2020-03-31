import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, waitFor } from '@testing-library/react';
import ListingContainer from './ListingContainer';
import { getAreaDetails, getListing } from '../../apiCalls.js';
jest.mock('../../apiCalls.js');

describe('ListingContainer', () => {
  it('renders correctly', async () => {
    getAreaDetails.mockResolvedValueOnce({
      id: 590,
      listings: [
        '/api/v1/listings/3',
        '/api/v1/listings/44'
      ]
    })
    getListing.mockResolvedValueOnce({
      name: 'Hip RiNo Party Spot'
    })
    getListing.mockResolvedValueOnce({
      name: 'Lowkey Industrial Chic'
    })
    const { getByText } = render(
      <Router>
        <ListingContainer
          area_id={590}
          favorites={[]}
        />
      </Router>);
    await waitFor(() => getByText('Lowkey Industrial Chic'));
    expect(getByText('Hip RiNo Party Spot')).toBeInTheDocument();
    expect(getByText('Lowkey Industrial Chic')).toBeInTheDocument();
    });
})
