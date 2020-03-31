  import React from 'react';
  import { Link } from 'react-router-dom';
  import './Header.css'
  import PropTypes from 'prop-types';

  const Header = ({user, logoutUser}) => {

    if (!user) {
      return (
        <header>
          <h1>VRAD</h1>
          <h3>Vacation Rentals Around Denver</h3>
        </header>
      )
    } else {
      return (
        <header>
          <h1>VRAD</h1>
          <div>
            <h3>Welcome {user.name}</h3>
            <p>Let's plan your {user.purpose} trip!</p>
          <Link to='/favorites'>
            <button className='buttons' >Favorites ({user.favorites.length})</button>
          </Link>
          <button className='buttons' onClick={() => logoutUser()}>Sign out</button>
          </div>
        </header>
      )
    }
  }

  export default Header;

  Header.PropTypes = {
    user: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.any,
      purpose: PropTypes.string,
      favorites: PropTypes.array
    })
  }