  import React from 'react';

  const Header = ({user}) => {
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
          <button>Sign out</button>
        </header>
      )
    }
  }

  export default Header;