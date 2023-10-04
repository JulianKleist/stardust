import './App.css';
import React, {useState} from 'react';
import logo from './assets/logo.png';
import VideoPlayer from './components/VideoPlayer';
import StdButton from './components/std-button';
import Vl2 from './components/vl2';
import ImageExpandable from './components/images';

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const parametro = 'SOLICITAR PRESUPUESTO'
  const VideoTop = '570vh'
  const VideoWidth = "560"
  const VideoHeight = "315"
  const VideoLeft = "5vw"
  const VlTop = "0"
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
      <Vl2 VlTop={"74vh"} />
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
      <VideoPlayer VideoWidth={"560"} VideoHeight={VideoHeight}/>
      <p className='video-description'>Lorem ipsum dolor sit amet</p>
      <StdButton parametro={parametro}/>
      <Vl2 VlTop={"410vh"} />
      <div className='third_title'>
        <h2>Nuestra oferta</h2>
        <p>es simple y sencilla.</p>
      </div>
      <div className='third_text'>
        <p>Conectamos a tu empresa un equipo AAA compuesto por especialistas en Paid Ads, Data Analytics, Publicidad, Diseño y Copywriting. Nuestro equipo pondrá en marcha nuestro framework de trabajo, el mismo que venimos corriendo para todos nuestros casos de éxito. En menos de doce semanas vas a experimentar un crecimiento significativo en tu facturación junto con un aumento en la notoriedad. ¿Qué garantía tenes? Más allá de nuestra extensa cartera de casos de éxito en comercio electrónico proponemos una modalidad única en donde si no vendés no pagás, vamos variabilizados completamente.</p>
      </div>
      <VideoPlayer VideoTop={VideoTop} VideoWidth={360} VideoHeight={"200"} VideoLeft={"12vw"}/>
      <VideoPlayer VideoTop={VideoTop} VideoWidth={360} VideoHeight={"200"}/>
      <VideoPlayer VideoTop={VideoTop} VideoWidth={360} VideoHeight={"200"}VideoLeft={"64vw"}/>
      <Vl2 VlTop={"620vh"} />
      <div className='hl3'></div>
      <div className='casos'>
        <h2 >Casos de éxito reales</h2>
        <p>Todos nuestros clientes en las primeras 12 semanas experimentan un crecimiento enorme en sus ventas. Te presentamos alguno de nuestros casos de éxito, con capturas de pantalla de sus cuentas publicitarias.
100% Resultados reales que podemos mostrarte en una llamada.</p>
      </div>
      <div className='images'>
        <ImageExpandable src="http://placehold.it/600x300" width="1000px" height="500px" />
      </div>
      <Vl2 VlTop={"910vh"} />
      <div className='consultoria'>
        <h2 >Consultoría gratuita</h2>
        <p>Agenda una videollamada de diagnóstico y consultoría totalmente gratuita. Nuestros especialistas realizarán un diagnóstico y te brindará una evaluación de posibles alterativas para tu plan de crecimiento!</p>
      </div>
      <div className='hl4'></div>
      <div className='calendly'>
        <div class="calendly-inline-widget" data-url="https://calendly.com/ejirouweghrepha"></div>
        <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
      </div>
     </div>
    );
}

export default App;
