import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, waitFor, fireEvent } from '@testing-library/react';
import AreaCard from './AreaCard';
import { getAreaDetails } from '../../apiCalls.js';
jest.mock('../../apiCalls.js');

describe('AreaCard', () => {
  it('renders correctly', async () => {
    getAreaDetails.mockResolvedValueOnce({
      id: 590,
      name: 'River North',
      location: 'North of Downtown Denver',
      about: 'RiNo is a burgeoning area with new bars, restaurants and event spaces popping up all the time. Explore this thriving area of Denver today!',
      region_code: 6356834,
      quick_search: 'o5kod9f5cqo0',
      listings: [
        '/api/v1/listings/3',
        '/api/v1/listings/44',
        '/api/v1/listings/221',
        '/api/v1/listings/744',
        '/api/v1/listings/90',
        '/api/v1/listings/310'
      ]
    })
    const { getByText } = render(
      <Router>
        <AreaCard area={'RiNo'} details={'/api/v1/areas/590'} />
      </Router>);
    await waitFor(() => expect(getAreaDetails).toHaveBeenCalled());

    expect(getByText('River North')).toBeInTheDocument();
    expect(getByText('RiNo')).toBeInTheDocument();
    expect(getByText(/RiNo is a burgeoning area/)).toBeInTheDocument();
    expect(getByText('View listings')).toBeInTheDocument();
    });

    it('should navigate to the listings', async () => {
      getAreaDetails.mockResolvedValueOnce({
        id: 590,
        name: 'River North',
        location: 'North of Downtown Denver',
        about: 'RiNo is a burgeoning area with new bars, restaurants and event spaces popping up all the time. Explore this thriving area of Denver today!',
        region_code: 6356834,
        quick_search: 'o5kod9f5cqo0',
        listings: [
          '/api/v1/listings/3',
          '/api/v1/listings/44',
          '/api/v1/listings/221',
          '/api/v1/listings/744',
          '/api/v1/listings/90',
          '/api/v1/listings/310'
        ]
      })
      const { getByText } =
      render(
        <Router>
          <AreaCard area={'RiNo'} details={'/api/v1/areas/590'} />
        </Router>
      );

      await waitFor(() => expect(getAreaDetails).toHaveBeenCalled());
      fireEvent.click(getByText('View listings'));
      expect(location.pathname).toBe('/areas/590/listings');
    });
});
