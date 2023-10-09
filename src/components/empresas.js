

import React from 'react';
import './empresas.css'

class Empresas extends React.Component {
  render() {
    return (
        <div className='empresas'>
            <h2 data-aos="fade-in" data-aos-duration="2000">Empresas que escalaron sus ventas con nosotros</h2>
                <div className='empresas_items'>
                {/* <picture>   
                  <source srcSet={downloadMetamaskWEBP} type="image/webp" />   
                  <source srcSet={downloadMetamaskPNG} type="image/png" />   
                  <img src={downloadMetamaskPNG} alt="download metamask" />  
                </picture> */}
                {/* create a component for picture */}
                    <img src="http://placehold.it/120x120" data-aos="fade-in" data-aos-duration="2000"></img>
                    <img src="http://placehold.it/120x120" data-aos="fade-in" data-aos-duration="2000"></img>
                    <img src="http://placehold.it/120x120" data-aos="fade-in" data-aos-duration="2000"></img>
                    <img src="http://placehold.it/120x120" data-aos="fade-in" data-aos-duration="2000"></img>
                    <img src="http://placehold.it/120x120" data-aos="fade-in" data-aos-duration="2000"></img>
                    <img src="http://placehold.it/120x120" data-aos="fade-in" data-aos-duration="2000"></img>
                    <img src="http://placehold.it/120x120" data-aos="fade-in" data-aos-duration="2000"></img>
                    <img src="http://placehold.it/120x120" data-aos="fade-in" data-aos-duration="2000"></img>
                    <img src="http://placehold.it/120x120" data-aos="fade-in" data-aos-duration="2000"></img>
                    <img src="http://placehold.it/120x120" data-aos="fade-in" data-aos-duration="2000"></img>
                    <img src="http://placehold.it/120x120" data-aos="fade-in" data-aos-duration="2000"></img>
                    <img src="http://placehold.it/120x120" data-aos="fade-in" data-aos-duration="2000"></img>
                    <img src="http://placehold.it/120x120" data-aos="fade-in" data-aos-duration="2000"></img>
                    <img src="http://placehold.it/120x120" data-aos="fade-in" data-aos-duration="2000"></img>
                    <img src="http://placehold.it/120x120" data-aos="fade-in" data-aos-duration="2000"></img>
                    <img src="http://placehold.it/120x120" data-aos="fade-in" data-aos-duration="2000"></img>
                </div>
            <h2 data-aos="fade-in" data-aos-duration="2000">+80 clientes: USA, Latam y Europa.</h2>
      </div>
    );
  }
}

export default Empresas;