import React from 'react';
import coracao from '../../img/coracao.png';
import SizeButtons from '../Components/SizeButtons'

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
        </div>
        <SizeButtons />
      </div>
    )
  }
}