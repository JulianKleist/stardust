import React from 'react';
import './footer.css'

class Footer extends React.Component {
  render() {
    return (
      <div className='footer_container'>
        <h2>Argentina / Rosario · Moreno 878 · Oficina 8</h2>
        <h2>EEUU / Miami · 66 West Flagler Street · Suite 900</h2>
        <p>contacto@stardust.com</p>
        <div className='contact'>
            <img src='http://placehold.it/60x60'/>
            <img src='http://placehold.it/60x60'/>
            <img src='http://placehold.it/60x60'/>
        </div>
      </div>
    );
  }
}

export default Footer;