import React from 'react'
import Hero from './components/Hero';
import Novels from './components/Novels'
import About from './components/About';
import Comentarios from './components/Comentarios';
import Footer from './components/Footer';

import Navbar  from './components/Navbar';
import Tradutores from './components/Tradutores';
import Video from './components/Video';

export default function App() {
    return (
      <>
        <Navbar />
        <Hero/>
        <Novels/>
        <About/>
        <Tradutores/>
        <Comentarios/>
        <Video/>
        <Footer/>
      </>
    );
}