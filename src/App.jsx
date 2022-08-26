import React from 'react'
import Hero from './components/Hero';
import Novels from './components/Novels'
import About from './components/About';
import Comentarios from './components/Comentarios';

import Navbar  from './components/Navbar';

export default function App() {
    return (
      <>
        <Navbar />
        <Hero/>
        <Novels/>
        <About/>
        <Comentarios/>
      </>
    );
}