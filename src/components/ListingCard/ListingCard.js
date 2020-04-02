import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getListing } from '../../apiCalls.js';
import './ListingCard.css'
import PropTypes from 'prop-types';

class ListingCard extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      isFavorited: false
    }
  }

  componentDidMount() {
    this._isMounted = true;
    getListing(this.props.listing)
      .then(data => this.setState({...data}))
      .then(() => {
        this._isMounted && this.props.favorites.includes(this.state.listing_id)
          && this.setState({ isFavorited: true });
      })
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  favoriteListing = (event) => {
    this.props.toggleFavorite(this.state.listing_id);
    this.setState(previousState => ({ isFavorited: !previousState.isFavorited }));
  }

  render() {
    const { listing_id, name, area_id } = this.state;
    const imagePath = `/images/${listing_id}_a.jpg`;
    const buttonStyle = this.state.isFavorited ?
      'favorited' :
      '';
    return (
      <article className='listing-card'>
        <h2>{name}</h2>
        <img className='listing-img' src={imagePath} alt=''></img>
        <Link to={`/areas/${area_id}/listings/${listing_id}`}>
          <button className='buttons more-button'>More details</button>
        </Link>
        <button  className={buttonStyle} onClick={this.favoriteListing}>Favorite</button>
      </article>
    )
  }
}

export default ListingCard;

ListingCard.propTypes = {
  listing: PropTypes.string,
  favorites: PropTypes.array,
  toggleFavorite: PropTypes.func
}
