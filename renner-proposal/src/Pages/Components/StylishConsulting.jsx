import React from 'react';
import colors from '../../img/rgb-circle-3.png';
import { Link } from 'react-router-dom';

export default class StylishConsulting extends React.Component {
  render() {
    return (
      <div className="color-component">
        <div className="container-color">
          <img className="image-colors" src={colors}/>
        </div>
        <div>
          <p className="style-text">Ainda não sabe seu estilo?</p>
          <div className="style-text"><Link className="link-to-consulting" to="/StylishConsulting">Entre em contato</Link> com uma de nossas Consultoras de Estilo!</div>
        </div> 
      </div>
    )
  }
}