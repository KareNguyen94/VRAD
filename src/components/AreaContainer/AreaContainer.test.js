import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, waitFor } from '@testing-library/react';
import AreaContainer from './AreaContainer';
import { getAreas } from '../../apiCalls.js';
jest.mock('../../apiCalls.js');

describe('AreaContainer', () => {
  it('renders correctly', async () => {
    getAreas.mockResolvedValueOnce({
      areas: [
        {
          area: 'RiNo',
          details: '/api/v1/areas/590'
        },
        {
          area: 'Park Hill',
          details: '/api/v1/areas/751'
        }
      ]
    })
    const { getByText } = render(
      <Router>
        <AreaContainer />
      </Router>);

    await waitFor(() => expect(getAreas).toHaveBeenCalled());
    expect(getByText('RiNo')).toBeInTheDocument();
    expect(getByText('Park Hill')).toBeInTheDocument();
    });
})
