// src/pages/analisis/nota5.jsx

import React from 'react'
import { Link } from 'react-router-dom'

const Nota5 = () => {
  return (
    <article className='bg-white min-h-screen'>
      {/* CONTENEDOR DEL ARTÍCULO */}
      <div className='container mx-auto max-w-4xl py-16 px-6 lg:px-8'>
        
        {/* TITULO JUGADO */}
        <header className='mb-10 border-b-4 border-[#F08A5D] pb-8'>
          <p className='text-[#6A2C70] font-bold text-sm tracking-widest uppercase mb-2'>
            Análisis de cobertura: CNN
          </p>
          <h1 className='text-4xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight'>
            La Pregunta Prohibida: CNN y el Cálculo Mortal de la Copa
          </h1>
          <p className='text-xl lg:text-2xl text-gray-600 font-serif leading-relaxed'>
            En pleno éxtasis mundialista, CNN rompe el pacto de silencio con la nota más incómoda: un recuento forense de las vidas que costó el espectáculo.
          </p>
        </header>

        {/* IMAGEN */}
        <figure className='mb-12'>
          <img 
            src="/workers.jpg" // Asegurate que esta imagen esté en /public
            alt="Trabajadores migrantes en Qatar" 
            className='w-full h-auto rounded-xl shadow-xl object-cover max-h-[500px]'
          />
          <figcaption className='mt-3 text-sm text-gray-500 italic text-center'>
            La otra cara del estadio: CNN ilustra no con la obra terminada, sino con los obreros que la hicieron posible.
          </figcaption>
        </figure>

        {/* CONTENIDO DEL ARTÍCULO (TEXTO ACTUALIZADO CON CIFRAS) */}
        <div className='prose prose-lg lg:prose-xl max-w-none text-gray-800 leading-loose'>
          <p>
            Llegamos a la quinta y última nota del análisis, el pilar fundamental de la tesis "El Precio del Espectáculo". Basada en el artículo <a href="https://cnnespanol.cnn.com/2022/11/29/cuantos-muertos-estadios-mundial-qatar-orix" target="_blank" rel="noopener noreferrer" className="text-[#B83B5E] font-bold hover:text-[#6A2C70] transition-colors underline decoration-2 underline-offset-4">"¿Cuántos muertos hubo en los estadios..."</a>, esta pieza periodística encapsula la postura editorial de <strong>CNN en Español</strong> en su momento más crítico: **durante el desarrollo mismo del torneo**.
          </p>
          <p>
            El factor determinante aquí es la <strong>temporalidad</strong>. Publicada en el clímax de la "fiesta del fútbol", CNN decide hacer la pregunta que nadie quería escuchar. La nota inmediatamente expone la gran contradicción en las cifras: el Comité Supremo de Qatar insistía en <strong>tres víctimas mortales</strong> relacionadas con accidentes laborales en los estadios.
          </p>

          {/* RECUADRO DESTACADO */}
          <div className='my-14 p-10 bg-gray-50 border-l-8 border-[#6A2C70] rounded-r-xl shadow-sm'>
            <blockquote className='text-2xl font-medium text-gray-700 italic leading-relaxed'>
              "Al preguntar '¿Cuántos muertos?', CNN no busca una simple cifra estadística. Utiliza la pregunta retórica para afirmar una tesis política: los números oficiales son una mentira de estado diseñada para ocultar una tragedia humanitaria".
            </blockquote>
          </div>

          <p>
            El análisis de CNN no se detiene en la negación oficial. Contrasta la versión del Comité con la admisión del propio jefe del Mundial, Hassan Al-Thawadi, quien reconoció que la cifra real de trabajadores migrantes muertos en proyectos relacionados ascendía a <strong>"entre 400 y 500"</strong>. Esta discrepancia de cientos de muertes entre las propias autoridades es el núcleo de la denuncia periodística de CNN.
          </p>
          
          <h3 className="text-3xl font-bold text-[#6A2C70] mt-12 mb-6">La Inconsistencia de los Datos y el Papel de la OIT</h3>
          <p>
            El medio refuerza su postura citando fuentes independientes. El informe de la OIT (Organización Internacional del Trabajo) no solo señaló los "vacíos en la recopilación de datos", sino que documentó 50 muertes de trabajadores en 2020 por lesiones ocupacionales solo en Qatar, la mayoría en la construcción. Esto validó la postura de CNN de que las muertes eran sistemáticas y no accidentales.
          </p>
          <p>
            La nota cierra el círculo narrativo que hemos analizado:
            <ul className="list-disc pl-5 mt-4 space-y-2 text-gray-700">
                <li>El artículo fue un acto de resistencia contra el silencio que la FIFA buscaba imponer (Nota 3).</li>
                <li>Demostró el costo humano y literal de la estrategia de <strong>Soft Power</strong> (Nota 2).</li>
                <li>Y validó el reclamo urgente de compensación que Amnistía Internacional exigía (Nota 4).</li>
            </ul>
          </p>
          
          <p>
            En conclusión, mientras el periodismo deportivo celebró el "Mundial de Messi", CNN cubrió el "Mundial de la Vergüenza". Ambas coberturas coexistieron, pero ofrecieron al público dos realidades irreconciliables, demostrando el poder del periodismo de denuncia frente al espectáculo.
          </p>

          {/* CAJA DE SIGUIENTES PASOS */}
          <div className='mt-20 p-10 bg-gray-100 rounded-2xl border border-gray-200'>
            <h4 className='text-2xl font-bold text-[#6A2C70] mb-6 border-b border-gray-300 pb-4'>
              Cierre de la investigación:
            </h4>
            <ul className='space-y-6'>
              <li className='flex items-start group'>
                <span className='text-[#F08A5D] mr-4 text-2xl transition-transform group-hover:translate-x-1'>➜</span>
                <div>
                  <Link to="/entrevista" className='text-lg font-semibold text-gray-800 hover:text-[#F08A5D] transition-colors block'>
                    Leer la Entrevista Exclusiva
                  </Link>
                  <span className='text-sm text-gray-600'>La Lic. Ralo Venditti explica por qué, a pesar de todo esto, la estrategia de Qatar funcionó.</span>
                </div>
              </li>
              <li className='flex items-start group'>
                <span className='text-[#B83B5E] mr-4 text-2xl transition-transform group-hover:translate-x-1'>➜</span>
                <div>
                  <Link to='/contrapunto' className='text-lg font-semibold text-gray-800 hover:text-[#B83B5E] transition-colors block'>
                    Ver el Contrapunto: La cobertura de Diario Olé
                  </Link>
                  <span className='text-sm text-gray-600'>Donde la fiesta del fútbol no dejó espacio para estas preguntas.</span>
                </div>
              </li>
            </ul>
            
            <div className="mt-8 pt-6 border-t border-gray-300 text-sm text-right">
              Fuente original analizada: <a href="https://cnnespanol.cnn.com/2022/11/29/cuantos-muertos-estadios-mundial-qatar-orix" target='_blank' rel='noopener noreferrer' className='text-[#06B6D4] hover:text-[#0F172A] font-medium underline decoration-1 underline-offset-2'>CNN en Español</a>
            </div>
          </div>

          {/* BANNER PUBLICITARIO EMBEBIDO */}
          <div className="w-full my-8 flex justify-center">
            <a href="https://www.rexona.com/ar/products/hombre.html?gad_source=1&gad_campaignid=22058928198&gclid=EAIaIQobChMIn5n0_db8kAMVaFVIAB3L1Cw_EAAYASAAEgK2CfD_BwE" target="_blank" rel="noopener noreferrer" 
               className="block max-w-xs sm:max-w-sm mx-auto shadow-lg overflow-hidden rounded-lg">
              <img 
                src="/anuncio5.jpg" 
                alt="Publicidad Rexona" 
                className="w-full h-auto object-contain" 
              />
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Nota5;