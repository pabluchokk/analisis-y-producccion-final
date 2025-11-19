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
            La Pregunta Prohibida de CNN, ¿cuál fue el costo humano de Mundial 2022?
          </h1>
          <p className='text-xl lg:text-2xl text-gray-600 font-serif leading-relaxed'>
            En medio del Mundial se hizo la pregunta más incómoda, ¿bajo cuantos cuerpos se construyeron esos estadios?
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
            La otra cara del estadio: antes de que llegaran las estrellas y los fanáticos, primero estuvieron los trabajadores.
          </figcaption>
        </figure>

        {/* CONTENIDO DEL ARTÍCULO (TEXTO ACTUALIZADO CON CIFRAS) */}
        <div className='prose prose-lg lg:prose-xl max-w-none text-gray-800 leading-loose'>
          <p>
            El pilar fundamental del análisis de la cobertura, "El Precio del Espectáculo". Basada en el artículo <a href="https://cnnespanol.cnn.com/2022/11/29/cuantos-muertos-estadios-mundial-qatar-orix" target="_blank" rel="noopener noreferrer" className="text-[#B83B5E] font-bold hover:text-[#6A2C70] transition-colors underline decoration-2 underline-offset-4">"¿Cuántos muertos dejó la construcción de los estadios para el Mundial en Qatar? Esto es lo que sabemos"</a>, esta pieza periodística retrata la postura editorial de <strong>CNN en Español</strong> en su momento más crítico: <strong>en pleno desarrollo de la Copa del Mundo</strong>.
          </p>
          <p>
            Y este factor es muy importante, la <strong>temporalidad</strong>. CNN decide hacer la pregunta que nadie quería escuchar. Donde desde 2010, cuando se confirmó a Qatar como sede del Mundial, y hasta la fecha, se repotaron cifras de hasta 6500 trabajadores muertos por las pobres condiciones laborales. Esta cifra fue desmentida por el Comite organizador del mundial en Qatar, donde solo confirmó <strong>tres</strong> muertes por accidentes laborales.
          </p>

          {/* RECUADRO DESTACADO */}
          <div className='my-14 p-10 bg-gray-50 border-l-8 border-[#6A2C70] rounded-r-xl shadow-sm'>
            <blockquote className='text-2xl font-medium text-gray-700 italic leading-relaxed'>
              "Esto es algo que debe quedar absolutamente claro. Absolutamente claro. El número de víctimas mortales en los estadios de la Copa del Mundo que están relacionadas con el trabajo son tres víctimas mortales. Hay algo más de 30 víctimas mortales que no están relacionadas con el trabajo". - Nasser al Khater (2021)
            </blockquote>
          </div>

          <p>
            Pero tras el comienzo del mundial, esa frase cambió y contrasta con la versión de Khater, Hassan Al-Thawadi, jefe máximo del Mundial de Qatar, reconoció que la cifra real de trabajadores migrantes muertos en la construcción de los estadios ascendía a <strong>"entre 400 y 500"</strong>.
          </p>
          
          <h3 className="text-3xl font-bold text-[#6A2C70] mt-12 mb-6">El Papel de la OIT</h3>
          <p>
            El informe de la OIT (Organización Internacional del Trabajo) no solo señaló los "vacíos en la recopilación de datos", sino que afirmó 50 muertes de trabajadores en 2020 por lesiones ocupacionales solo en Qatar, la mayoría en la construcción. El informe dijo que la manera de recopilar los datos que utiliza Qatar es ineficiente, según sus propios informes, la mayoría de trabajadores con lesiones leves, que son de unos 37.600, son migrantes de Bangladesh, India y Nepal. Además de remarcar que los trabajadores extranjeros conforman un 95% de la fuerza laboral en Qatar
          </p>
          <p>
            El Ministerio de Trabajo de Qatar señalo que estas cifras fueron "tremendamente engañosas".
          </p>

          <h3 className="text-3xl font-bold text-[#6A2C70] mt-12 mb-6">Amnistia Internacional exige una compensacion para los trabajadores</h3>
          <p>
            El grupo de derechos humanos instó a la FIFA a una compensación monetaria a los trabajadores que, afirman que sufrieron de abusos laborales. Y aunque, si bien reconocen los esfuerzos realizados para proteger los derechos de los trabajadores, pero Amnistía dice que ya es demasiado tarde.
          </p>
          <p>
            La FIFA reconoció el pedido del grupo y afirmo que se esta trabajando en la "implementacion de un proceso de diligencia y sin precedentes"
          </p>
      
          <p>
            En síntesis, CNN en pleno desarrollo del mundial, no fueron por el ámbito deportivo, y le da voz a aquellos grupos que hasta la fecha, siguen protestando por las vidas de los trabajadores y sus derechos, y tal parece que con el Mundial 2034 en Arabia Saudita al horizonte, no va a ser una sorpresa ver estos temás resurgir una vez más.
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
                  <span className='text-sm text-gray-600'>Donde el foco esta más en la copa que en las personas.</span>
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