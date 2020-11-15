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
        <div>
          <div className="consulting">
            <p>Ana Silva</p>
            <a href="#">Entre em contato</a>
          </div>
        </div>
        <div className="consulting">
          <p>Bruna Oliveira</p>
          <a href="#">Entre em contato</a>
        </div>
        <div className="consulting">
          <p>José Júnior</p>
          <a href="#">Entre em contato</a>
        </div>
        <div className="consulting">
          <p>Mário Silva</p>
          <a href="#">Entre em contato</a>
        </div>
        <div className="consulting">
          <p>Thaís Silveira</p>
          <a href="#">Entre em contato</a>
        </div>
      </div>
    )
  }
}