import React from 'react'
import { Link } from 'react-router-dom'

const Nota5 = () => {
  return (
    <article className='bg-white'>
      {/* CONTENEDOR */}
      <div className='container mx-auto max-w-3xl py-12 px-6'>

      {/* ENCABEZADO */}
      <header className='mb-8'>
        <p className='text-blue-600 font-semibold text-lg uppercase tracking-wide'>
          Análisis de Cobertura: CNN
        </p>
        <h1 className='text-4xl lg:text-5xl font-extrabold text-gray-900 my-3'>
          El Costo Humano: La Postura de CNN sobre las muertes en Qatar
        </h1>
        <p className='text-xl lg:text-2xl text-gray-600 italic'>
          El medio cierra el círculo de su postura crítica. Al preguntar "¿Cuántos muertos?", CNN pone el foco en la cifra que otros medios deportivos prefirieron ignorar durante la "fiesta" del Mundial.
        </p>
      </header>

      {/* IMAGEN */}
      <img src="" alt="" />

      {/* CUERPO DE LA NOTA */}
      <div className='prose prose-lg lg:prose-xl max-w-none text-gray-800'>
        <p>
          Llegamos a la quinta y última nota del análisis, y es la más contundente para definir la postura editorial de <strong>CNN en Español</strong>. Basada en el artículo <a href="https://cnnespanol.cnn.com/2022/11/29/cuantos-muertos-estadios-mundial-qatar-orix" target="_blank" rel="noopener noreferrer">"¿Cuántos muertos hubo en los estadios..."</a>, esta cobertura encapsula la tesis de "El Precio del Espectáculo".
        </p>
        <p>
          El factor más relevante de esta nota es su <strong>temporalidad</strong>. Fue publicada el 29 de noviembre de 2022, en pleno desarrollo del Mundial de Qatar. Esta decisión editorial es una declaración de principios. Mientras la agenda mediática global (y especialmente la de medios como <strong>Diario Olé</strong>) estaba saturada por los goles, las polémicas del VAR y la incipiente épica de la selección argentina, <strong>CNN</strong> rompe ese consenso festivo.
        </p>
        <p>
          El medio reintroduce en la conversación el tema más incómodo: el costo humano. La postura de <strong>CNN</strong> es clara: se niega a permitir que el espectáculo deportivo borre la denuncia geopolítica y de derechos humanos que venía sosteniendo.
        </p>
        <p>
          El encuadre de la nota es de periodismo de investigación y datos. No acepta la cifra oficial de "tres muertes" comunicada por los organizadores, sino que la pone en tela de juicio. Cita activamente las "cifras mucho mayores" reportadas por organizaciones de derechos humanos y medios de investigación como <strong>The Guardian</strong>. La postura no es neutral; es de claro cuestionamiento a la opacidad informativa de la FIFA y del comité organizador de Qatar.
        </p>

        {/* Recuadro */}
        <blockquote className='border-l-4 border-blue-500 bg-blue-50 p-6 my-8 text-xl font-medium text-gray-700 italic'>
          "Al preguntar '¿Cuántos muertos?, CNN no busca una cifra exacta, sino que utiliza la pregunta retórica para afirmar una tésis: las cifras oficiales ocultan una tragedia. Es el clímax de la teoría del 'precio del espectáculo'".
        </blockquote>

        <p>
          Este artículo es el cierre de la narrativa que <strong>CNN</strong> construyó a lo largo de su cobertura. Es el "precio" literal, en vidas humanas, del que hablábamos. La conexión con las otras cuatro notas analizadas es directa:
        </p>
        <ul className='list-disc pl-5'>
          <li>Refuerza la denuncia de <strong>Amnistía Internacional</strong></li>
          <li>Expone la consecuencia trágica del "trámite" corporativo de la <strong>FIFA</strong></li>
          <li>Demuestra el costo humano detrás del "nuevo orden mundial" del <strong>soft power</strong></li>
          <li>Sienta el precedente que justifica la desconfianza hacia la candidatura de <strong>Arabia Saudita 2034</strong></li>
        </ul>
        <p>
          El contraste con el medio de contrapunto es total. Para <strong>Diario Olé</strong> la cobertura de Qatar 2022 fue una épica deportiv inolvidable. Para <strong>CNN</strong>, fue la crónica de un evento geopolítico con un costo humano que, en su postura editorial, no debía ser ignorado. Con estas cinco notas, la postura de <strong>CNN en Español</strong> queda demostrada: su cobertura del "sportswashing" se aleja del espectáculo y se encuadra firmemente en el periodismo de denuncia internacional.
        </p>

        {/* LINKS */}
        <div className='bg-gray-100 p-6 rounded-lg mt-10 text-base'>
          <h4 className='font-bold text-lg mb-2 text-gray-900'>Siguientes pasos:</h4>
          <ul>
            <li>
              <Link to="/contrapunto" className='text-blue-600 hover:underline'>
                Ver el análisis de contrapunto: Diario Olé
              </Link>
            </li>
            <li>
              <Link to="/entrevista" className='text-blue-600 hover:underline'>
                Leer la Entrevista a la especialista.
              </Link>
            </li>
          </ul>
        </div>
      </div>

      </div>
    </article>
  )
}

export default Nota5