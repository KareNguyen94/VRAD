import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Login from '../Login/Login.js';
import AreaContainer from '../AreaContainer/AreaContainer.js';
import ListingContainer from '../ListingContainer/ListingContainer.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      areas: [],
      listings: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/areas')
      .then(response => response.json())
      .then(areaData => {
        const areaPromises = areaData.areas.map(area => {
          return fetch('http://localhost:3001' + area.details)
            .then(response => response.json())
            .then(detail => {
              return {
                shortname: area.area,
                name: detail.name,
                description: detail.about
              }
            })
            .catch(error => console.log(error))
        })
        return Promise.all(areaPromises);
      })
      .then(areas => this.setState({ areas }))
      .catch(error => console.log(error))

    fetch('http://localhost:3001/api/v1/areas/590')
      .then(response => response.json())
      .then(rinoData => {
        const listingPromises = rinoData.listings.map(listing => {
          return fetch('http://localhost:3001' + listing)
          .then(response => response.json())
          .then(listingInfo => {
            return {
              name: listingInfo.name,
              id: listingInfo.listing_id,
            }
          })
            .catch(error => console.log(error))
        })
        return Promise.all(listingPromises)
      })
      .then(listings => this.setState({ listings }))
      .catch(error => console.log(error))
  }

  render () {
    return (
      <div>
        <header>
          <h1>Welcome</h1>
        </header>
        <Router>
          <Switch>
            <Route path='/areas'>
              <AreaContainer areas={this.state.areas} />
            </Route>
            <Route path='/listings'>
              <ListingContainer listings={this.state.listings}/>
            </Route>
            <Route path='/'>
              <Login />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;
