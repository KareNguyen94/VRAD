import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import { getAreas, getAreaDetails, getListing } from '../../apiCalls.js';
jest.mock('../../apiCalls.js');

getAreas.mockResolvedValue({
  areas: [
    {
      area: 'RiNo',
      details: '/api/v1/areas/590'
    }
  ]
})

getAreaDetails.mockResolvedValue({
  id: 590,
  name: 'River North',
  about: '',
  listings: [
    '/api/v1/listings/3'
  ]
})

getListing.mockResolvedValue({
  listing_id: 3,
  area_id: 590,
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

describe('App', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <Router>
        <App />
      </Router>);
    expect(getByText('VRAD')).toBeInTheDocument();
  });

  it('allows a user to log in', () => {
    const { getByText, getByLabelText, getByPlaceholderText } = render(
      <Router>
        <App />
      </Router>);
    fireEvent.change(getByPlaceholderText('Your name'), {target: {value: 'mockName'}});
    fireEvent.change(getByPlaceholderText('Your email address'), {target: {value: 'mockEmail@yahoo.com'}});
    fireEvent.click(getByLabelText('Vacation'));
    fireEvent.click(getByText('Login'));
    expect(location.pathname).toBe('/areas');
    expect(getByText('Sign out')).toBeInTheDocument();
    expect(getByText('Welcome mockName')).toBeInTheDocument();
    expect(getByText('Let\'s plan your vacation trip!')).toBeInTheDocument();
  })

  it('should be able to view listings', async () => {
    const { getByText, getAllByText, getByLabelText, getByPlaceholderText } = render(
      <Router>
        <App />
      </Router>);
    fireEvent.change(getByPlaceholderText('Your name'), {target: {value: 'mockName'}});
    fireEvent.change(getByPlaceholderText('Your email address'), {target: {value: 'mockEmail@yahoo.com'}});
    fireEvent.click(getByLabelText('Vacation'));
    fireEvent.click(getByText('Login'));
    await waitFor(() => getByText('River North'))
    fireEvent.click(getAllByText('View listings')[0]);
    await waitFor(() => getByText('Hip RiNo Party Spot'));
    expect(location.pathname).toBe('/areas/590/listings');
  })

  it('should be able to view the details for a listing', async () => {
    const { getByText, getAllByText, getByLabelText, getByPlaceholderText } = render(
      <Router>
        <App />
      </Router>);
    fireEvent.change(getByPlaceholderText('Your name'), {target: {value: 'mockName'}});
    fireEvent.change(getByPlaceholderText('Your email address'), {target: {value: 'mockEmail@yahoo.com'}});
    fireEvent.click(getByLabelText('Vacation'));
    fireEvent.click(getByText('Login'));
    await waitFor(() => getByText('River North'))
    fireEvent.click(getAllByText('View listings')[0]);
    await waitFor(() => getByText('Hip RiNo Party Spot'));
    fireEvent.click(getAllByText('More details')[0]);
    expect(location.pathname).toBe('/areas/590/listings/3');
  })
})
