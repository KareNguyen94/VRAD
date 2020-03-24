import React from 'react';

const AreaCard = (props) => {
  const { name, shortname, description } = props.area;
  return (
    <article>
      <h2>{name}</h2>
      <h3>{shortname}</h3>
      <p>{description}</p>
      <button>View listings</button>
    </article>
  )
}

export default AreaCard;
