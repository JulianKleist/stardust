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
     </div>
    );
}

export default App;
