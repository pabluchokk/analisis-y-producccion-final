import React from 'react'
import { Link } from 'react-router-dom'

const nota5 = () => {
  return (
    <article className='bg-white'>
      {/* Contenedor del articulo */}
      <div className='container mx-auto max-w-3xl py-12 px-6'>

        {/* Encabezado de la nota */}
        <header className='mb-8'>
          <p className='text-blue-600 font-semibold text-lg uppercase tracking-wide'>
            Análisis de cobertura: CNN
          </p>
          <h1 className='text-4xl lg:text-5xl font-extrabold text-gray-900 my-3'>
            El costo humano: La postura de CNN sobre las Muertes en Qatar
          </h1>
          <p className='text-xl lg:text-2xl text-gray-600 italic'>
            El medio cierra el círculo de su postura crítica. Al preguntar "¿Cuántos muertos?", CNN pone el foco en la cifra que otros medios deportivos prefirieron ignorar durante la "fiesta" del Mundial.
          </p>
        </header>

        {/* IMAGEN DE LA NOTA */}
        <img src="" alt="" />

        {/* Cuerpo de la nota */}
        <div className='prose prose-lg lg:prose-xl max-w-none text-gray-800'>
          <p>
            Llegamos a la nota final del análisis, y es la más contundente. Basada en el artículo <a href="https://cnnespanol.cnn.com/2022/11/29/cuantos-muertos-estadios-mundial-qatar-orix" target="_blank" rel="noopener noreferrer">"¿Cuántos muertos hubo en los estadios..."</a>, esta cobertura encapsula la postura de *CNN en Español*.
          </p>
        </div>
      </div>
    </article>
  )
}

export default nota5