import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ListingCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001' + this.props.listing)
      .then(response => response.json())
      .then(data => {
        this.setState({...data})
      })
  }

  render() {
    const { listing_id, name, area_id } = this.state;
    const imagePath = `/images/${listing_id}_a.jpg`;
    return (
      <article>
        <h2>{name}</h2>
        <img src={imagePath} alt=''></img>
        <Link to={`/areas/${area_id}/listings/${listing_id}`}>
          <button>More details</button>
        </Link>
        <button onClick={() => this.props.toggleFavorite(listing_id)}>Favorite</button>
      </article>
    )
  }
}

export default ListingCard;
