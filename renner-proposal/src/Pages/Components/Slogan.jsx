import React from 'react';
import bodies from '../../img/bodies.png'

export default class Slogan extends React.Component {
  render() {
    return (
      <div className="slogan">
        <div className="slogan-title">
          <h1 className="slogan-style">
            Você tem seu estilo de comprar,
          </h1>
          <h1 className="slogan-style"> a Renner tem todos.</h1>
        </div>
        <div className="bodies-slogan">
          <img className="bodies-image" src={bodies} />
        </div>
      </div>
    )
  }
}