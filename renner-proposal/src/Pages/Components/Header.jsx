import React from 'react';
import logo from '../../img/LogoRenner.png';
import coracao from '../../img/coracao.png';
import compras from '../../img/compras.png'

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <img className="logo" src={logo}/>
        <input type="text" placeholder="Buscar produtos"/>
        <img className="icon" src={coracao}/>
        <img className="icon" src={compras}/>
      </header>
    )
  }
}