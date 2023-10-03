import './App.css';
import React, {useState} from 'react';
import logo from './assets/logo.png';

function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
     <div className='main_container'>
       <div className='navbar'>
        <div className='logo'>
          <img src={logo} alt='logo'/>
        </div>
        <div className={`nav_items ${isOpen && "open"}`}>
          <a href='#'>DGC</a>
          <a href='#'>SERVICES</a>
          <a href='#'>ECOMMERCE</a>
          <a href='#'>CUSTOMERS</a>
          <a href='#'>BLOG</a>
          <a href='#'>CONTACT</a>
        </div>
        <div className={`nav_toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className='vl'></div>
      <div className='vl2'></div>
      <div className={`hl ${isOpen && "open"}`}></div>
      <div className={`title ${isOpen && "open"}`}>
        <h1 >Performance Digital</h1>
        <p>completamente a Resultado.</p>
      </div>
      <div className={`company ${isOpen && "open"}`}>
        <img src="http://placehold.it/100x100"></img>
        <img src="http://placehold.it/100x100"></img>
        <img src="http://placehold.it/100x100"></img>
      </div>
      <div className='empresas'>
        <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
        <div>
          <img src="http://placehold.it/120x120"></img>
          <img src="http://placehold.it/120x120"></img>
          <img src="http://placehold.it/120x120"></img>
          <img src="http://placehold.it/120x120"></img>
        </div>
        <div>
          <img src="http://placehold.it/120x120"></img>
          <img src="http://placehold.it/120x120"></img>
          <img src="http://placehold.it/120x120"></img>
          <img src="http://placehold.it/120x120"></img>
        </div>
        <div>
          <img src="http://placehold.it/120x120"></img>
          <img src="http://placehold.it/120x120"></img>
          <img src="http://placehold.it/120x120"></img>
          <img src="http://placehold.it/120x120"></img>
        </div>
        <div>
          <img src="http://placehold.it/120x120"></img>
          <img src="http://placehold.it/120x120"></img>
          <img src="http://placehold.it/120x120"></img>
          <img src="http://placehold.it/120x120"></img>
        </div>
        <h2>+80 clientes: USA, Latam y Europa.</h2>
      </div>
      <div className='second_title'>
        <h2>Somos un verdadero</h2>
        <p>socio para crecer.</p>
      </div>
      <div className='hl2'></div>
      <div className='second_text'>
        <p>Somos responsables del éxito de decenas de compañías que escalaron sus ventas en los últimos 3 años de forma agresiva y sin descanso. Hoy nuestra agenda de trabajo está completa con clientes de todo LATAM y USA que buscan esos mismos resultados. ¿Por qué? Simplemente porque nacimos para generar resultado.</p>
      </div>
     </div>
    );
}

export default App;
