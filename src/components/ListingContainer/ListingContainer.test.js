import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, waitForElement } from '@testing-library/react';
import ListingContainer from './ListingContainer';

describe('ListingContainer', () => {
  it('renders correctly', async () => {
    const { getByText } = render(
      <Router>
        <ListingContainer
          area_id={590}
          favorites={[]}
        />
      </Router>);
    await waitForElement(() => getByText('Hip RiNo Party Spot'));
    expect(getByText('Hip RiNo Party Spot')).toBeInTheDocument();
    expect(getByText('Lowkey Industrial Chic')).toBeInTheDocument();
    });
})
