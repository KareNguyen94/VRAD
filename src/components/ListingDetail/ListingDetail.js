import React, { Component } from 'react';
import { getListing } from '../../apiCalls.js';
import './ListingDetail.css';
import PropTypes from 'prop-types';

class ListingDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: {},
      details: {
        features: []
      }
    }
  }

  componentDidMount() {
    getListing('/api/v1/listings/' + this.props.listing_id)
      .then(data => this.setState({...data}))
      .then(() => {
        this.props.favorites.includes(this.state.listing_id)
          && this.setState({ isFavorited: true });
      })
  }

  favoriteListing = (event) => {
    this.props.toggleFavorite(this.state.listing_id);
    this.setState(previousState => ({ isFavorited: !previousState.isFavorited }));
  }

  render() {
    const {
      name,
      address: { street, zip },
      details: { beds, baths, cost_per_night, features }
    } = this.state;
    const { listing_id } = this.props;
    const imagePaths = [
      `/images/${listing_id}_a.jpg`,
      `/images/${listing_id}_b.jpg`,
      `/images/${listing_id}_c.jpg`
    ];
    const buttonStyle = this.state.isFavorited ?
      'favorited' :
      '';
    return (
      <article className='listing-detail'>
        <h2>{name}</h2>
        <h3>{street}, {zip}</h3>
        <div className='images'>
          {imagePaths.map((image, index) => <img className='listing-img' src={image} alt='' key={index} />)}
        </div>
        <h3>{beds} Bedrooms, {baths} Bathrooms</h3>
        <h3>${cost_per_night}</h3>
        <h3>Features:</h3>
        <ul>
          {features.map(feature => <li key={feature}>{'-' + feature}</li>)}
        </ul>
        <button className={buttonStyle} onClick={this.favoriteListing}>Favorite</button>
      </article>
    )
  }
}

export default ListingDetail;

ListingDetail.PropTypes = {
  area_id: PropTypes.string,
  listing_id: PropTypes.number,
  favorites: PropTypes.array,
  toggleFavorite: PropTypes.func,
}
