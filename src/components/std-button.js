import React from 'react';
import './std-button.css'

class StdButton extends React.Component {
  render() {
    const { stdText, StdTop } = this.props;

    return (
      <div className='stdButton' style={{top: StdTop}} data-aos="fade-up" data-aos-duration="1500">
        <p>{stdText}</p>
      </div>
    );
  }
}

export default StdButton;