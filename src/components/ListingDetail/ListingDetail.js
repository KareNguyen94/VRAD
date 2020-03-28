import React, { Component } from 'react';

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
    fetch('http://localhost:3001/api/v1/listings/' + this.props.listing_id)
      .then(response => response.json())
      .then(data => this.setState({...data}))
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
    return (
      <article>
        <h2>{name}</h2>
        <h3>{street}, {zip}</h3>
        <div className='images'>
          {imagePaths.map((image, index) => <img src={image} alt='' key={index} />)}
        </div>
        <h3>{beds} Bedrooms, {baths} Bathrooms</h3>
        <h3>${cost_per_night}</h3>
        <h3>Features</h3>
        <ul>
          {features.map(feature => <li key={feature}>{feature}</li>)}
        </ul>
      </article>
    )
  }
}

export default ListingDetail;
