  import React from 'react';
  import { Link } from 'react-router-dom';
  import './Header.css'

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
          <h3>Welcome {user.name}</h3>
          <p>Let's plan your {user.purpose} trip!</p>
          <Link to='/favorites'>
            <button>Favorites</button>
          </Link>
          <button onClick={() => logoutUser()}>Sign out</button>
        </header>
      )
    }
  }

  export default Header;
