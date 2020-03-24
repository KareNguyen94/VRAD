import React from 'react';
import AreaCard from '../AreaCard/AreaCard.js';

const AreaContainer = ({ areas }) => {
  return (
    <section>
      {areas.map(area => (
        <AreaCard area={area} />
      ))}
    </section>
  )
}

export default AreaContainer;
