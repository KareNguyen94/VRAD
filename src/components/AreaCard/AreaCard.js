import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AreaCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: {
        name: '',
        about: ''
      }
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001' + this.props.details)
      .then(response => response.json())
      .then(data => {
        this.setState({...data})
      })
  }

  render() {
    const { id, name, about } = this.state;
    return (
      <article>
        <h2>{name}</h2>
        <h3>{this.props.area}</h3>
        <p>{about}</p>
        <Link to={`/areas/${id}/listings`}>
          <button>View listings</button>
        </Link>
      </article>
    )
  }
}

export default AreaCard;
