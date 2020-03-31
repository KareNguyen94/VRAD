import React, { Component } from 'react';
import AreaCard from '../AreaCard/AreaCard.js';
import { getAreas } from '../../apiCalls';

class AreaContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      areas: []
    }
  }

  componentDidMount() {
    getAreas()
      .then(data => this.setState({...data}));
  }

  render() {
    return (
      <section className='area-container'>
        {this.state.areas.map(area => (
          <AreaCard {...area} key={area.details}/>
        ))}
      </section>
    )
  }
}

export default AreaContainer;
