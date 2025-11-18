import React from 'react'
import { Link } from 'react-router-dom'

const Nota1 = () => {
  return (
    <article className='bg-white min-h-screen'>
      {/* CONTENEDOR DEL ARTÍCULO */}
      <div className='container mx-auto max-w-4xl py-16 px-6 lg:px-8'>
        
        {/* TITULO */}
        <header className='mb-10 border-b-4 border-[#F08A5D] pb-8'>
          <p className='text-[#6A2C70] font-bold text-sm tracking-widest uppercase mb-2'>
            Análisis de cobertura: CNN en Español
          </p>
          <h1 className='text-4xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight'>
            Se encienden las alarmas: Arabia Saudita será sede de la Copa del Mundo 2034
          </h1>
          <p className='text-xl lg:text-2xl text-gray-600 font-serif leading-relaxed'>
            CNN no se enfoca en la "celebración" por la candidatura, sino que le da voz a los grupos defensores de los Derechos Humanos, que temen otra situacion de Qatar 2022
          </p>
        </header>

        {/* IMAGEN */}
        <figure className='mb-12'>
          <img 
            src="/mundialArabia.jpg" 
            alt="Estadio en Arabia Saudita" 
            className='w-full h-auto rounded-xl shadow-xl object-cover max-h-[500px]'
          />
          <figcaption className='mt-3 text-sm text-gray-500 italic text-center'>
            La imagen del poder: CNN pone el foco en lo "humano" por sobre lo "comercial".
          </figcaption>
        </figure>

        {/* CONTENIDO DEL ARTÍCULO */}
        <div className='prose prose-lg lg:prose-xl max-w-none text-gray-800 leading-loose'>
          <p>
            La cobertura del anuncio de Arabia Saudita como sede del Mundial 2034 suele cubrirse de dos maneras distintas: la celebración por una nueva sede mundialista o por la crónica administrativa. <strong>CNN en Español</strong>, sin embargo, opta por una tercera vía: una interpelación ética. Su enfoque se aleja de lo "inevitable" del evento para centrarse en las preocupaciones que otros medios pasan por alto o invisibilizan para que "la fiesta no pare".
          </p>
          <br />
          <p>
            En la nota titulada <a href="https://cnnespanol.cnn.com/2024/12/11/deportes/arabia-saudita-sede-mundial-2034-criticas-grupos-derechos-humanos-trax" target="_blank" rel="noopener noreferrer" className="text-[#B83B5E] font-bold hover:text-[#6A2C70] transition-colors underline decoration-2 underline-offset-4">"Arabia Saudita será sede del mundial de 2034; defensores de derechos humanos expresan preocupación"</a>, el medio utiliza el anuncio oficial solo como disparador. El verdadero sujeto de la noticia no es la FIFA ni el país anfitrión; el sujeto es la <strong>denuncia</strong>.
          </p>
          <br />
          {/* ANÁLISIS DEL LENGUAJE */}
          <p>
            El tono que adopta la cadena es formal, no festivo. CNN deliberadamente evita la utilizacion de palabra "épicas" ("sueño", "gloria") y lo sustituye por palabras jurídicas y políticas: "violaciones", "represión", "libertad de expresión", "abusos". Esto da a entender desde el inicio el tóno que tiene la nota: la noticia se transforma, ya no es una noticia deportiva sin más, sino un informe donde se pone en foco (como se lo hizo en Qatar 2022) las diversas violaciones a los Derechos Humanos ocurridos en el Medio Oriente.
          </p>

          {/* RECUADRO DESTACADO */}
          <div className='my-14 p-10 bg-gray-50 border-l-8 border-[#6A2C70] rounded-r-xl shadow-sm'>
            <blockquote className='text-2xl font-medium text-gray-700 italic leading-relaxed'>
              "CNN prioriza principalmente las voces de ONGs como Amnistía Internacional por sobre los comunicados oficiales, configurando una narrativa de lucha frente al discurso corporativo de la FIFA".
            </blockquote>
          </div>

          <p>
            Al detallar preocupaciones específicas —libertad de expresión, derechos LGBTQ+, condiciones laborales— el medio construye un marco de lectura donde es imposible disociar el fútbol de la política. No es un "dato de color" al final del texto; es la estructura misma de la información.
          </p>
          <br />
          <p>
            El medio resalta en la hipocresía institucional al contrastar la candidatura con la propia política de derechos humanos de la FIFA, adoptada en 2017. Para CNN, el problema no es solo que Arabia Saudita sea un país cuestionable, sino que la FIFA es cómplice activo al permitir que los principios que dice defender sean ignorados para facilitar una candidatura financiada con recursos ilimitados. Es un fracaso ético de la gobernanza deportiva global.
          </p>
          <br />
          <p>
            Esto demuestra que el valor de la noticia para CNN reside en exponer el riesgo de ligar el espectáculo masivo a un régimen. La constante exposición de las pobres condiciones laborales y la represión a activistas demuestran que el 'Soft Power' saudí, que busca atraer, termina encontrando una barrera de costo de reputación altísimo en la prensa internacional.
          </p>
          <br />
          {/* ANÁLISIS VISUAL Y SILENCIOS */}
          <p>
            La elección de las imágenes es algo importante a remarcar. A diferencia de medios como <em>Olé</em>, que ilustran estas noticias con imágenes espectaculares de estadios, CNN pone el lente en los empresarios fríos o fotos de archivo que remiten al contexto social. La imagen no busca seducir al hincha, sino documentar un acuerdo de poder.
          </p>
          <br />
          <p>
            Igualmente significativo es lo que la nota <strong>silencia</strong>. Las promesas de modernización o los beneficios económicos, argumentos centrales de la gacetilla oficial de la candidatura, aquí aparecen minimizados. No hay un intento de "balancear" la crítica con la propaganda oficial; la postura implícita es que la violación de derechos no admite empates técnicos ni justificaciones comerciales.
          </p>
          <br />
          <p>
            Este enfoque marca el contraste definitivo con medios deportivos tradicionales. Mientras la prensa especializada tiende a compartimentar la política para no manchar la pelota, CNN fusiona ambos mundos, recordando al lector que el "precio del espectáculo" se paga, muchas veces, con libertades individuales.
          </p>

          {/* CAJA DE SIGUIENTES PASOS */}
          <div className='mt-20 p-10 bg-gray-100 rounded-2xl border border-gray-200'>
            <h4 className='text-2xl font-bold text-[#6A2C70] mb-6 border-b border-gray-300 pb-4'>
              Continúa el análisis de cobertura:
            </h4>
            <ul className='space-y-6'>
              <li className='flex items-start group'>
                <span className='text-[#F08A5D] mr-4 text-2xl transition-transform group-hover:translate-x-1'>➜</span>
                <div>
                  <Link to="/analisis/nota2" className='text-lg font-semibold text-gray-800 hover:text-[#F08A5D] transition-colors block'>
                    Siguiente nota: El "Nuevo Orden Mundial"
                  </Link>
                  <span className='text-sm text-gray-600'>Cómo CNN analiza la estrategia económica detrás de los fichajes.</span>
                </div>
              </li>
              <li className='flex items-start group'>
                <span className='text-[#B83B5E] mr-4 text-2xl transition-transform group-hover:translate-x-1'>➜</span>
                <div>
                  <Link to='/contrapunto' className='text-lg font-semibold text-gray-800 hover:text-[#B83B5E] transition-colors block'>
                    Ver el Contrapunto: La cobertura de Diario Olé
                  </Link>
                  <span className='text-sm text-gray-600'>Comparación con la mirada deportiva tradicional.</span>
                </div>
              </li>
            </ul>
            
            <div className="mt-8 pt-6 border-t border-gray-300 text-sm text-right">
              Fuente original analizada: <a href="https://cnnespanol.cnn.com/2024/12/11/deportes/arabia-saudita-sede-mundial-2034-criticas-grupos-derechos-humanos-trax/" target='_blank' rel='noopener noreferrer' className='text-[#06B6D4] hover:text-[#0F172A] font-medium underline decoration-1 underline-offset-2'>CNN en Español</a>
            </div>
          </div>

          <div className="w-full my-8 flex justify-center">
            <a href="https://www.coca-cola.com" target="_blank" rel="noopener noreferrer" 
                className="block max-w-sm mx-auto shadow-lg overflow-hidden rounded-lg">
              <img 
                src="/anuncio1.jpg" 
                alt="Publicidad Coca-Cola: Destapa la felicidad" 
                className="w-full h-auto object-contain" 
              />
            </a>
          </div>

        </div>
      </div>
    </article>
  )
}

export default Nota1