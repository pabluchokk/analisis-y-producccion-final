import React from 'react'
import { Link } from 'react-router-dom'

const nota1 = () => {
  return (
    <article className='bg-white'>
      {/* CONTENEDOR DEL ARTICULO */}
      <div className='container mx-auto max-w-3xl py-12 px-6'>
        {/* TITULO */}
        {/* CONSIGNA: VOLANTA, TITULO, Y BAJADA */}
        <header className='mb-8'>
          <p className='text-blue-600 font-semibold text-lg uppercase tracking-wide'>
            Análisis de cobertura: CNN
          </p>
          <h1 className='text-4xl lg:text-5xl font-extrabold text-gray-900 my-3'>
            Derechos humanos vs Mundial 2034: El encuadre crítico de CNN
          </h1>
          <p className='text-xl lg:text-2xl text-gray-600 italic'>
            La cadena internacional no se limita a informar la candidatura de Arabia Saudita. Su postura editorial prioriza la denuncia de Amnistía Internacional, marcando un claro encuadre geopolítico.
          </p>
        </header>

        {/* IMAGEN  */}
        <img src="" alt="" />

        {/* CONTENIDO DEL ARTICULO */}
        <div className='prose prose-lg lg:prose-xl max-w-none text-gray-800'>
          <p>
            El anuncio de Arabia Saudita como sede del Mundial 2034 fue cubierto por medios de todo el planeta, pero el enfoque define la postura. Mientras el periodismo de espectáculo se centró en la "inevitabilidad" del evento, *CNN en Español* adoptó una postura editorial radicalmente distinta, fiel a su identidad de "hard news" internacional.
          </p>
          <p>
            La nota titulada <a href="https://cnnespanol.cnn.com/2024/12/11/deportes/arabia-saudita-sede-mundial-2034-criticas-grupos-derechos-humanos-trax" target="_blank" rel="noopener noreferrer">Grupos de derechos humanos critican a la FIFA...</a> es el ejemplo paradigmático de esta postura. El medio utiliza el anuncio de la FIFA no como la noticia principal, sino como el disparador para un análisis crítico más profundo. El encuadre de *CNN* se alinea con la teoría de este trabajo: el Mundial no es un juego, es una herramienta geopolítica de "sportswashing".
          </p>


          {/* RECUADRO DESTACADO */}
          <blockquote className='border-l-4 border-blue-500 bg-blue-50 p-6 my-8 text-xl font-medium text-gray-700 italic'>
            "La cobertura de *CNN* prioriza sistemáticamente las voces de ONGs como Amnistía Internacional y Human Rights Watch por sobre las de los organizadores del evento, configurando una narrativa de denuncia".
          </blockquote>

          <p>
            Esta decisión editorial es el núcleo del análisis. <strong>CNN</strong> no presenta las críticas como un dato de color o un párrafo obligatorio al final de la nota, sino que las convierte en el eje de su información. Se detallan las preocupaciones sobre la libertad de expresión, los derechos de la comunidad LGBTQ+ y las condiciones laborales en Arabia Saudita, temas que ya habían sido centrales en su cobertura del Mundial de Catar 2022.
          </p>
          <p>
            Es fundamental notar quien <strong>no</strong> cita el artículo. Las voces de los organizadores saudíes o de los ejecutivos de la FIFA aparecen minimizadas, presentadas solo en el contexto de la crítica. No hay un esfuerzo por "balancear" la denuncia con las promesas de desarrollo o los beneficios económicos del evento. La postura es clara: la noticia es la violación de derechos humanos, no la celebración deportiva.
          </p>
          <p>
            El medio utiliza su plataforma para cuestionar directamente a la FIFA, exponiendo la contradicción entre las propias políticas de derechos humanos del organismo y la elección de la sede. Este enfoque se aleja drásticamente de medios como <strong>Diario Olé</strong>, cuyo análisis se centra en la "fiesta del fútbol" y minimiza las críticas a la organización del evento.
          </p>
          <p>
            Al citar directamente a Amnistía Internacional, <strong>CNN</strong> no solo informa, sino que toma una postura editorial clara. El "precio del espectáculo" al que alude la portada se materializa en esta nota: el costo humano y social que el medio decide destacar frente a la narrativa oficial de la FIFA.
          </p>

          {/* LINK A LA NOTA ORIGINAL */}
          <div className='bg-gray-100 p-6 rounded-lg mt-10 text-base'>
            <h4 className='font-bold text-lg mb-2 text-gray-900'>Para ampliar el análisis:</h4>
            <ul className='list-disc pl-5 space-y-2'>
              <li>
                <a href="https://cnnespanol.cnn.com/2023/11/17/amnistia-internacional-abusos-trabajadores-mundial-qatar-2022-trax/"
                target='_blank' rel='noopener noreferrer'
                className='text-blue-600 hover:underline'
                >Siguiente análisis: La cobertura de CNN sobre Amnistía y Qatar 2022</a>
              </li>
              <li>
                <Link to="/analisis/nota2" className='text-blue-600 hover:underline'>
                  Siguiente análisis: El "Nuevo Orden Mundial": CNN Encuadra el fútbol como Geopolítica
                </Link>
              </li>
              <li>
                {/* LINK A CONTRAPUNTO OLÉ */}
                <Link to='/contrapunto' className='text-blue-600 hover:underline'>
                Leer el análisis de contrapunto con Diario Olé
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  )
}

export default nota1