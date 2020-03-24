import React, { Component } from 'react';

const AreaCard = (props) => {
  const { area, name, about }
  return (
    <article>
      <h2>{area}</h2>
      <h3>{name}</h3>
      <p>{about}</p>
      <button>View listings</button>
    </article>
  )
}
