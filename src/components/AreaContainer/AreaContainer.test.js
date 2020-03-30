import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import AreaContainer from './AreaContainer';

describe('AreaContainer', () => {
  it('renders correctly', () => {
    const areas = [
      {
        area: 'RiNo',
        details: '/api/v1/areas/590'
      },
      {
        area: 'Park Hill',
        details: '/api/v1/areas/751'
      }
    ];
    const { getByText } = render(
      <Router>
        <AreaContainer areas={areas} />
      </Router>);
    expect(getByText('RiNo')).toBeInTheDocument();
    expect(getByText('Park Hill')).toBeInTheDocument();
    });
})
