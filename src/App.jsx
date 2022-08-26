import React from 'react'
import Hero from './components/Hero';
import Novels from './components/Novels'

import Navbar  from './components/Navbar';

export default function App() {
    return (
      <>
        <Navbar />
        <Hero/>
        <Novels/>
      </>
    );
}