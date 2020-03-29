import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, waitForElement } from '@testing-library/react';
import AreaCard from './AreaCard';

describe('AreaCard', () => {
  it('renders correctly', async () => {
    const area = {
      area: 'RiNo',
      details: '/api/v1/areas/590'
    };
    const { getByText } = render(
      <Router>
        <AreaCard {...area} key={area.detials}/>
      </Router>);
    await waitForElement(() => getByText('River North'))

    expect(getByText('River North')).toBeInTheDocument();
    expect(getByText('RiNo')).toBeInTheDocument();
    expect(getByText(/RiNo is a burgeoning area/)).toBeInTheDocument();
    expect(getByText('View listings')).toBeInTheDocument();
    });
})
