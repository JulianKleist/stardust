import React from 'react';
import './std-button.css'

class StdButton extends React.Component {
  render() {
    const { parametro } = this.props;

    return (
      <div className='stdButton'>
        <p>{parametro}</p>
      </div>
    );
  }
}

export default StdButton;