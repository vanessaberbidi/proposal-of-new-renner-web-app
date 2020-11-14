import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome!</h1>
        <Link to="/SecondPage">
          <button>Comprar 💸</button>
        </Link>
      </div>
    )
  }
}