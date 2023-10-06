import React from 'react';
import './hl.css'

class Hl extends React.Component {
  render() {
    const { StdTop } = this.props;

    return (
      <div className='hl' style={{top: StdTop}} data-aos="fade-down" data-aos-duration="2000"></div>
    );
  }
}

export default Hl;