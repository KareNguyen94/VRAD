import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import AreaCard from '../AreaCard/AreaCard'
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

// describe('AreaCard', () => {
//   it('fetches the area data', () => {
//     const fetch = jest.fn()
//     fetch('http://localhost:3001/areas')
//     expect(fetch).toHaveBeenCalledTimes(1)
//     expect(fetch).toHaveBeenCalledWith('http://localhost:3001/areas')
//   })

//   it('displays correct information of the area card', () => {
//     const { getByText } = render(<Router><AreaCard 
//       id={1}
//       name={'River North'}
//       area={'Rino'}
//       about={'RiNo is a burgeoning area with new bars, restaurants and event spaces popping up all the time. Explore this thriving area of Denver today!'}
//       /></Router>)
      
//       const nameEle = getByText('River North');
//       expect(nameEle).toBeInTheDocument();
//   })
// })