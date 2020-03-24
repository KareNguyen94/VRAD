import React, { Component } from 'react';

const AreaContainer = ({ areas }) => {
  return (
    <section>
      {areas.map(area => (
        <AreaCard area={area.area} name={}/>
      ))}
    </section>
  )
}
