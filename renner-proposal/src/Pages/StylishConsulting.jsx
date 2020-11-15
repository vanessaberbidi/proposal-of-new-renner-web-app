import React from 'react';
import Header from './Components/Header';
import Slogan from './Components/Slogan';
import '../App.css'

export default class StylishConsulting extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Slogan />
        <div className="text">
          Obrigada pelo seu interesse! Nosso time encontrou esses consultores perto de você:
        </div>
        <div className="consulting">
          Ana Silva
          <a href="#">Entre em contato</a>
        </div>
        <div className="consulting">
          Bruna Oliveira
          <a href="#">Entre em contato</a>
        </div>
        <div className="consulting">
          José Júnior
          <a href="#">Entre em contato</a>
        </div>
        <div className="consulting">
          Mário Silva
          <a href="#">Entre em contato</a>
        </div>
        <div className="consulting">
          Thaís Silveira
          <a href="#">Entre em contato</a>
        </div>
      </div>
    )
  }
}