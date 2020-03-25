import React from 'react';

const ListingDetail = ({ detailedListing }) => {
  let { id, name, street, zip, beds, baths, cost, features } = detailedListing;
  const images = ['a', 'b', 'c'].map(letter => {
    return `./images/${id}_${letter}.jpg`;
  });
  return (
    <article>
      <h2>{name}</h2>
      <h3>{street}, {zip}</h3>
      <div className='images'>
        {images.map((image, index) => <img src={image} alt='' key={index} />)}
      </div>
      <h3>{beds} Bedrooms, {baths} Bathrooms</h3>
      <h3>${cost}</h3>
      <h3>Features</h3>
      <ul>
        {features.map(feature => <li key={feature}>{feature}</li>)}
      </ul>
    </article>
  )
}

export default ListingDetail;
