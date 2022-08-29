import React from 'react'
import Hero from './components/Hero';
import Novels from './components/Novels'
import About from './components/About';
import Comentarios from './components/Comentarios';

import Navbar  from './components/Navbar';
import Tradutores from './components/Tradutores';

export default function App() {
    return (
      <>
        <Navbar />
        <Hero/>
        <Novels/>
        <About/>
        <Tradutores/>
        <Comentarios/>
      </>
    );
}