import React from 'react';
import conjunto01 from '../../img/conjunto01.png';
import conjunto02 from '../../img/conjunto02.png';
import conjunto03 from '../../img/conjunto03.png';
import conjunto04 from '../../img/conjunto04.png';

export default class LeftComponent extends React.Component {
  render() {
    return (
      <div className="content-left">
        <p className="router">HOME - FEMININO - VESTIDOS - VESTIDO FEMININO PRETO COM SAIA RODADA </p>
        <img className="img-styles" src={conjunto01}/>
        <img className="img-styles" src={conjunto02}/>
        <img className="img-styles" src={conjunto03}/>
        <img className="img-styles" src={conjunto04}/>
      </div>
    )
  }
}