import React from 'react'
import { Link } from 'react-router-dom'

const Entrevista = () => {
    return (
        <article className='bg-gray-50'>
            {/* CONTENEDOR */}
            <div className='container mx-auto max-w-5xl py-12 px-6'>

                {/* ENCABEZADO */}
                <header className='mb-10 text-center'>
                    <p className='text-blue-600 font-semibold text-lg uppercase tracking-wide'>
                        La voz experta
                    </p>
                    <h1 className='text-4xl lg:text-5xl font-extrabold text-gray-900 my-3'>
                        Análisis del Experto: "Algo más que un Mundial"
                    </h1>
                    <p className='text-xl lg:text-2xl text-gray-600 italic'>
                        Como alternativa a la entrevista en vivo, analizamos en formato Q&A el paper "QATAR 2022: ALGO MÁS QUE UN MUNDIAL DE FÚTBOL" de las Lic. Cóvolo y Ralo Venditti, que funciona como la "voz especialista" que valida nuestra teoría.
                    </p>
                    <p className='mt-4 text-base text-gray-500'>
                        Fuente: <a href="https://ediuc.ucongreso.edu.ar/wp-content/uploads/sites/6/2023/08/2.-Qatar-2022-algo-más-que-un-Mundial-de-Fútbol-.pdf" target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:underline'>Revista UCINA (2023), Universidad de Congreso, Mendoza</a>.
                    </p>
                </header>

                {/* IMAGEN */}
                <img src="" alt="" />

                {/* INICIO DE Q&A */}
                <div className='prose prose-lg lg:prose-xl max-w-none text-gray-800 space-y-8'>

                    {/* PREGUNTA 1 */}
                    <div className='q-item'>
                        <h3 className='text-2xl font-bold text-gray-900 mb-3'>
                            P: Mi análisis de las 5 notas de CNN es que el deporte fue un pretexto para una agenda geopolítica. Su paper se pregunta "¿el fútbol es el protagonista?". ¿Cuál es su respuesta?
                        </h3>
                        <div className='respuesta pl-6 border-l-4 border-gray-200'>
                            <p>
                                <strong>R:</strong> (Lic. Cóvolo y Ralo Venditti) El mundial de fútbol en Qatar dejó al descubierto no solo la euforia mundialista sino las <strong>pujas de poder</strong> en torno a las que se diagrama este evento. Mas allá del evento deportivo, las connotaciones político-internacionales son relevantes
                            </p>
                            <p>
                                [...] El mundial de fútbol es más que una serie de partidos y de premios, es un conjunto de alianzas, de balances y de posicionamientos internacionales que se manifiestan a través de un evento.
                            </p>
                        </div>
                    </div>

                    {/* PREGUNTA 2 */}
                    <div className='q-item'>
                        <h3 className='text-2xl font-bold text-gray-900 mb-3'>
                            P: La "Nota 2" de mi análisis se enfoca en cómo CNN cubrió la estrategia de Arabia Saudita para "alterar el orden mundial". ¿Podrían explayarse sobre qué es el "Soft Power" y la "Diplomacia Deportiva" de las que hablan?
                        </h3>
                        <div className='respuesta pl-6 border-l-4 border-gray-200'>
                            <p>
                                <strong>R:</strong> el <strong>soft power</strong> es [...] la capacidad de obtener resultados a través de la atracción y no de la coerción o el pago. Es, por lo tanto, una alternativa amistosa de obtener lo que un Estado manifiesta como interés primordial en su política exterior.
                            </p>
                            <p>
                                Podríamos decir que la monarquía qatarí buscó, a través del *soft power*, posicionarse en la arena internacional mediante su cultura, su modelo social o sus valores políticos, y qué mejor medio para llevarlo adelante que la «diplomacia deportiva», ya que, el mundial permite la interacción y el contacto tanto de Estados como de empresas y poderes económicos.
                            </p>
                        </div>
                    </div>

                    {/* PREGUNTA 3 */}
                    <div className='q-item'>
                        <h3 className='text-2xl font-bold text-gray-900 mb-3'>
                            P: Mi "Nota 3" analizó cómo CNN cubrió la candidatura única de 2034 como un "trámite" corporativo de la FIFA. ¿Es esta la "Diplomacia Deportiva" en acción?
                        </h3>
                        <div className='respuesta pl-6 border-l-4 border-gray-200'>
                            <p>
                                <strong>R:</strong> Si se analiza el ímpetu con que Qatar luchó por [...] sede, [...] lo llevó a <strong>comprar voluntades y votos</strong>; además de buscarse potentes aliados futbolístas de renombre internacional, grandes multinacionales [...] e incluso dirigentes políticos.
                            </p>
                            <p>
                                La estrategia qatarí siguió la lógica de que el fútbol no necesita de traductores y puede constituir una gran herramienta de política exterior sin la necesidad de establecer reuniones entre jefes de Estado.
                            </p>
                        </div>
                    </div>
                    {/* --- PREGUNTA 4 --- */}
          <div className="q-item">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              P: El núcleo de mi teoría es "El Precio del Espectáculo". Mis notas 1, 4 y 5 se basan en las denuncias de DDHH que CNN cubrió. ¿Cómo puede ser "Soft Power" si genera tanta imagen negativa? ¿No es una contradicción?
            </h3>
            <div className="respuesta pl-6 border-l-4 border-gray-200">
              <p>
                **R:** No es una contradicción, es parte de la estrategia. [La candidatura] **inserta en el debate internacional al Estado**. Desde su elección [...] se ha debatido acerca de la situación de las mujeres qataríes, la del grupo LGBTIQ+ [...] [y] la muerte de trabajadores extranjeros.
              </p>
              <p>
                Amnistía Internacional encabezó las campañas mostrando las fallas a derechos fundamentales. [...] Más allá de que lo que se busca es una aceptación internacional [...], y a pesar de la imagen negativa que pueda tener, [Qatar] **logra un posicionamiento y una relevancia que difícilmente tendría** de no albergar este tipo de eventos.
              </p>
            </div>
          </div>

          {/* --- PREGUNTA 5 --- */}
          <div className="q-item">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              P: Para expandir, en su paper mencionan a los "sponsors" y a China. ¿Qué rol jugaron estos otros actores que no son el país anfitrión?
            </h3>
            <div className="respuesta pl-6 border-l-4 border-gray-200">
              <p>
                **R:** Los Estados ya no son los únicos actores relevantes del escenario internacional. [Sobre los] sponsors, [...] el origen de los fondos puede ser tomado desde un escenario geopolítico. Entre los Estados con mayor grado de financiamiento, se muestran las **intenciones chinas de posicionarse** en el mercado global y el subsecuente desplazamiento [...] de Estados Unidos.
              </p>
              <p>
                El país asiático aportó 1395 millones de dólares, por sobre los 1100 millones de dólares invertidos por empresas norteamericanas. Este dato es relevante [...] considerando que su selección nacional no se encontró entre los equipos calificados para esta edición.
              </p>
            </div>
          </div>

          {/* --- PREGUNTA 6 (NUEVA) --- */}
          <div className="q-item">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              P: El paper también menciona a Argentina. ¿Qué rol jugó nuestro país en esta dinámica?
            </h3>
            <div className="respuesta pl-6 border-l-4 border-gray-200">
              <p>
                **R:** Sería un desperdicio no hablar de la selección argentina, quien se consagró campeón [...]. Lo ocurrido [...] es prueba de la relevancia que este deporte tiene como elemento aglutinador.
              </p>
              <p>
                Más allá de las innumerables pasiones que despierta este evento, la **República Argentina no tiene al fútbol como una estrategia** o eje en su política exterior. Que dos de los jugadores más importantes de la historia [...] sean argentinos apenas ha sido aprovechado, [salvo por] la reciente apertura de la Embajada Argentina en Bangladesh.
              </p>
            </div>
          </div>
                </div>

                {/* LINKS */}
                <div className='bg-gray-100 p-6 rounded-lg mt-10 text-base'>
                    <h4 className='font-bold text-lg mb-2 text-gray-900'>Siguientes pasos:</h4>
                    <ul className='list-disc pl-5 space-y-2'>
                        <li>
                            <Link to="/contrapunto" className='text-blue-600 hover:underline'>
                                Ver el análisis de Contrapunto: Diario Olé
                            </Link>
                        </li>
                        <li>
                            <Link to="/analisis/nota1" className='text-blue-600 hover:underline'>
                                Volver al análisis de CNN
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </article>
    )
}

export default Entrevista