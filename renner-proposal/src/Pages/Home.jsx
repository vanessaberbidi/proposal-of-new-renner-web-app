import React from 'react';
import '../App.css';
import Header from './Components/Header';
import RightContent from './Components/RightContent';
import LeftComponent from './Components/LeftComponent';
import Slogan from './Components/Slogan';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Slogan />
        <div className="container">
          <RightContent />
          <LeftComponent />
        </div>
      </div>
    )
  }
}