import React from 'react'

let C1 = require("./assets/Coment1.png")
let C2 = require("./assets/Coment2.jpg")
let C3 = require("./assets/Coment3.png")
let C4 = require("./assets/Coment4.png")

const Comentarios = () => {
  return (
    <div name="Comentarios" className='flex justify-center items-center sm:py-10 py-5 flex-col relative font-serif'>

      <div />
      
      <div className='w-full flex justify-between items-center md:flex-row flex-col sm:mb-10 mb-5 relative z-[-1] sm:px-3'>
        
        <h1 className='sm:text-[25px] text-orange-500 sm:leading-[40px] leading-[50px] w-full'> 
          Comentários Diversos:
            <br className='sm:block hidden'/>
          Autores, Leitores e Tradutores.
        </h1>
        
        <div className='w-full md:mt-0 mt-6 md:ml-3'>
          <p className='text-left text-orange-400 text-[14px] leading-[25px] max-w-[320px] italic'>
            Suas Light Novels Preferidas 
            Na Palma da Sua Mão.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap md:justify-start sm:px-5 justify-center w-full relative z-[-1] font-serif">
          <div className="flex flex-col justify-between px-10 py-2 bg-rose-400/20 rounded-[20px] max-w-[200px]
          xl:mr-10 md:mr-5 mr-2 my-2">
              <i class="fa-solid fa-quote-left w-[30px] h-[40px] object-contain"></i> 
              <p className='text-[18px] leading-[36px] my-6'>Melhores Josei Novels Que Já Encontrei!!</p>
              <div className='flex flex-row'>
                  <img src={C1} alt="Luara Jarbas" className='w-[25px] h-[25px] rounded-full' />
                  <div className="flex flex-col ml-2">
                    <h4 className='text-[12px] leading-[24px]'>Luara Jarbas</h4>
                  </div>
              </div>
              <p className='font-normal sm:text-center text-[8px] leading-[16px]'>Tradutora Júnior</p>
          </div>
          
          <div className="flex flex-col justify-between px-10 py-2 bg-rose-400/20 rounded-[20px] max-w-[200px]
          xl:mr-10 md:mr-5 mr-2 my-2">
              <i class="fa-solid fa-quote-left w-[30px] h-[40px] object-contain"></i> 
              <p className='text-[18px] leading-[36px] my-6'>Ótimo Ambiente Para Publicar Suas Traduções.</p>
              <div className='flex flex-row'>
                  <img src={C2} alt="Jhonatas Barro" className='w-[25px] h-[25px] rounded-full' />
                  <div className="flex flex-col ml-2">
                    <h4 className='text-[12px] leading-[24px]'>Jhonatas Barro</h4>
                  </div>
              </div>
              <p className='font-normal sm:text-center text-[8px] leading-[16px]'>Tradutor Júnior</p>
          </div>
          
          <div className="flex flex-col justify-between px-10 py-2 bg-rose-400/20 rounded-[20px] max-w-[200px]
          xl:mr-10 md:mr-5 mr-2 my-2">
              <i class="fa-solid fa-quote-left w-[30px] h-[40px] object-contain"></i> 
              <p className='text-[18px] leading-[36px] my-6'>Espaço Que Permite Todos Viajarem Para Um Novo Mundo!</p>
              <div className='flex flex-row'>
                  <img src={C3} alt="Miranda Lemos" className='w-[25px] h-[25px] rounded-full' />
                  <div className="flex flex-col ml-2">
                    <h4 className='text-[12px] leading-[24px]'>Miranda Lemos</h4>
                  </div>
              </div>
              <p className='font-normal sm:text-center text-[8px] leading-[16px]'>Tradutora & Parceira</p>
          </div>

          <div className="flex flex-col justify-between px-10 py-2 bg-rose-400/20 rounded-[20px] max-w-[200px]
          xl:mr-10 md:mr-5 mr-2 my-2">
              <i class="fa-solid fa-quote-left w-[30px] h-[40px] object-contain"></i> 
              <p className='text-[18px] leading-[36px] my-6'>Construído Para Sua Expressão!</p>
              <div className='flex flex-row'>
                  <img src={C4} alt="Davino Verne" className='w-[25px] h-[25px] rounded-full' />
                  <div className="flex flex-col ml-2">
                    <h4 className='text-[12px] leading-[24px]'>Davino Verne</h4>
                  </div>
              </div>
              <p className='font-normal sm:text-center text-[8px] leading-[16px]'>Parceiro</p>
          </div>
      </div>

    </div>
  )
}

export default Comentarios