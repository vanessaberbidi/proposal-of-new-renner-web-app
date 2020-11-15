import React from 'react';
import Images from './Images'
import ClothesDetails from '../Components/ClothesDetails'

export default class LeftComponent extends React.Component {
  render() {
    return (
      <div className="content-left">
        <p className="router">HOME - FEMININO - VESTIDOS - VESTIDO FEMININO PRETO COM SAIA RODADA </p>
        <Images />
        <hr/>
        <ClothesDetails />
      </div>
    );
  }
}