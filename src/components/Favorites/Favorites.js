import React from 'react';
import ListingCard from '../ListingCard/ListingCard.js';

const Favorites = ({ listings, toggleFavorite }) => {
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
        return <ListingCard
          listing={'/api/v1/listings/' + listing}
          key={listing}
          toggleFavorite={toggleFavorite} />
      })}
    </section>
  );
}

export default Favorites;
