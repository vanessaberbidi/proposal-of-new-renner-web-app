import React from 'react';

export default class SizeButtons extends React.Component {
  render() {
    return (
      <div className="size-buttons-group">
        <button className="size-buttons">PP</button>
        <button className="size-buttons">P</button>
        <button className="size-buttons">M</button>
        <button className="size-buttons">G</button>
        <button className="size-buttons">GG</button>
      </div>
    )
  }
}