import React from 'react'
import Navbar from '../Navbar'
import Footer from "../Footer";
import PortadaNosotros from '../PortadaNosotros';
import Comunidad from '../Comunidad';

const contacto = () => {
  return (
    <main>
      <Navbar />
      <PortadaNosotros />
      <Comunidad />
      <Footer />    
    </main>
  );
}

export default contacto