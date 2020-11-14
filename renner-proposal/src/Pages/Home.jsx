import React from 'react';
import Header from './Components/Header';
import conjunto01 from '../img/conjunto01.png';
import conjunto02 from '../img/conjunto02.png';
import conjunto03 from '../img/conjunto03.png';
import conjunto04 from '../img/conjunto04.png';
import coracao from '../img/coracao.png';
import '../App.css';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="content-left">
            <p className="router">HOME - FEMININO - CONJUNTOS - CONJUNTO FEMININO CALÇA, BLUSA MANGA LONGA E COLETE COM REGULAGEM NA CINTURA </p>
            <img className="img-styles" src={conjunto01}/>
            <img className="img-styles" src={conjunto02}/>
            <img className="img-styles" src={conjunto03}/>
            <img className="img-styles" src={conjunto04}/>
          </div>
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
        </div>
      </div>
    )
  }
}