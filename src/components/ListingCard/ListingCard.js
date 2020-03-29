import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ListingCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFavorited: false
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001' + this.props.listing)
      .then(response => response.json())
      .then(data => this.setState({...data}))
      .then(() => {
        this.props.favorites.includes(this.state.listing_id) && this.setState({ isFavorited: true });
      })
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
      <article>
        <h2>{name}</h2>
        <img src={imagePath} alt=''></img>
        <Link to={`/areas/${area_id}/listings/${listing_id}`}>
          <button>More details</button>
        </Link>
        <button className={buttonStyle} onClick={this.favoriteListing}>Favorite</button>
      </article>
    )
  }
}

export default ListingCard;
