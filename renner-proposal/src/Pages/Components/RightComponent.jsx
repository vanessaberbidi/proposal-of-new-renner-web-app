import React from 'react';
import marfinno from '../../img/marfinno.png';
import pinterest from '../../img/save-pinterest.png';
import coracao from '../../img/coracao.png';
import BuyButtons from './BuyButtons';
import SquaresColor from './SquaresColor';
import SizeButtons from './SizeButtons';
import Measures from './Measures';
import StylishConsulting from './StylishConsulting';

export default class RightComponent extends React.Component {
  render() {
    return (
      <div className="content-right">
        <div className="align-item">
          <img className="marfinno" src={marfinno}/>
          <img className="pinterest" src={pinterest}/>
          <img className="liked" src={coracao}/>
        </div>
        <div className="dress-description">
          <p>
            VESTIDO FEMININO PRETO COM SAIA RODADA
          </p>
        </div>
        <p className="ref">REF: 883226541</p>
        <SquaresColor />
        <SizeButtons />
        <Measures />
        <BuyButtons />
        <StylishConsulting />
      </div>
    )
  }
}