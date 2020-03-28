import React, { Component } from 'react';
import { Link, Route } from "react-router-dom";
import './App.css';
import Login from '../Login/Login.js';
import AreaContainer from '../AreaContainer/AreaContainer.js';
import ListingContainer from '../ListingContainer/ListingContainer.js';
import ListingDetail from '../ListingDetail/ListingDetail.js';
import Header from '../Header/Header.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      areas: [],
      user: null,
    }
  }

  loginUser = (user) => {
    this.setState({user: user})
  }

  logoutUser = () => {
    this.setState({user: null})
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
        <Header logoutUser={this.logoutUser} user={this.state.user}/>
        <Route exact path='/'>
          <Login loginUser={this.loginUser} user={this.state.user}/>
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
