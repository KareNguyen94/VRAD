import React from 'react';

const AreaCard = (props) => {
  const { area, details } = props;
  const { name, about } = details;
  return (
    <article>
      <h2>{name}</h2>
      <h3>{area}</h3>
      <p>{about}</p>
      <button>View listings</button>
    </article>
  )
}

export default AreaCard;
