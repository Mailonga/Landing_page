import React from 'react'

const HImg = require("./assets/H-Img.webp")
const HImg2 = require("./assets/H-Img2.webp")

const Hero = () => {
  return (
    <div className='w-full h-screen bg-orange-100/80 flex flex-col justify-between font-serif'>
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className='flex flex-col justify-center md:items-start px-2 py-4'>
          <p className='text-2xl sm:mt-2'>Chinese Light Novels</p>
          <p className='text-4xl font-bold'>Publicação & Tradução</p>
          <p className='text-2xl'>Faça Aqui Suas Traduções</p>
          <button className='px-2 py-2 hover:text-orange-800'>Começe Agora</button>
        </div>

        <div className="justify-between">
          <img src={HImg} alt="..." className='rounded-2xl drop-shadow-xl md:w-[280px] mb-1 float-right sm:w-[200px]' />
          <img src={HImg2} alt="..." className='rounded-2xl drop-shadow-xl md:w-[260px] sm:w-[170px] ' />
        </div>
        <div className="absolute flex flex-col md:min-w-[580px] md:bottom-[-5%]
          mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-orange-100 border border-orange-200/50 
          rounded-xl text-center shadow-xl sm:bottom-[-15%]">
          <p className='py-2'>Novels</p>
          <div className='flex justify-between flex-wrap px-2'>
            <p className='py-1 m-1'> <i className="fa-solid fa-language text-orange-500/80 p-2"></i>Traduções</p>
            <p className='py-1 m-1'> <i className="fa-solid fa-pen-nib text-orange-500/80 p-2"></i>Originais Publicadas</p>
            <p className='py-1 m-1'> <i className="fa-solid fa-tv text-orange-500/80 p-2"></i>Adaptadas para TV</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Hero