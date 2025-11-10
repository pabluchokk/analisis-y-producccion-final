import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      {/* 1. SECCION PRINCIPAL */}
      <main className='bg-gray-900 text-white border-b-4 border-blue-600'>
        <div className='container mx-auto flex flex-col items-center text-center py-24 px-6 min-h-[60vh] justify-center'>

            {/* TITULO */}
            <h1 className='text-5xl font-extrabold uppercase tracking-tight text-cyan-400 mb-5'>
              EL PRECIO DEL ESPECTÁCULO
            </h1>

            {/* BAJADA */}
            <h2 className='text-2xl font-light text-gray-200 italic max-w-3xl mb-8'>
              Un análisis de la postura de <i>CNN en Español</i> sobre el costo humano en Medio Oriente, en contrapunto con la "fiesta" mediatica del <i>Diario Olé</i>
            </h2>

            <p className='text-lg text-gray-300 max-w-2xl mb-10'>
              Este trabajo práctico final investiga la cobertura mediática del "sportswashing" en Medio Oriente. Se analiza la postura de <strong className='font-semibold text-white'>CNN en Español</strong> que encuadra el fenómeno como un problema geopolítico y de derechos humanos, contrastándolo con <strong className='font-semibold text-white'>Diario Olé</strong> y su cobertura centrada en la épica.
            </p>

            {/* BOTON */}
            <Link
            to='analisis/nota1'
            className='bg-blue-600 text-white font-bold text-lg uppercase px-8 py-4 rounded-md hover:bg-blue-500 transition-colors duration-300 transform hover:-translate-y-0.5'
            >
              Leer análisis
            </Link>
        </div>
      </main>

      {/* 2. SECCION DE PUBLICIDAD */}
      <aside className='bg-gray-100 py-16'>
        <div className='container mx-auto text-center px-6'>
          <h3 className='text-sm font-semibold text-gray-500 mb-6 uppercase tracking-wider'>
            Espacio publicitario
          </h3>
          {/* PUBLICIDADES NO CONTRADICTORIAS */}
          <div className='flex justify-center gap-8 flex-wrap'>
            <div className='border-2 border-dashed border-gray-300 p-6 bg-white max-w-sm'>
              <p className='font-bold text-gray-800'>Amnistía Internacional</p>
              <p className='text-gray-600'>Investigación sobre Derechos Humanos en el Deporte.</p>
            </div>
            <div className='border-2 border-dashed border-gray-300 p-6 bg-white max-w-sm'>
              <p className='font-bold text-gray-800'>Revista UCINA</p>
              <p className='text-gray-600'>Análisis de Relaciones Internacionales y Soft Power.</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Home