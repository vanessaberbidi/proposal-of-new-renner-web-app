import React from 'react';
import estrela from '../../img/estrela.png';

export default class BuyButtons extends React.Component {
  render() {
    return(
      <div className="buy-button-group">
        <hr/>
        <p className="price">R$ 189,90</p>
        <p className="price-divided">4x de R$ 47,48* s/juros no Cartão Renner</p>
        <img className="star-points" src={estrela}/>
        <span className="points-earned">Ganhe 142 pontos com essa compra</span>
        <button className="buy-button">COMPRAR</button>
        <button className="one-click-button">COMPRAR COM <span className="one-click">1 CLICK</span></button>
      </div>
    )
  }
}