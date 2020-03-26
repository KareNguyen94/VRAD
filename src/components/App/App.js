import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import './App.css';
import Login from '../Login/Login.js';
import AreaContainer from '../AreaContainer/AreaContainer.js';
import ListingContainer from '../ListingContainer/ListingContainer.js';
import ListingDetail from '../ListingDetail/ListingDetail.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      areas: []
    }
  }

  componentDidMount() {
    this.fetchAreas();
  }

  fetchAreas = () => {
    fetch('http://localhost:3001/api/v1/areas')
      .then(response => response.json())
      .then(data => {
        const areaPromises = data.areas.map(this.fetchAreaDetails);
        return Promise.all(areaPromises);
      })
      .then(areas => this.setState({ areas }))
      .catch(error => console.log(error))
  }

  fetchAreaDetails = (area) => {
    return fetch('http://localhost:3001' + area.details)
      .then(response => response.json())
      .then(details => {
        return this.fetchListings(details)
          .then(listings => {
            details = {...details, listings}
            return {...area, details}
          })
      })
  }

  fetchListings = (details) => {
    const listingPromises = details.listings.map(listing => {
      return fetch('http://localhost:3001' + listing)
        .then(response => response.json())
    });
    return Promise.all(listingPromises);
  }

  render () {
    return (
      <div>
        <header>
          <h1>Welcome</h1>
        </header>
        <Router>
          <Route exact path='/'>
            <Login />
          </Route>
          <Route path='/detail'>
            <ListingDetail detailedListing={this.state.detailedListing} />
          </Route>
          <Route path='/areas'>
            <AreaContainer areas={this.state.areas} />
          </Route>
          <Route path='/listings'>
            <ListingContainer listings={this.state.listings}/>
          </Route>
        </Router>
      </div>
    )
  }
}

export default App;
