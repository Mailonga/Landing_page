import React from 'react'
let img1 = require("./assets/Tradutores.png")
let img2 = require("./assets/Tradutores2.jpg")

const Tradutores = () => {
  return (
    <div name="Tradutores" className="flex md:flex-row flex-col bg-red-500/10 md:py-16 sm:px-10 font-serif">
      <div className= "flex-1 flex justify-center items-start flex-col">
        <h2 className='font-bold sm:text-[28px] text-[30px] text-orange-500
        sm:leading-[50px] leading-[60px] w-full'> 
            Seja Você Um de Nós 
              <br className= "sm:block hidden"/>
            A Partir Desse Momento.
        </h2>
        <p className='max-w-[480px] mt-3 text-[16px] leading-[30px]'>
        Melhor equipe de tradutores para os melhores livros Você encontra! </p>
        <button className="hover:text-orange-500 sm:px-4 sm:py-2 sm:mt-2">Cadastre-se</button>
      </div>
      <div className="flex flex-col justify-start items-center mt-2 px-10">
        <img src={img2} alt="..." className='rounded-2xl drop-shadow-xl md:w-[350px] sm:w-[200px] sm:mt-2 object-contain mix-blend-overlay' />
        <img src={img1} alt="..." className='rounded-2xl drop-shadow-xl md:w-[350px] sm:w-[200px] sm:mt-2 object-contain mix-blend-overlay' />
      </div>
    </div>
  )
}

export default Tradutores