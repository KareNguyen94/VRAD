import React from 'react';
import AreaCard from '../AreaCard/AreaCard.js';

const AreaContainer = ({ areas }) => {
  return (
    <section>
      {areas.map(area => (
        <AreaCard {...area} key={area.details.id}/>
      ))}
    </section>
  )
}

export default AreaContainer;
