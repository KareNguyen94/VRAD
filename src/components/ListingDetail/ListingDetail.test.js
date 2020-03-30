import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, waitForElement } from '@testing-library/react';
import ListingDetail from './ListingDetail';

describe('ListingDetail', () => {
  it('renders correctly', async () => {
    const { getByText, getAllByAltText } = render(
      <Router>
        <ListingDetail
          area_id={590}
          listing_id={3}
          favorites={[]}
        />
      </Router>);
    await waitForElement(() => getByText('Hip RiNo Party Spot'))

    expect(getByText('Hip RiNo Party Spot')).toBeInTheDocument();
    expect(getAllByAltText('').length).toBe(3);
    expect(getByText('3 Bedrooms, 2.5 Bathrooms')).toBeInTheDocument();
    expect(getByText('$420')).toBeInTheDocument();
    expect(getByText('-hot tub')).toBeInTheDocument();
    expect(getByText('Favorite')).toBeInTheDocument();
    });
})
