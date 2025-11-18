import React from 'react';
import { Link } from 'react-router-dom';

const Nota4 = () => {
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
            La Herida que No Cierra: Qatar no se olvida
          </h1>
          <p className='text-xl lg:text-2xl text-gray-600 font-serif leading-relaxed'>
            Luego del Mundial, CNN se niega a pasar página. El medio utiliza el aniversario para amplificar la denuncia de Amnistía Internacional sobre la falta de justicia.
          </p>
        </header>

        {/* IMAGEN */}
        <figure className='mb-12'>
          <img 
            src="/amnistia.jpg" // Asegurate que esta imagen esté en /public
            alt="Protestas sobre derechos laborales" 
            className='w-full h-auto rounded-xl shadow-xl object-cover max-h-[500px]'
          />
          <figcaption className='mt-3 text-sm text-gray-500 italic text-center'>
            Las luces del estadio se apagaron, pero los trabajadores se quedaron ahí: la visión opuesta a la narrativa de "fiesta".
          </figcaption>
        </figure>

        {/* CONTENIDO DEL ARTÍCULO */}
        <div className='prose prose-lg lg:prose-xl max-w-none text-gray-800 leading-loose'>
          <p>
            En el ciclo de noticias vertiginoso del deporte, un año es una eternidad. Mientras la mayoría de los medios deportivos ignoraban el tema, <strong>CNN en Español</strong> rompió esa lógica de consumo rápido con la nota titulada <a href="https://cnnespanol.cnn.com/2023/11/17/amnistia-internacional-abusos-trabajadores-mundial-qatar-2022-trax" target="_blank" rel="noopener noreferrer" className="text-[#B83B5E] font-bold hover:text-[#6A2C70] transition-colors underline decoration-2 underline-offset-4">"Amnistía Internacional dice que 'persisten los abusos'..."</a>.
          </p>
          <p>
            La temporalidad es la clave: CNN eligió un encuadre de **periodismo de memoria** en el aniversario, demostrando que su postura no fue una pose temporal. La noticia para la cadena internacional no era la nostalgia por el campeón, sino la **persistencia de la injusticia laboral** que hizo posible el torneo.
          </p>

          {/* RECUADRO DESTACADO */}
          <div className='my-14 p-10 bg-gray-50 border-l-8 border-[#6A2C70] rounded-r-xl shadow-sm'>
            <blockquote className='text-2xl font-medium text-gray-700 italic leading-relaxed'>
              "El mensaje de Amnistía Internacional es claro: 'al igual que se atenuó el resplandor de los focos [...] también lo hizo la presión del gobierno [de Qatar]'. CNN se niega a que la deuda humana sea olvidada".
            </blockquote>
          </div>

          <h3 className="text-3xl font-bold text-[#6A2C70] mt-12 mb-6">La Fuente como Veredicto</h3>
          <p>
            El análisis de las fuentes es crucial: CNN le cede el micrófono casi por completo a Steve Cockburn, jefe de Justicia Económica y Social de Amnistía Internacional. No hay un intento forzado de "dos campanas" para "empatar" el argumento. El medio valida la denuncia de la ONG, que afirma que las reformas de Qatar fueron introducidas tardíamente y **aplicadas débilmente**.
          </p>
          <p>
            Esto transforma la nota en un **puente conceptual**. Conecta la "impunidad" percibida en Qatar 2022 con la inminente coronación de Arabia Saudita (Nota 3). La postura implícita de CNN es de advertencia: el "legado" de Qatar no es la reforma, sino el abandono de los trabajadores, un riesgo que se traslada al Mundial 2034.
          </p>
          
          <h3 className="text-3xl font-bold text-[#6A2C70] mt-12 mb-6">El Contraste con el Silencio de la FIFA</h3>
          <p>
            La cobertura expone la complicidad institucional. Si bien la FIFA intentó defenderse diciendo que "se han producido avances significativos", el medio contrasta esa retórica con la condena de AI. La FIFA cuenta con que el público olvide el costo político una vez que se consagra el campeón. Al traer el tema de vuelta, CNN rompe el pacto de silencio del "sportswashing".
          </p>

          {/* CAJA DE SIGUIENTES PASOS */}
          <div className='mt-20 p-10 bg-gray-100 rounded-2xl border border-gray-200'>
            <h4 className='text-2xl font-bold text-[#6A2C70] mb-6 border-b border-gray-300 pb-4'>
              Continúa la investigación:
            </h4>
            <ul className='space-y-6'>
              <li className='flex items-start group'>
                <span className='text-[#F08A5D] mr-4 text-2xl transition-transform group-hover:translate-x-1'>➜</span>
                <div>
                  <Link to="/analisis/nota5" className='text-lg font-semibold text-gray-800 hover:text-[#F08A5D] transition-colors block'>
                    Siguiente nota: El Costo Humano
                  </Link>
                  <span className='text-sm text-gray-600'>El clímax de la investigación: CNN cuenta los muertos.</span>
                </div>
              </li>
              <li className='flex items-start group'>
                <span className='text-[#B83B5E] mr-4 text-2xl transition-transform group-hover:translate-x-1'>➜</span>
                <div>
                  <Link to='/contrapunto' className='text-lg font-semibold text-gray-800 hover:text-[#B83B5E] transition-colors block'>
                    Ver el Contrapunto: La cobertura de Diario Olé
                  </Link>
                  <span className='text-sm text-gray-600'>Donde la gloria deportiva borró cualquier otra discusión.</span>
                </div>
              </li>
            </ul>
            
            <div className="mt-8 pt-6 border-t border-gray-300 text-sm text-right">
              Fuente original analizada: <a href="https://cnnespanol.cnn.com/2023/11/17/amnistia-internacional-abusos-trabajadores-mundial-qatar-2022-trax" target='_blank' rel='noopener noreferrer' className='text-[#06B6D4] hover:text-[#0F172A] font-medium underline decoration-1 underline-offset-2'>CNN en Español</a>
            </div>
          </div>

          {/* BANNER PUBLICITARIO EMBEBIDO (VERTICAL) */}
          <div className="w-full my-8 flex justify-center">
            <a href="https://movistarinternet.ar/p/oficial?gad_source=1&gad_campaignid=18520444965&gclid=EAIaIQobChMIw4-Mltf8kAMVZltIAB1PpwJYEAAYAyAAEgJzD_D_BwE" target="_blank" rel="noopener noreferrer" 
               className="block max-w-xs sm:max-w-sm mx-auto shadow-lg overflow-hidden rounded-lg">
              <img 
                src="/anuncio4.jpg" 
                alt="Publicidad Movistar" 
                className="w-full h-auto object-contain" 
              />
            </a>
          </div>
          {/* FIN BANNER EMBEBIDO */}
        </div>
      </div>
    </article>
  )
}

export default Nota4;