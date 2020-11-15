import React from 'react';
export default class ClothesDetails extends React.Component {
  render() {
    return (
      <div className="description">
        <br/>
        <p>DETALHES</p>
        <ul className="description-title">
          <li>Vestido Feminino Preto</li>
          <li>Liso</li>
          <li>Sem manga e com 1 alça fina</li>
          <li> Ajustado até a cintura</li>
          <li>Acompanha saia rodada na altura do joelho</li>
          <li>Pregas grandes na saia</li>
          <li>Marca: Marfinno</li>
          <li>Material: Viscose</li>
        </ul>
        <br/>
        <div>
          <div>
            <span>PARA CEGO VER:</span>
            <p>
              Quatro imagens com fundo branco, 
              cada uma mostrando duas mulheres, 
              de corpos e etnias diferentes, 
              usando um vestido preto de material de 
              viscose da marca Marfinno. 
              O vestido é liso e possui uma alça fina
              do lado esquerdo, sendo ajustado até a 
              cintura e acompanhando saia rodada
              na altura do joelho, com pregas grandes na saia.
            </p>
          </div>
        </div>
      </div>
    )
  }
}
