import React from 'react'
import { Link } from 'react-router-dom'

const nota3 = () => {
    return (
        <article className='bg-white'>
            {/* CONTENEDOR DEL ARTICULO */}
            <div className='container mx-auto max-w-3xl py-12 px-6'>
                
                {/* TITULO */}
                <header className='mb-8'>
                    <p className='text-blue-600 font-semibold text-lg uppercase tracking-wide'>
                        Análisis de cobertura: CNN
                    </p>
                    <h1 className='text-4xl lg:text-5xl font-extrabold text-gray-900 my-3'>
                        La "Coronación" del candidato único: El encuadre político del Mundial 2034 en CNN
                    </h1>
                    <p className='text-xl lg:text-2xl text-gray-600 italic'>
                        La cobertura de la candidatura única de Arabia Saudita al Mundial 2034 no es presentada como un logro deportivo, sino como una formalidad política y corporativa de la FIFA.
                    </p>
                </header>

                {/* IMAGEN  */}
                <img src="" alt="" />

                {/* CONTENIDO DEL ARTICULO */}
                <div className='prose prose-lg lg:prose-xl max-w-none text-gray-800'>
                    <p>
                        Dando continuidad a los análisis previos, esta tercera nota de <strong>CNN en Español</strong> (basada en el artículo <a href='https://cnnespanol.cnn.com/2023/10/31/arabia-saudita-se-perfila-unico-candidato-buscara-mundial-2034-orix' target='_blank' ref="noopener noreferrer">"Arabia Saudita se perfila como único candidato para buscar el Mundial 2034"</a>) se centra en el proceso de selección de la sede. El tono de la nota es clave: no es de celebración, sino de cosntatación de un hecho político y corporativo.
                    </p>
                    <p>
                        El encuadre del medio sugiere que la "carrera" por la sede del Mundial 2034 nunca fue realmente una competencia. <strong>CNN</strong> resalta que Australia se "retiro" justo antes de la fecha límite, dejando a Arabia Saudita como el "único candidato". La postura del medio no es la de narrar una victoria deportiva, sino la de exponer un proceso que carece de competencia real, lo que refuerza la narrativa de un evento decidido por intereses políticos y económicos más que por méritos deportivos.
                    </p>
                    <p>
                        Al centrarse en el comunicado de Gianni Infantino (presidente de la FIFA) que celebra la "unidad" y el "consenso", <strong>CNN</strong> sutilmente resalta la naturaleza política del proceso. La nota informa que el Mundial se jugará en Asia/Oceanía por primera vez desde 2002, pero no lo presenta como un logro para Arabia Saudita, sino como una formalidad dentro de la estrategia global de la FIFA. El tono es neutral, casi burocrático, lo que contrasta con la narrativa festiva que podría esperarse de un medio deportivo tradicional.
                    </p>

                    {/* RECUADRO DESTACADO */}
                    <blockquote className='border-l-4 border-blue-500 bg-blue-50 p-6 my-8 text-gray-700 italic'>
                        "La postura de CNN es implícita: al presentar la candidatura única como un "trámite" y una "coronación" inevitable, el medio expone la falta de transparencia y competencia en el proceso de selección, enmarcando a la FIFA como una entidad más interesada en sus propios intereses corporativos que en la integridad deportiva.
                    </blockquote>

                    <p>
                        Mientras un medio como <strong>Diario Olé</strong> podría curbir esta noticia con un enfoque en la "fiesta del fútbol" o como un "Mundial en el desierto", enfoncandose en el lujo futuro, <strong>CNN</strong> mantiene su postura crítica y analítica. Se centra en el <strong>cómo</strong> se tomó la decisión: un proceso acelerado y sin competencia real que allanó el camino para la candidatura de Arabia Saudita.
                    </p>
                    <p>
                        Este encuadre refuerza la teoría general del "sportswashing". El análisis de <strong>CNN</strong> no se detiene en la superficie (el evento), sino que profundiza en las estructuras de poder (la FIFA) y las estrategias geopolíticas (el soft power saudí). La "coronación" de Arabia Saudita como sede del Mundial 2034 es presentada no como un triunfo deportivo, sino como la culminación de un proceso político y corporativo que refleja las dinámicas de poder global en el deporte.
                    </p>
                    <p>
                        Al conectar esta nota con los análisis previos, (las críticas de DDHH y la estrategia del "nuevo orden"), <strong>CNN</strong> pinta un cuadro completo. El "precio del espectáculo" es, una vez más, el costo humano, político y ético de un evento que, lejos de ser un simple juego, es una herramienta en el tablero geopolítico global.
                    </p>

                    {/* LINKS  AMPLIATORIOS */}
                    <div className='bg-gray-100 p-6 rounded-lg mt-10 text-base'>
                        <h4 className='font-bold text-lg mb-2 text-gray-900'>Para ampliar el análisis:</h4>
                        <ul className='list-disc pl-5 space-y-2'>
                            <li>
                                <Link to="/analisis/nota4" className='text-blue-600 hover:underline'>
                                    Siguiente análisis: La conexión con Qatar y la Amnistía Internacional
                                </Link>
                            </li>
                            <li>
                                <Link to="/contrapunto" className='text-blue-600 hover:underline'>
                                    Análisis contrapunto: Diario Olé
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default nota3