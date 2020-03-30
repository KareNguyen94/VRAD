import React from 'react';
import ListingCard from '../ListingCard/ListingCard.js';

const Favorites = ({ listings, favorites, toggleFavorite }) => {
  if (favorites.length === 0) {
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
      {favorites.map(listing_id => {
        return <ListingCard
          listing={'/api/v1/listings/' + listing_id}
          favorites={favorites}
          key={listing_id}
          toggleFavorite={toggleFavorite} />
      })}
    </section>
  );
}

export default Favorites;
