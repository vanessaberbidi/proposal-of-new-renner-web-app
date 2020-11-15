import React from 'react';
import coracao from '../../img/coracao.png';

export default class RightComponent extends React.Component {
  render() {
    return (
      <div className="content-right">
        <div className="align-item">
          <img className="liked" src={coracao}/>
        </div>
        <div>
          <p>
            VESTIDO FEMININO PRETO COM SAIA RODADA
          </p>
          <span className="ref">REF: 883226541</span>
          <div className="squares-group">
            <div className="square-border">
              <div className="square-solid square-color-one"></div>
            </div>
            <div className="square-border">
              <div className="square-solid square-color-two"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}