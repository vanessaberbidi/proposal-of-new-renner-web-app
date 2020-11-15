import React from 'react';

export default class BuyButtons extends React.Component {
  render() {
    return(
      <div className="buy-button-group">
        <hr/>
        <p className="price">R$ 189,90</p>
        <span className="price-divided">4x de R$ 47,48* s/juros no Cartão Renner</span>
        <button className="buy-button">COMPRAR</button>
        <button className="one-click-button">COMPRAR COM <span className="one-click">1 CLICK</span></button>
      </div>
    )
  }
}