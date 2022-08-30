import React from 'react'

import insta from "../components/assets/insta.svg"
import face from "../components/assets/face.svg"
import linkedin from "../components/assets/linkedin.svg"
import twitter from "../components/assets/twitter.svg"

const Footer = () => {
  return (
    <div className=' absolute w-full mt-10 bg-rose-600/50 text-orange-800 py-2 px-2 font-serif'>
      <div className='max-w-[1240px] mx-auro grid md:grid-cols-3 border-b-2 border-white py-8'>

        <div>
          <h6 className='font-bold uppercase text-lg pb-2 pt-4'>Para Você</h6>
          <ul>
            <li className='cursor-pointer hover:text-white'>Traduza</li>
            <li className='cursor-pointer hover:text-white'>Crie Novels</li>
            <li className='cursor-pointer hover:text-white'>Sugestões</li>
            <li className='cursor-pointer hover:text-white'>Políticas de Serviço</li>
            <li className='cursor-pointer hover:text-white'>Como Se Tornar Parceiro</li>
          </ul>
        </div>
        
        <div>
          <h6 className='font-bold uppercase text-lg pb-2 pt-4'>Nossa Comunidade</h6>
          <ul>
            <li className='cursor-pointer hover:text-white'>Central de Ajuda</li>
            <li className='cursor-pointer hover:text-white'>Parceiros</li>
            <li className='cursor-pointer hover:text-white'>Notícias</li>
          </ul>
        </div>

        <div>
          <h6 className='font-bold uppercase text-lg pb-2 pt-4'>Nos Encontre</h6>
          <ul>
            <li className='flex flex-row p-3 cursor-pointer hover:text-white'>
                <img src={insta} alt="Inst" className='pr-1' />
                Instagram
            </li>
            <li className='flex flex-row p-3 cursor-pointer hover:text-white'>
              <img src={face} alt="" className='pr-1' />
              Facebook
            </li>
            <li className='flex flex-row p-3 cursor-pointer hover:text-white'>
              <img src={twitter} alt="" className='pr-1' />
              Twitter
            </li>
            <li className='flex flex-row p-3 cursor-pointer hover:text-white'>
              <img src={linkedin} alt="" className='pr-1' />
              Linkedin
            </li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Footer