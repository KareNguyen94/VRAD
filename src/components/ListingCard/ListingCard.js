import React from 'react';

const ListingCard = ({listing}) => {
  const imagePath = `./images/${listing.id}_a.jpg`
  return (
    <article>
      <h2>{listing.name}</h2>
      <img src={imagePath} alt=''></img>
      <button>More details</button>
    </article>
  )
}

export default ListingCard;

