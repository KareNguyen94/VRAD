import React from 'react';
import ListingCard from '../ListingCard/ListingCard.js';

const ListingContainer = ({ listings }) => {
  return (
    <section>
      {listings.map(listing => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </section>
  )
}

export default ListingContainer;