import React, { Component } from 'react';
import { Link, Route, Redirect } from "react-router-dom";
import './App.css';
import Login from '../Login/Login.js';
import AreaContainer from '../AreaContainer/AreaContainer.js';
import ListingContainer from '../ListingContainer/ListingContainer.js';
import ListingDetail from '../ListingDetail/ListingDetail.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      areas: [],
      loggedIn: false
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/areas')
      .then(response => response.json())
      .then(data => {
        this.setState({...data})
      })
  }

  render () {
    return (
      <div>
        <header>
          <h1>Welcome</h1>
          <Link to='/areas'>Areas</Link>
        </header>
        <Route exact path='/'>
          <Login />
        </Route>
        <Route exact path='/areas'>
          <AreaContainer areas={this.state.areas} />
        </Route>
        <Route exact path='/areas/:area_id/listings' render={ ({ match }) => {
            const { area_id } = match.params;
            return <ListingContainer area_id={area_id} />
          }} />
        <Route path='/areas/:area_id/listings/:listing_id' render={ ({ match }) => {
            const { area_id, listing_id } = match.params;
            return <ListingDetail area_id={area_id} listing_id={listing_id} />
          }}/>
      </div>
    )
  }
}

export default App;
