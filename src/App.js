import './App.css';
import React, {useState, useEffect} from 'react';
import logo from './assets/logo.png';
import VideoPlayer from './components/VideoPlayer';
import StdButton from './components/std-button';
import Vl2 from './components/vl2';
import ImageExpandable from './components/images';
import Blog from './components/blog';
import Empresas from './components/empresas';
import Hl from './components/hl';

import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const VideoTop = '570vh'
  const VideoHeight = "315"
  useEffect(() => {
    AOS.init();
  }, []);
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
      <Vl2 VlTop={"42rem"} />
      <div className={`hl ${isOpen && "open"}`} data-aos="fade-down" data-aos-duration="1500"></div>
      <div className={`title ${isOpen && "open"}`}>
        <h1 data-aos="fade-down" data-aos-duration="1500">Performance Digital</h1>
        <p data-aos="fade-down" data-aos-duration="2000">completamente a Resultado.</p>
      </div>
      <div className={`company ${isOpen && "open"}`}>
        <img src="http://placehold.it/100x100" data-aos="zoom-in" data-aos-duration="2000"></img>
        <img src="http://placehold.it/100x100" data-aos="zoom-in" data-aos-duration="2000"></img>
        <img src="http://placehold.it/100x100" data-aos="zoom-in" data-aos-duration="2000"></img>
      </div>
      <Empresas />
      <div className='second_title'>
        <h2 data-aos="fade-down" data-aos-duration="1500">Somos un verdadero</h2>
        <p data-aos="fade-down" data-aos-duration="2000">socio para crecer.</p>
      </div>
      <Hl StdTop={"378rem"}/>
      <div className='second_text'>
        <p data-aos="fade-down" data-aos-duration="1500">Somos responsables del éxito de decenas de compañías que escalaron sus ventas en los últimos 3 años de forma agresiva y sin descanso. Hoy nuestra agenda de trabajo está completa con clientes de todo LATAM y USA que buscan esos mismos resultados. ¿Por qué? Simplemente porque nacimos para generar resultado.</p>
      </div>
      <VideoPlayer VideoWidth={"350px"} VideoHeight={"200rem"} VideoTop={"405rem"}/>
      <p className='video-description' data-aos="fade-in" data-aos-duration="2000">Lorem ipsum dolor sit amet</p>
      <StdButton stdText={'SOLICITAR PRESUPUESTO'} StdTop={"444rem"}/>
      <Vl2 VlTop={"455rem"} />
      <div className='third_title'>
        <h2 data-aos="fade-down" data-aos-duration="1500">Nuestra oferta</h2>
        <p data-aos="fade-down" data-aos-duration="2000">es simple y sencilla.</p>
      </div>
      <Hl StdTop={"495rem"}/>
      <div className='third_text'>
        <p data-aos="fade-down" data-aos-duration="2000">Conectamos a tu empresa un equipo AAA compuesto por especialistas en Paid Ads, Data Analytics, Publicidad, Diseño y Copywriting. Nuestro equipo pondrá en marcha nuestro framework de trabajo, el mismo que venimos corriendo para todos nuestros casos de éxito. En menos de doce semanas vas a experimentar un crecimiento significativo en tu facturación junto con un aumento en la notoriedad. ¿Qué garantía tenes? Más allá de nuestra extensa cartera de casos de éxito en comercio electrónico proponemos una modalidad única en donde si no vendés no pagás, vamos variabilizados completamente.</p>
      </div>
      <VideoPlayer VideoWidth={"350px"} VideoHeight={"200rem"} VideoTop={"534rem"}/>
      <VideoPlayer VideoWidth={"350px"} VideoHeight={"200rem"} VideoTop={"558rem"}/>
      <VideoPlayer VideoWidth={"350px"} VideoHeight={"200rem"} VideoTop={"582rem"}/>
      <Vl2 VlTop={"610rem"} />
      <div className='casos'>
        <h2 data-aos="fade-down" data-aos-duration="2000">Casos de éxito reales</h2>
        <p data-aos="fade-down" data-aos-duration="2000">Todos nuestros clientes en las primeras 12 semanas experimentan un crecimiento enorme en sus ventas. Te presentamos alguno de nuestros casos de éxito, con capturas de 
          pantalla de sus cuentas publicitarias.
100% Resultados reales que podemos mostrarte en una llamada.</p>
      </div>
      <Hl StdTop={"652rem"}/>
      <div className='images'>
        <ImageExpandable src="http://placehold.it/350x175" width="1000px" height="500px" />
      </div>
      <Vl2 VlTop={"915rem"} />
      <div className='consultoria'>
        <h2 data-aos="fade-down" data-aos-duration="2000">Consultoría gratuita</h2>
        <p data-aos="fade-down" data-aos-duration="2000">Agenda una videollamada de diagnóstico y consultoría totalmente gratuita. Nuestros especialistas realizarán un diagnóstico y te brindará una evaluación de posibles 
          alterativas para tu plan de crecimiento!</p>
      </div>
      <Hl StdTop={"948rem"}/>
      <div className='calendly'>
        <div class="calendly-inline-widget" data-url="https://calendly.com/ejirouweghrepha"></div>
        <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
      </div>
      <di className="blog">
        <h2 data-aos="fade-down" data-aos-duration="3000">Nuestro Blog</h2>
      </di>
      <Hl StdTop={"1052rem"}/>
      <Blog />
      {/* <StdButton stdText={"VISITAR BLOG"} StdTop={"705vh"}/> */}
     </div>
    );
}

export default App;
