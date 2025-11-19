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
            La cobertura de <strong>CNN en Español</strong> detalla el ascenso del fútbol árabe les lleva a preguntarse: hasta donde llega el poderío saudí . La nota titulada <a href="https://cnnespanol.cnn.com/2023/09/20/arabia-saudita-alterar-orden-mundial-futbol-motivos-podrian-sorprenderte-trax" target="_blank" rel="noopener noreferrer" className="text-[#B83B5E] font-bold hover:text-[#6A2C70] transition-colors underline decoration-2 underline-offset-4">"Arabia Saudita intenta alterar el orden mundial del fútbol. Los motivos podrían sorprenderte"</a> marca un quiebre definitivo: el fútbol ha dejado de ser un deporte para convertirse en una industria extractiva de influencia.
          </p>
          <h3 className="text-3xl font-bold text-[#6A2C70] mt-12 mb-6">El historial de fichajes estelares</h3>
          <p>
            La nota abre con el relato cuando el club saudita Al-Hilal plantó una oferta de 1.100 millones de dólares para fichar a la estrella mundial, Kylian Mbappé, con un salario de 775 millones de dólares al año para el francés. Esta maniobre fue criticada por los críticos del <i>sportswashing</i>.
          </p>
          <p>
            El fichaje no se dió, pero luego, el club árabe puso el foco en el astro brasileño, Neymar Jr. que el si aceptó la oferta por la suma de unos 98,5 millones más añadidos.
          </p>
          <p>
            Y este es un solo caso, sin contar los diversos traspasos de unos 94 jugadores extranjeros provenientes de las cinco grandes ligas europeas, desembolsando la suma de unos 1.000 millones de dólares.
          </p>
          <p>
            Pero los casos más destacados que pasaron a formar parte de la Saudi Pro League fueron el del ganador del Balón de Oro 2022, Karim Benzema, que se incorporó al Al-Ittihad, con sumas exorbitantes de dinero como ya se menciono anteriormente.
          </p>

          {/* RECUADRO DESTACADO */}
          <div className='my-14 p-10 bg-gray-50 border-l-8 border-[#6A2C70] rounded-r-xl shadow-sm'>
            <blockquote className='text-2xl font-medium text-gray-700 italic leading-relaxed'>
              "Los nuevos jugadores se unen al cinco veces Balón de Oro, Cristiano Ronaldo, quien firmó un contrato de dos años con el Al-Nassr, por el que ganará la asombrosa cifra de US$ 200 millones al año, según los medios estatales sauditas, lo que le convierte en el futbolista mejor pagado del mundo.".
            </blockquote>
          </div>

          <h3 className="text-3xl font-bold text-[#6A2C70] mt-12 mb-6">
            "La pasión árabe por el fútbol"
          </h3>
          <p>
            Arabia Saudita, al igual que otros países como China o Qatar en su momento, invierten demasiada plata con el fin de convertirse en potencias futbolísticas.
          </p>
          <p>
            Y estos fichajes sumado el crecimiento de popularidad de la liga local y la selección nacional, compras de clubes de fútbol como el Newcastle United, o la organización de eventos como el Mundial de Clubes 2023 y su candidatura a ser la sede de la Copa Asiática 2027, y la ya confirmada Copa del Mundo en 2034, fueron ingredientes que conforman esta bola de nieve.
          </p>

          <h3 className="text-3xl font-bold text-[#6A2C70] mt-12 mb-6">Un nuevo contrato social</h3>
          <p>
            El páis tiene un público muy joven, del que de al menos 32,2 millones de personas, casi el 42% son extranjeros y el 51% de la poblacion tiene menos de 30 años, muchos de estos se cree que al menos un 80% tiene relacion con el fútbol.
          </p>
          <p>
            Simon Chadwick, profesor de Deporte y Economía Geopolítica en la Escuela de Negocio SKEMA, dice que lo que esta sucediendo en Arabia Saudita es la aparición de un nuevo <strong>contrato social</strong>, que dicta que es esencial satisfacer las necesidades de la generación Z, siempre y cuando no cuestionen al gobierno. Pero aun así, hay casos donde este contrato, no es respetado, en esas situaciones, se procede a detener a aquellos que protesten contra las autoridades, incluso hay casos donde los ejecutan.
          </p>
          <p>
            El grupo de derechos humanos Amnistía Internacional identificó la creciente represión de la libertad de expresión y un mayor uso de leyes antiterroristas y contra la ciberdelincuencia para silenciar su disidencia. En 2022, la organización registró el mayor número de ejecuciones en el país, siendo 196 personas ejecutadas.
          </p>

          <h3 className="text-3xl font-bold text-[#6A2C70] mt-12 mb-6">La respuesta del reino</h3>
          <p>
            Ante las acusaciones de <i>sportswashing</i>, el principe Abdulaziz bin Turki Al-Faisal, ministro de Deportes declaro: <i><strong>"La gente que no conoce Arabia Saudita, que nunca ha estado en Arabia Saudita, sale y habla de ella como si hubiera vivido allí 30 o 40 años. Por eso, siempre le digo a la gente que venga a Arabia Saudita. Vengan a ver Arabia Saudita"</strong></i>
          </p>

          <h3 className="text-3xl font-bold text-[#6A2C70] mt-12 mb-6">La expansion a otros deportes</h3>
          <p>
            Los árabes no solo ponen su mirada en el fútbol, sino que buscan ampliar sus horizones en distintas disciplinas, con la industria del golf por poner un ejemplo. En 2021, el PIF, financió el LIV Golf, atrayendo a muchos jugadores de todo el mundo a que formen parte de su propia liga. Lo mismo ocurrio en el ámbito del automovilismo, con el Gran Premio de Jeddah que forma parte del calendario de Fórmula 1 desde 2021.
          </p>
          <br />
          <hr />
          <br />
          <p>
          En síntesis, la nota relata como Araba Saudita en su búsqueda de expandir su influencia por medio de distintas disciplinas y de esa forma "lavar su cara" ante el mundo, pasando por alto las violaciones a los derechos humanos, estos esfuerzos son focalizados en el fútbol, con el fichaje de grandes estrellas para que traigan la mirada mundial a la Saudi Pro League.
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