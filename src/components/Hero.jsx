import React from 'react'

const HImg = require("./assets/H-Img.webp")

const Hero = () => {
  return (
    <div className='w-full h-screen bg-orange-200/50 flex flex-col justify-between font-serif'>
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
         <div className='flex flex-col justify-center md:items-start w-full px-2 py-8 my-6'>
           <p className='text-2xl'>Chinese Light Novels</p>
           <p className='text-4xl font-bold'>Publicação & Tradução</p>
           <p className='text-2xl my-2'>Faça Aqui Suas Traduções</p>
           <button className='px-2 py-2 hover:text-orange-800'>Começe Agora</button>
         </div>

         <div className='m-0'>
              <img src={HImg} alt="..." className='rounded-xl drop-shadow-2xl'/>
         </div>
      </div>
    </div>
  )
}

export default Hero