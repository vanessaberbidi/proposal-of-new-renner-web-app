import React from 'react';
import cabide from '../../img/cabide.png';
import trena from '../../img/trena.png'

export default class Measures extends React.Component {
  render() {
    return (
      <div className="measures">
        <img className="img-measures" src={cabide}/>
        <div className="provador-virtual-medidas">PROVADOR VIRTUAL</div>
        <img className="img-measures" src={trena}/>
        <div className="provador-virtual-medidas">TABELA DE MEDIDAS</div>
      </div>
    )
  }
}