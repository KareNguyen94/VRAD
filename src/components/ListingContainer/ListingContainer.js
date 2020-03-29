import React, { Component } from 'react';
import ListingCard from '../ListingCard/ListingCard.js';

class ListingContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/areas/' + this.props.area_id)
      .then(response => response.json())
      .then(data => {
        this.setState({...data})
      })
  }

  render() {
    return (
      <section>
        <h2>Listings for {this.props.area_id}</h2>
        {this.state.listings.map(listing => {
          return <ListingCard
            listing={listing}
            key={listing}
            favorites={this.props.favorites}
            toggleFavorite={this.props.toggleFavorite} />
        })}
      </section>
    );
  }
}

export default ListingContainer;
