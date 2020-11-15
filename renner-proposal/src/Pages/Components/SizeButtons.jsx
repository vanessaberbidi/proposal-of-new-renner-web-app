import React from 'react';

export default class SizeButtons extends React.Component {
  render() {
    return (
      <div className="size-buttons">
        <button className="size-button">PP</button>
        <button className="size-button">P</button>
        <button className="size-button">M</button>
        <button className="size-button">G</button>
      </div>
    )
  }
}