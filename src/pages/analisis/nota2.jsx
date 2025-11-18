// src/pages/analisis/nota2.jsx

import React from 'react'
import { Link } from 'react-router-dom'

const Nota2 = () => {
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
            Cuando la billetera atrae a las estrellas
          </h1>
          {/* --- BAJADA CORREGIDA --- */}
          <p className='text-xl lg:text-2xl text-gray-600 font-serif leading-relaxed'>
            CNN analiza la estrategia: Arabia Saudita no compra jugadores, sino un lugar en la mesa chica del poder mundial.
          </p>
        </header>

        {/* IMAGEN */}
        <figure className='mb-12'>
          <img 
            src="/infantinoArabia.jpg" 
            alt="Cristiano Ronaldo en el Al-Nassr" 
            className='w-full h-auto rounded-xl shadow-xl object-cover max-h-[500px]'
          />
          <figcaption className='mt-3 text-sm text-gray-500 italic text-center'>
            La gran bomba: el anuncio del fichaje de Cristiano Ronaldo presentado como jugador del Al-Nassr.
          </figcaption>
        </figure>

        {/* CONTENIDO DEL ARTÍCULO */}
        <div className='prose prose-lg lg:prose-xl max-w-none text-gray-800 leading-loose'>
          <p>
            Si la cobertura de un medio deportivo tradicional se pregunta "¿Cómo formará el equipo?", la cobertura de <strong>CNN en Español</strong> sobre el ascenso del fútbol árabe les lleva a preguntarse: "¿Quién es el dueño de la pelota?". La nota titulada <a href="https://cnnespanol.cnn.com/2023/09/20/arabia-saudita-alterar-orden-mundial-futbol-motivos-podrian-sorprenderte-trax" target="_blank" rel="noopener noreferrer" className="text-[#B83B5E] font-bold hover:text-[#6A2C70] transition-colors underline decoration-2 underline-offset-4">"Arabia Saudita intenta alterar el orden mundial del fútbol. Los motivos podrían sorprenderte"</a> marca un quiebre definitivo: el fútbol ha dejado de ser un deporte para convertirse en una industria extractiva de influencia.
          </p>
          <p>
            No se habla de "fichajes estrella", "mercado de pases" ni de "la liga donde los mejores juegan". Se habla de <strong>activos estatales</strong>. Al vincular directamente la Liga Saudí con la "Visión 2030" y el Fondo de Inversión Pública (PIF), el medio separa al fútbol de su romanticismo y lo expone como lo que es en este contexto: una herramienta para un país que busca sobrevivir al fin de la era del petróleo.
          </p>

          {/* RECUADRO DESTACADO */}
          <div className='my-14 p-10 bg-gray-50 border-l-8 border-[#6A2C70] rounded-r-xl shadow-sm'>
            <blockquote className='text-2xl font-medium text-gray-700 italic leading-relaxed'>
              "CNN no narra una competencia deportiva, narra un negocio en el poder global. Los goles de Cristiano Ronaldo son pasan por alto; lo relevante es el mensaje de fuerza financiera que su presencia envía a Occidente".
            </blockquote>
          </div>

          <h3 className="text-3xl font-bold text-[#6A2C70] mt-12 mb-6">
            "La plata esta para gastarla"
          </h3>
          <p>
            La "historia" y la "tradición" de los clubes europeos ya no pueden competir contra la el poderío económico del Fondo Soberano Saudí, donde para aquel jugador que pasa sus últimos días como profesional, ve con buenos ojos la oferta saudí. El lenguaje utilizado en la nota es el de las finanzas, luego lo que sucede en la cancha pasa a un segundo plano.
          </p>
          <p>
            La nota pone al fútbol en la misma bolsa que el Golf (LIV) y la Fórmula 1. Para el encuadre de CNN, no hay diferencia entre un Gran Premio y un partido de la liga local; ambos son vitrinas globales compradas al contado para lavar la imagen del reino, atraer turismo de lujo y legitimar al régimen ante la comunidad internacional.
          </p>

          <h3 className="text-3xl font-bold text-[#6A2C70] mt-12 mb-6">El Nuevo Contrato Social</h3>
          <p>
            La nota introduce un concepto fundamental: el <strong>nuevo contrato social</strong> con la Generación Z. La fórmula es simple: "Quieres a Ronaldo? Ya lo tienes. [...] Pero no nos cuestiones".
          </p>
          <p>
            Esta dinámica convierte a los futbolistas en algo más que empleados. El profesor Simon Chadwick explica que los jugadores se están convirtiendo en <strong>"peones geopolíticos"</strong>. Las grandes informaciónes sobre los salarios astronómicos no es coincidencia, sino que sirve a un propósito: señalar al mundo el poder ilimitado del reino.
          </p>

          <h3 className="text-3xl font-bold text-[#6A2C70] mt-12 mb-6">El Silencio de la platea</h3>
          <p>
            Lo que brilla por su ausencia en esta nota es, irónicamente, el hincha. No hay testimonios de fanáticos saudíes, no hay análisis tácticos sobre cómo jugarán las estrellas como Benzema o Ronaldo, no hay color de las gradas. En esta contexto de CNN, la pasión es irrelevante. Lo único que importa es el retorno de la inversión en términos de imagen.
          </p>
          <p>
            Cuando el deporte se vuelve política de estado, el juego pasa a un segundo plano. CNN lo cubre como tal, advirtiendo al lector que lo que está viendo no es el crecimiento orgánico de una liga, sino la construcción artificial de un escenario de poder.
          </p>

          {/* BANNER PUBLICITARIO EMBEBIDO */}
          <div className="w-full my-8 flex justify-center">
            <a href="https://www.nike.com.ar" target="_blank" rel="noopener noreferrer" 
               className="block max-w-sm mx-auto shadow-lg overflow-hidden rounded-lg">
              <img 
                src="/anuncio2.jpg" // Usa el nombre de la imagen que descargaste
                alt="Publicidad Nike" 
                className="w-full h-auto object-contain" 
              />
            </a>
          </div>
          {/* FIN BANNER EMBEBIDO */}


          {/* CAJA DE SIGUIENTES PASOS */}
          <div className='mt-20 p-10 bg-gray-100 rounded-2xl border border-gray-200'>
            <h4 className='text-2xl font-bold text-[#6A2C70] mb-6 border-b border-gray-300 pb-4'>
              Continúa la investigación:
            </h4>
            <ul className='space-y-6'>
              <li className='flex items-start group'>
                <span className='text-[#F08A5D] mr-4 text-2xl transition-transform group-hover:translate-x-1'>➜</span>
                <div>
                  <Link to="/analisis/nota3" className='text-lg font-semibold text-gray-800 hover:text-[#F08A5D] transition-colors block'>
                    Siguiente nota: La "Coronación" del Candidato
                  </Link>
                  <span className='text-sm text-gray-600'>Cómo la FIFA facilitó el camino para el Mundial 2034.</span>
                </div>
              </li>
              <li className='flex items-start group'>
                <span className='text-[#B83B5E] mr-4 text-2xl transition-transform group-hover:translate-x-1'>➜</span>
                <div>
                  <Link to='/contrapunto' className='text-lg font-semibold text-gray-800 hover:text-[#B83B5E] transition-colors block'>
                    Ver el Contrapunto: La cobertura de Diario Olé
                  </Link>
                  <span className='text-sm text-gray-600'>Donde la llegada de Cristiano fue una fiesta, no una estrategia.</span>
                </div>
              </li>
            </ul>
            
            <div className="mt-8 pt-6 border-t border-gray-300 text-sm text-right">
              Fuente original analizada: <a href="https://cnnespanol.cnn.com/2023/09/20/arabia-saudita-alterar-orden-mundial-futbol-motivos-podrian-sorprenderte-trax" target='_blank' rel='noopener noreferrer' className='text-[#06B6D4] hover:text-[#0F172A] font-medium underline decoration-1 underline-offset-2'>CNN en Español</a>
            </div>
          </div>

        </div>
      </div>
    </article>
  )
}

export default Nota2