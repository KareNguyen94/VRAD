import React, { Component } from 'react';
import AreaCard from '../AreaCard/AreaCard.js';
import { getAreas } from '../../apiCalls';


class AreaContainer extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      areas: []
    }
  }

  componentDidMount() {
    this._isMounted = true;
    getAreas()
      .then(data => this._isMounted && this.setState({...data}));
  }

  componentWillUnmount() {
    this._isMounted = false;
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
