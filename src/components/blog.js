import React from 'react';
import './blog.css'

class Blog extends React.Component {
  render() {
    return (
      <div className='Blog'>
        <div className='blog_container'>
            <img src={"http://placehold.it/300x250"}></img>
            <h2>Marcas de ropa: 3 ideas de funnels</h2>
            <p>El marketing digital es una herramienta clave para las marcas de ropa que buscan llegar a su audiencia objetivo y aumentar sus ventas. Uno de</p>
            <a>LEER POST</a>
        </div>
        <div className='blog_container'>
            <img src={"http://placehold.it/300x250"}></img>
            <h2>Marcas de ropa: 3 ideas de funnels</h2>
            <p>El marketing digital es una herramienta clave para las marcas de ropa que buscan llegar a su audiencia objetivo y aumentar sus ventas. Uno de</p>
            <a>LEER POST</a>
        </div>
        <div className='blog_container'>
            <img src={"http://placehold.it/300x250"}></img>
            <h2>Marcas de ropa: 3 ideas de funnels</h2>
            <p>El marketing digital es una herramienta clave para las marcas de ropa que buscan llegar a su audiencia objetivo y aumentar sus ventas. Uno de</p>
            <a>LEER POST</a>
        </div>
      </div>
    );
  }
}

export default Blog;