import React, { useState } from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'




const logo = require("./assets/logo_size.jpg")

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const Click = () => setNav(!nav)

  return (
    <div className=' h-[50px] w-screen z-10 bg-rose-600 fixed drop-shadow-lg font-serif'>
      <div className='px-2 flex w-full h-full justify-between items-center'>
        <div className='flex items-center'>
          <img src={logo} alt="LightNovels" className='w-12 mr-4 p-[3px] xl:w-15' />
          <ul className='hidden md:flex text-orange-300'>
            <li className='hover:text-white cursor-pointer'>
              <Link to="Home" smooth={true} offset={20} duration={500}>
                Home
              </Link>
            </li>
            <li className='hover:text-white cursor-pointer'>
              <Link to="Novels" smooth={true} offset={-50} duration={500}>
                Novels
              </Link>
            </li>
            <li className='hover:text-white cursor-pointer'>
              <Link to="Tradutores" smooth={true} offset={-50} duration={500}>
                Tradutores
              </Link>
            </li>
            <li className='hover:text-white cursor-pointer'>
              <Link to="About" smooth={true} offset={-60} duration={500}>
                Sobre Nós
              </Link>
            </li>
            <li className='hover:text-white cursor-pointer'>
              <Link to="Comentarios" smooth={true} offset={-30} duration={500}>
                Views
              </Link>
            </li>
            <li className='hover:text-white cursor-pointer '>
              <Link to="Videos" smooth={true} offset={-80} duration={500}>
                Teaser
              </Link>
            </li>
          </ul>
        </div>
        <div className='hidden md:flex pr-4'>
          <button className='border-none bg-transparent text-orange-300 mr-4'>Inscreva-se</button>
          <button className='px-4 py-2'>Entrar</button>
        </div>
        <div className="md:hidden" onClick={Click}>
          {!nav ? <i className="fa-solid fa-bars text-orange-400 px-4"></i> : <i class="fa-solid fa-xmark text-orange-400 px-4"></i>}
        </div>
      </div>


      <ul className={!nav ? 'hidden' : 'absolute bg-rose-600 w-full px-6 text-center'}>
        <li className='hover:text-white cursor-pointer border-b-2 border-rose-800/90 w-full  text-orange-400'>
          <Link to="Home" smooth={true} offset={20} duration={500}>
            Home
          </Link>
        </li>
        <li className='hover:text-white cursor-pointer border-b-2 border-rose-800/90 w-full  text-orange-400'>
          <Link to="Novels" smooth={true} offset={-50} duration={500}>
            Novels
          </Link>
        </li>
        <li className='hover:text-white cursor-pointer border-b-2 border-rose-800/90 w-full  text-orange-400'>
          <Link to="Tradutores" smooth={true} offset={-50} duration={500}>
            Tradutores
          </Link>
        </li>
        <li className='hover:text-white cursor-pointer border-b-2 border-rose-800/90 w-full  text-orange-400'>
          <Link to="About" smooth={true} offset={-60} duration={500}>
            Sobre Nós
          </Link>
        </li>
        <li className='hover:text-white cursor-pointer border-b-2 border-rose-800/90 w-full  text-orange-400'>
          <Link to="Comentarios" smooth={true} offset={-30} duration={500}>
            Views
          </Link>
        </li>
        <li className='hover:text-white cursor-pointer border-b-2 border-rose-800/90 w-full  text-orange-400'>
          <Link to="Videos" smooth={true} offset={-30} duration={500}>
            Teaser
          </Link>
        </li>
        <div className='my-4'>
          <button className='border-none bg-transparent text-orange-400 mr-4'>Inscreva-se</button>
          <button className='px-4 py-2'>Entrar</button>
        </div>
      </ul>
    </div>
  )
}

export default Navbar