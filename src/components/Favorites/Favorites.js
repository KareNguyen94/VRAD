import React from 'react';
import ListingCard from '../ListingCard/ListingCard.js';

const Favorites = ({ listings }) => {
  if (listings.length === 0) {
    return (
      <section>
        <h2>Favorites</h2>
        <p>No listings favorited</p>
      </section>
    )
  }
  return (
    <section>
      <h2>Favorites</h2>
      {listings.map(listing => {
        return <ListingCard listing={listing} key={listing} />
      })}
    </section>
  );
}

export default Favorites;
