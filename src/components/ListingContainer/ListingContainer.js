import React, { Component } from 'react';
import ListingCard from '../ListingCard/ListingCard.js';
import { getAreaDetails } from '../../apiCalls.js';
import './ListingContainer.css';
import PropTypes from 'prop-types';

class ListingContainer extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      listings: []
    }
  }

  componentDidMount() {
    this._isMounted = true;
    getAreaDetails('/api/v1/areas/' + this.props.area_id)
      .then(data => this._isMounted && this.setState({...data}))
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return (
      <div className='listing-container-h2'>
        <h2>Listings for {this.props.area_id}</h2>
        <section className='listing-container'>
          {this.state.listings.map(listing => {
            return <ListingCard
            listing={listing}
            key={listing}
            favorites={this.props.favorites}
            toggleFavorite={this.props.toggleFavorite} />
          })}
        </section>
      </div>
    );
  }
}

export default ListingContainer;

ListingContainer.propTypes = {
  area_id: PropTypes.string,
  favorites: PropTypes.array,
  toggleFavorite: PropTypes.func
}
