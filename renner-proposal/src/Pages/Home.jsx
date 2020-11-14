import React from 'react';
import '../App.css';
import Header from './Components/Header';
import RightComponent from './Components/RightComponent';
import LeftComponent from './Components/LeftComponent';
import Slogan from './Components/Slogan';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Slogan />
        <div className="container">
          <LeftComponent />
          <RightComponent />
        </div>
      </div>
    )
  }
}