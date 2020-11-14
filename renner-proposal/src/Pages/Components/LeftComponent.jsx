import React from 'react';
import coracao from '../../img/coracao.png';

export default class LeftComponent extends React.Component {
  render() {
    return (
      <div className="content-right">
        <div className="align-item">
          <img className="liked" src={coracao}/>
        </div>
        <div>
          <p>
            CONJUNTO FEMININO CALÇA, BLUSA MANGA LONGA E COLETE COM REGULAGEM NA CINTURA
          </p>
        </div>
      </div>
    )
  }
}