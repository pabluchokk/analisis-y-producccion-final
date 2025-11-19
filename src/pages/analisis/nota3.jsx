// src/pages/analisis/nota3.jsx

import React from 'react'
import { Link } from 'react-router-dom'

const Nota3 = () => {
  return (
    <article className='bg-white min-h-screen'>
      {/* CONTENEDOR DEL ARTÍCULO */}
      <div className='container mx-auto max-w-4xl py-16 px-6 lg:px-8'>
        
        {/* TITULO JUGADO */}
        <header className='mb-10 border-b-4 border-[#F08A5D] pb-8'>
          <p className='text-[#6A2C70] font-bold text-sm tracking-widest uppercase mb-2'>
            Análisis de cobertura: CNN en Español
          </p>
          <h1 className='text-4xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight'>
            Ganador por default: el ascenso saudí
          </h1>
          <p className='text-xl lg:text-2xl text-gray-600 font-serif leading-relaxed'>
            Como la FIFA convirtió la elección de la sede más importante del mundo en un simple trámite burocrático sin rivales.
          </p>
        </header>

        {/* IMAGEN */}
        <figure className='mb-12'>
          <img 
            src="/arabia2034.jpg" 
            alt="Infantino y el poder saudí" 
            className='w-full h-auto rounded-xl shadow-xl object-cover max-h-[500px]'
          />
          <figcaption className='mt-3 text-sm text-gray-500 italic text-center'>
            La foto del acuerdo: Infantino celebra la "unidad" en un proceso donde la competencia brilló por su ausencia.
          </figcaption>
        </figure>

        {/* CONTENIDO DEL ARTÍCULO */}
        <div className='prose prose-lg lg:prose-xl max-w-none text-gray-800 leading-loose'>
          <p>
            En el periodismo deportivo tradicional, la elección de una sede mundialista se narra con emoción. Pero en la cobertura de <strong>CNN en Español</strong> específicamente sobre el Mundial 2034, esa narrativa de competencia desaparece por completo. La nota titulada <a href="https://cnnespanol.cnn.com/2023/10/31/arabia-saudita-se-perfila-unico-candidato-buscara-mundial-2034-orix" target="_blank" rel="noopener noreferrer" className="text-[#B83B5E] font-bold hover:text-[#6A2C70] transition-colors underline decoration-2 underline-offset-4">"Australia renunció a su candidatura y Arabia Saudita se perfila para organizar el Mundial 2034"</a> no relata una victoria deportiva, relata un <strong>trámite</strong>.
          </p>
          <p>
            El medio expone cómo la "carrera" terminó antes de empezar: El análisis se centra en las maniobras de la FIFA: acelerar los plazos (solo 25 días para confirmar interés) y restringir la elegibilidad a Asia y Oceanía por rotación. Estos movimientos, combinados, dejaron a Riyadh como la única opción viable, especialmente tras la retirada de Australia.
          </p>

          {/* RECUADRO DESTACADO */}
          <div className='my-14 p-10 bg-gray-50 border-l-8 border-[#6A2C70] rounded-r-xl shadow-sm'>
            <blockquote className='text-2xl font-medium text-gray-700 italic leading-relaxed'>
              "La postura de CNN es demoledora: al presentar la candidatura única como un 'trámite', despoja a la FIFA de su máscara democrática y la expone como una corporación que cierra acuerdos comerciales a puertas cerradas".
            </blockquote>
          </div>

          {/* --- SUBTÍTULO CON FRASE ARGENTA --- */}
          <h3 className="text-3xl font-bold text-[#6A2C70] mt-12 mb-6">
            "Billetera Mata Galán"
          </h3>
          <p>
            El análisis del discurso es fundamental en esta nota. Se confirma el viejo dicho, pero a escala global: <strong>billetera mata galán</strong>. Australia, (el "galán" que intentó competir) no pudo presentarse ante la maquinaria de recursos ilimitados. CNN pone la lupa sobre las palabras de Gianni Infantino, presidente de la FIFA, quien celebra públicamente el <strong>"consenso"</strong> y la <strong>"unidad"</strong>, contrastando esta retórica oficial con los hechos: la unidad se logró por la eliminación sistemática de alternativas.
          </p>
          <p>
            Esta cobertura pone en evidencia la violación de los propios compromisos que la FIFA adopta en 2017. El problema no es solo que Arabia Saudita sea un país cuestionable; es que la FIFA fue cómplice activa al ignorar sus propios principios para facilitar una candidatura por motivos comerciales.
          </p>
          
          <h3 className="text-3xl font-bold text-[#6A2C70] mt-12 mb-6">El silencio institucional</h3>
          <p>
            Otro punto fuerte del análisis del papel de los demás actores. Al resaltar que la Confederación Asiática de Fútbol apoyó en bloque a Arabia Saudita, CNN identifica un mapa de lealtades políticas y económicas que trascienden lo deportivo. El resultado final del artículo es contundente: el partido se jugó en el escritorio, y Arabia Saudita ganó por <strong>default</strong>.
          </p>
          <p>
            La nota subraya el riesgo. Mohammed bin Salman, príncipe heredero saudí dijo en Fox News que no le "importaba" si lo llamaban <strong>sportswashing</strong> mientras aumentara el PIB. Este dato, junto con la rapidez del proceso de selección, consolida la tesis de CNN: la FIFA validó el uso del fútbol como una herramienta de inversión puramente egoísta.
          </p>
          

          {/* --- BANNER PUBLICITARIO EMBEBIDO (Vertical/Branca) --- */}
          <div className="w-full my-10 flex justify-center">
            <a href="https://www.branca.com.ar" target="_blank" rel="noopener noreferrer" 
               className="block max-w-sm mx-auto shadow-lg overflow-hidden rounded-lg">
              <img 
                src="/anuncio3.jpg" 
                alt="Publicidad Fernet Branca" 
                className="w-full h-auto object-contain" 
              />
            </a>
          </div>
          {/* --- FIN BANNER EMBEBIDO --- */}

          {/* CAJA DE SIGUIENTES PASOS */}
          <div className='mt-16 p-10 bg-gray-100 rounded-2xl border border-gray-200'>
            <h4 className='text-2xl font-bold text-[#6A2C70] mb-6 border-b border-gray-300 pb-4'>
              Continúa la investigación:
            </h4>
            <ul className='space-y-6'>
              <li className='flex items-start group'>
                <span className='text-[#F08A5D] mr-4 text-2xl transition-transform group-hover:translate-x-1'>➜</span>
                <div>
                  <Link to="/analisis/nota4" className='text-lg font-semibold text-gray-800 hover:text-[#F08A5D] transition-colors block'>
                    Siguiente nota: La "Herida Abierta" de Qatar
                  </Link>
                  <span className='text-sm text-gray-600'>Cómo CNN usa a Amnistía Internacional como fuente de verdad.</span>
                </div>
              </li>
              <li className='flex items-start group'>
                <span className='text-[#B83B5E] mr-4 text-2xl transition-transform group-hover:translate-x-1'>➜</span>
                <div>
                  <Link to='/contrapunto' className='text-lg font-semibold text-gray-800 hover:text-[#B83B5E] transition-colors block'>
                    Ver el Contrapunto: La cobertura de Diario Olé
                  </Link>
                  <span className='text-sm text-gray-600'>Donde la política de la FIFA es solo un detalle burocrático.</span>
                </div>
              </li>
            </ul>
            
            <div className="mt-8 pt-6 border-t border-gray-300 text-sm text-right">
              Fuente original analizada: <a href="https://cnnespanol.cnn.com/2023/10/31/arabia-saudita-se-perfila-unico-candidato-buscara-mundial-2034-orix" target='_blank' rel='noopener noreferrer' className='text-[#06B6D4] hover:text-[#0F172A] font-medium underline decoration-1 underline-offset-2'>CNN en Español</a>
            </div>
          </div>

        </div>
      </div>
    </article>
  )
}

export default Nota3