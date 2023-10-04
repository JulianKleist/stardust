import React, { useState } from 'react';
import './images.css';

const ImageExpandable = ({ src, width, height }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const imageStyle = {
    width: expanded ? width : 'auto',
    height: expanded ? height : 'auto',
    cursor: 'pointer',
  };

  return (
    <div className={`image-expandable ${expanded ? 'expanded' : ''}`} onClick={toggleExpand} style={imageStyle}>
      <div>
        <img src={src} alt="Imagen" />
        <p style={{color: "white"}}>E-commerce del segmento Moda/Fashion – Crecimiento del 1400% luego de comenzar a trabajar con nosotros.</p>
      </div>
      <div>
        <img src={src} alt="Imagen" />
        <p style={{color: "white"}}>E-commerce del segmento Moda/Fashion – Crecimiento del 1400% luego de comenzar a trabajar con nosotros.</p>
      </div>
      <div>
        <img src={src} alt="Imagen" />
        <p style={{color: "white"}}>E-commerce del segmento Moda/Fashion – Crecimiento del 1400% luego de comenzar a trabajar con nosotros.</p>
      </div>
      <div>
        <img src={src} alt="Imagen" />
        <p style={{color: "white"}}>E-commerce del segmento Moda/Fashion – Crecimiento del 1400% luego de comenzar a trabajar con nosotros.</p>
      </div>
      <div>
        <img src={src} alt="Imagen" />
        <p style={{color: "white"}}>E-commerce del segmento Moda/Fashion – Crecimiento del 1400% luego de comenzar a trabajar con nosotros.</p>
      </div>
      <div>
        <img src={src} alt="Imagen" />
        <p style={{color: "white"}}>E-commerce del segmento Moda/Fashion – Crecimiento del 1400% luego de comenzar a trabajar con nosotros.</p>
      </div>
      <div>
        <img src={src} alt="Imagen" />
        <p style={{color: "white"}}>E-commerce del segmento Moda/Fashion – Crecimiento del 1400% luego de comenzar a trabajar con nosotros.</p>
      </div>
      <div>
        <img src={src} alt="Imagen" />
        <p style={{color: "white"}}>E-commerce del segmento Moda/Fashion – Crecimiento del 1400% luego de comenzar a trabajar con nosotros.</p>
      </div>
    </div>
  );
};

export default ImageExpandable;