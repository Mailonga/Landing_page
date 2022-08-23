import React from 'react'
import { Navbar, Cards, Comentarios, Contato, Footer, Hero, Novels, About } from "./components";

const App = () => {
  return (
    <div>
      <div>
        <div>
          <Navbar />
        </div>
      </div>

      <div>
        <div>
          <Hero />
        </div>
      </div>

      <div>
        <div>
          <Novels />
          <Cards />
          <Comentarios />
          <About />
          <Contato />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default App