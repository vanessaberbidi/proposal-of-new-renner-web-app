import React from 'react';
import modelo01 from '../../img/modelo01.png';
import modelo02 from '../../img/modelo02.png';
import modelo03 from '../../img/modelo03.png';
import modelo04 from '../../img/modelo04.png';
import modelo05 from '../../img/modelo05.png';
import modelo06 from '../../img/modelo06.png';
import modelo07 from '../../img/modelo07.png';
import modelo08 from '../../img/modelo08.png';

export default class Images extends React.Component {
  render() {
    return (
      <div>
        <img className="img-styles" src={modelo01}/>
        <img className="img-styles" src={modelo02}/>
        <img className="img-styles" src={modelo03}/>
        <img className="img-styles" src={modelo04}/>
        <img className="img-styles" src={modelo05}/>
        <img className="img-styles" src={modelo06}/>
        <img className="img-styles" src={modelo07}/>
        <img className="img-styles" src={modelo08}/>
      </div>
    )
  }
}