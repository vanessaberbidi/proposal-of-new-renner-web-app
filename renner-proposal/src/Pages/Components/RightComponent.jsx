import React from 'react';
import coracao from '../../img/coracao.png';
import BuyButtons from './BuyButtons';

export default class RightComponent extends React.Component {
  render() {
    return (
      <div className="content-right">
        <div className="align-item">
          <img className="liked" src={coracao}/>
        </div>
        <div className="dress-description">
          <p>
            VESTIDO FEMININO PRETO COM SAIA RODADA
          </p>
        </div>
        <div>
          <BuyButtons />
        </div>
      </div>
    )
  }
}