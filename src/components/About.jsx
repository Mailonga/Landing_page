import React from 'react'

const About = () => {
  return (
    <div name="About" className=" w-full my-15">
      <div className="max-w-[1240px] mx-auto">

        <div className='text-center font-serif flex flex-col px-6 mb-8'>
          <h2 className='text-4xl font-bold text-orange-600/80'>Para os Leitores:</h2>
          <p className='text-2xl text-orange-500/40 pb-4'>Trazemos para os leitores uma biblioteca portatil que cabe na palma
            da sua mão.
          </p>
          <h2 className='text-4xl font-bold text-orange-600/80'>Para os Tradutores e Autores:</h2>
          <p className='text-2xl text-orange-500/40'> Fornecemos um espaço para que os autores possam se expressar e para
            que os Tradutores possam publicar suas novels favoritas.
          </p>
        </div>


        <div className='grid md:grid-cols-3 text-center font-serif justify-between'>
          <div className='border rounded-xl shadow-xl py-2 m-4 bg-rose-400/10 sm:py-4 sm:px-6'>
            <span><i className="fa-solid fa-book text-orange-500 mt-2"></i></span>
            <p className='text-orange-800'>Mais de 500 Novels Registradas</p>
          </div>
          <div className='border rounded-xl shadow-xl py-2 m-4 bg-rose-400/10 sm:py-4 sm:px-6'>
            <span><i className="fa-solid fa-user text-orange-500 mt-2 w-6"></i></span>
            <p className='text-orange-800'> 100 Autores Cadastrados </p>
          </div>
          <div className='border rounded-xl shadow-xl py-2 m-4 bg-rose-400/10 sm:py-4 sm:px-6'>
            <span><i className="fa-solid fa-star text-orange-500 mt-2 w-6"></i></span>
            <p className='text-orange-800'>Mais de 250 Tradutores</p>
          </div>
        </div>


      </div>
    </div>
  )
}

export default About