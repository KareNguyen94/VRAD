import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getAreaDetails } from '../../apiCalls.js';
import './AreaCard.css';
import PropTypes from 'prop-types';

class AreaCard extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      details: {
        name: '',
        about: ''
      }
    }
  }

  componentDidMount() {
    this._isMounted = true;
    getAreaDetails(this.props.details)
      .then(data => this._isMounted && this.setState({...data}))
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { id, name, about } = this.state;
    return (
      <article className='area-card'>
        <h2 className='area-name'>{name}</h2>
        <h3>{this.props.area}</h3>
        <p>{about}</p>
        <Link to={`/areas/${id}/listings`}>
          <button className='buttons'>View listings</button>
        </Link>
      </article>
    )
  }
}

export default AreaCard;

AreaCard.propTypes = {
  area: PropTypes.string,
  details: PropTypes.string
}
