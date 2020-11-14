import React from 'react';
import Header from './Components/Header';
import coracao from '../img/coracao.png';
import '../App.css';
import RightContent from './Components/RightContent';
import LeftComponent from './Components/LeftComponent';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <RightContent />
          <LeftComponent />
        </div>
      </div>
    )
  }
}