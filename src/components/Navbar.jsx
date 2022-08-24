import React, {useState} from 'react'

const logo = require("./assets/logo_size.jpg")

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const Click = () => setNav(!nav)

  return (
    <div className='bg-rose-600/20 h-[50px] w-screen fixed drop-shadow-lg '>
      <div className='px-3 flex w-full h-full justify-between items-center'>
        <div className='flex items-center'>
          <img src={logo} alt="LightNovels" className='w-12 mr-4 p-[3px] xl:w-15' />
          <ul className='hidden md:flex text-orange-800'>
            <li>Home</li>
            <li>Novels</li>
            <li>Tradutores</li>
            <li>Sobre Nós</li>
            <li>Contato</li>
          </ul>
        </div>
        <div className='hidden md:flex pr-4'>
          <button className='border-none bg-transparent text-orange-800 mr-4'>Inscreva-se</button>
          <button className='px-4 py-2'>Entrar</button>
        </div>
        <div className="md:hidden" onClick={Click}>
          {!nav ? <i className="fa-solid fa-bars text-orange-800"></i> : <i class="fa-solid fa-xmark text-orange-800"></i>}
        </div>
      </div>


      <ul className={!nav ? 'hidden' : 'absolute bg-rose-600/20 w-full px-6'}>
        <li className='border-b-2 border-rose-600/40 w-full'>Home</li>
        <li className='border-b-2 border-rose-600/40 w-full'>Novels</li>
        <li className='border-b-2 border-rose-600/40 w-full'>Tradutores</li>
        <li className='border-b-2 border-rose-600/40 w-full'>Sobre Nós</li>
        <li className='border-b-2 border-rose-600/40 w-full'>Contato</li>
        <div className='my-4'>
          <button className='border-none bg-transparent text-orange-800 mr-4'>Inscreva-se</button>
          <button className='px-4 py-2'>Entrar</button>
        </div>
      </ul>
    </div>
  )
}

export default Navbar