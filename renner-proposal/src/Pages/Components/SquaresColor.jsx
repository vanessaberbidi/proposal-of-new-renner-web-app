import React from 'react';

export default class SquaresColor extends React.Component {
  render() {
    return (
      <div className="squares-group">
        <div className="square-border">
          <div className="square-solid square-color-one"></div>
        </div>
        <div className="square-border">
          <div className="square-solid square-color-two"></div>
        </div>
      </div>
    )
  }
}