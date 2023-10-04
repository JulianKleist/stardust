import React from 'react';
import './vl2.css'
class Vl2 extends React.Component {
    render() {
      const { VlTop } = this.props;
      return (
        <div className='vl2' style={{top: VlTop}}></div>
      );
    }
  }
  
  export default Vl2;