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
            Se encienden las alarmas: Arabia Saudita será sede de la Copa del Mundo 2034 y sectores se preocupan
          </h1>
          <p className='text-xl lg:text-2xl text-gray-600 font-serif leading-relaxed'>
            CNN no se enfoca en la "celebración" por la candidatura, sino que le da voz a los grupos defensores de los Derechos Humanos, que temen otra situacion de Qatar 2022
          </p>
        </header>

        {/* IMAGEN */}
        <figure className='mb-12'>
          <img 
            src="/mundialArabia.jpg" 
            alt="Proyecto de Estadio Aramco en Arabia Saudita" 
            className='w-full h-auto rounded-xl shadow-xl object-cover max-h-[500px]'
          />
          <figcaption className='mt-3 text-sm text-gray-500 italic text-center'>
            La imagen del poder: CNN pone el foco en lo "humano" por sobre lo "comercial" (Maqueta del Estadio Aramco).
          </figcaption>
        </figure>

        {/* CONTENIDO DEL ARTÍCULO */}
        <div className='prose prose-lg lg:prose-xl max-w-none text-gray-800 leading-loose'>
          <p>
            La nota de <strong>CNN en Español</strong>(<a href="https://cnnespanol.cnn.com/2024/12/11/deportes/arabia-saudita-sede-mundial-2034-criticas-grupos-derechos-humanos-trax" target="_blank" rel="noopener noreferrer" className="text-[#B83B5E] font-bold hover:text-[#6A2C70] transition-colors underline decoration-2 underline-offset-4">"Arabia Saudita será sede del mundial de 2034; defensores de derechos humanos expresan preocupación"</a>) rompe con la típica de la prensa deportiva al decir que la designación de Arabia Saudita como única candidata para 2034 "no fue una sorpresa". El medio utiliza el anuncio oficial solo como disparador, pero rápidamente se enfoca en la <strong>interpelación ética</strong> que surge desde Human Rights Watch (HRW) y Amnistía Internacional.
          </p>
          <p>
            Si bien la candidatura de España, Portugal y Marruecos no pasan con las manos limpias tampoco, todos los reflectores se los llevó la elección de Arabia Saudita para albergar la Copa del Mundo en 2034.
          </p>
          <br />

          {/* RECUADRO DESTACADO */}
          <div className='my-14 p-10 bg-gray-50 border-l-8 border-[#6A2C70] rounded-r-xl shadow-sm'>
            <blockquote className='text-2xl font-medium text-gray-700 italic leading-relaxed'>
              Michael Page, de Human Rights Watch, advirtió del <strong>'inimaginable costo humano'</strong> que supondría acoger el mayor acontecimiento deportivo del mundo".
            </blockquote>
          </div>

          <p>
            Y es que el contexto en el que se percibe actualmente a los gobiernos de Medio Oriente no es el mejor, donde varios grupos de derechos humanos advierten problemas en dicho país, como el abuso de los trabajadores inmigrantes, la libertad de expresión y los derechos de los grupos minoritarios.
          </p>
          <br />
          <h3 className="text-3xl font-bold text-[#6A2C70] mt-12 mb-6">El dineral saudí</h3>
          <p>
            No es una novedad que el gobierno árabe cuenta con lo que pareciera arcas infinitas de plata, a través de su fondo soberano, el Public Investiment Fund (PIF), Arabia Saudita invierte <strong>miles de millones de dólares</strong> año a año para poder atraer a los deportes en Medio Oriente, lo hizo con el Golf, el Boxeo, los Esports (deportes electrónicos) y la Fórmula 1.
          </p>
          <p>
            Dichas inversiones forman parte de la Saudi Vision 2030, un proyecto propuesto por el príncipe heredero Mohammed bin Salman (MBS) para situar a Arabia Saudita como uno de los países líderes del mundo.
          </p>

          <h3 className="text-3xl font-bold text-[#6A2C70] mt-12 mb-6">El frente del fútbol</h3>
          <p>
            Muchas de las inversiones también fueron dirigidas al sector del fútbol, por muchos considerado el deporte más popular del mundo. Y es que recientemente, las inversiones saudíes tomaron mayor relevancia en el panorama, con la compra del club histórico de la Premier League inglesa, <strong>Newcastle United</strong>, o la transformacion de su propia liga, la Saudi Pro League, en el hogar de leyendas del deporte como Cristiano Ronaldo, Karim Benzema o Neymar Jr. Además de mejorar las relaciones con el presidente de la FIFA, Gianni Infantino.
          </p>
          <p>
            Y esa misión ya esta dando frutos, con la organizacion del certámen mundial en 2034, y el país la recibe con ansias, preparando grandes proyectos de infraestructura, como también la construccion y renovacion de al menos 11 estadios, junto con muchas expansiones de hoteles.
          </p>
          <p>
            Pero bajo toda esta fachada, diversos grupos de derechos humanos suponen que, al igual que Qatar 2022, este mundial tendrá un costo.
          </p>
          <h3 className="text-3xl font-bold text-[#6A2C70] mt-12 mb-6">La reacción de los grupos defensores</h3>
          <p>
            Un informe de Human Rights Watch sostiene que el gobierno saudí utiliza el torneo para <strong>"lavar su mala reputacion en materia de derechos humanos"</strong> <i>(Sportswashing)</i>.
          </p>
          <p>
            El informe retrata las pobres condiciones laborales de los trabajadores inmigrantes que no ven de la misma manera esta noticia que los demás, pues significa van a amplificarse los abusos generalizados, la sustitución de contratos, las altísimas tarifas de contratación, entre otras malas prácticas laborales. Y los trabajadores no son los únicos que se preocupan por la noticia, los grupos LGBTQ+, los derechos de las mujeres y la libertad de prensa,
          </p>
          <br />
          <p>
            La FIFA en un informe reciente cataloga el riesgo para los derechos humanos en esta candidatura como <strong>"medio"</strong>, segun informacion proveniente un grupo de abogados <strong>AS&H Clifford</strong>. En este documento, sostiene que <i>"existe un buen potencial de que acoger la competicion pueda ayudar a contribuir a impactos positivos sobre los derechos humanos en el contexto de la Visión 2030 de Arabia Saudita"</i>. 
          </p>
          <br />
          <p>
            Pero Lina al-Hathoul, Jefa de Seguimiento y Defensa de ALQST for Human Rights, cuestionó este informe, sosteniendo que ninguna organización de derechos humanos ha podido trabajar en Arabia Saudita para corroborar la legitimidad de estos datos.
          </p>
          <br />
          <p>
            Hay diversos casos de encarcelamientos por formar parte de grupos de derechos humanos, incluso hasta por simples tuits, y las consecuencias pueden llegar a ser letales, donde en el año 2024, se reportan hasta <strong>300 personas ejecutadas</strong>. Arabia Saudita se transformó en un <strong>estado policial puro</strong>, de que si bien todos los países violan los derechos humanos, el caso de Arabia Saudita, bajo MBS, cruzó una línea roja.
          </p>
          <br />
          <h3 className="text-3xl font-bold text-[#6A2C70] mt-12 mb-6">El pedido de Human Rights Watch</h3>
          <p>
            HRW le pidió a la FIFA posponer la confirmacion de Arabia Saudita como sede del Mundial 2034 hasta haya una proteccion por las condiciones laborales de los trabajadores y de las mujeres. También pidió que Arabia Saudita se comprometa con los derechos humanos y permita la supervision de los mismos en el país.
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
                    Siguiente nota: "Cuando la billetera atrae a las estrellas"
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