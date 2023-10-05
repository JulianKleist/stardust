import React from 'react';
import './hl.css'

class Hl extends React.Component {
  render() {
    const { stdText, StdTop } = this.props;

    return (
      <div className='hl' style={{top: StdTop}} data-aos="fade-down" data-aos-duration="1500">
        <p>{stdText}</p>
      </div>
    );
  }
}

export default Hl;