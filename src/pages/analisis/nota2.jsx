import React from 'react'
import { Link } from 'react-router-dom'

const nota2 = () => {
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
                El "Nuevo Orden Mundial": CNN Encuadra el fútbol como Geopolítica
            </h1>
            <p className='text-xl lg:text-2xl text-gray-600 italic'>
                La cadena no lo reporta como un "fichaje", sino como una estrategia de 'soft power'. Analizamos la nota sobre cómo Arabia Saudita busca 'alterar el orden mundial' a través del Mundial 2034.
            </p>
        </header>

        {/* IMAGEN  */}
        <img src="" alt="" />

        {/* CONTENIDO DEL ARTICULO */}
        <div className='prose prose-lg lg:prose-xl max-w-none text-gray-800'>
            <p>
                Si la primera nota de análisis se centraba en la <strong>crítica</strong> de los derechos humanos, esta segunda pieza de <strong>CNN en Español</strong> (basada en el artículo de <a href='https://cnnespanol.cnn.com/2023/09/20/arabia-saudita-alterar-orden-mundial-futbol-motivos-podrian-sorprenderte-trax' target='_blank' rel='noopener noreferrer'>Arabia Saudita [busca] alterar el orden mundial...</a>) expone el <strong>motivo</strong> geopolítico. <strong>CNN</strong> no presenta el fichaje del Mundial 2034 como un simple evento deportivo, sino como una jugada estratégica en el tablero global.
            </p>
            <p>
                El lenguaje es clave. El titular no es "Los millones de la Saudi Pro League", sino "Arabia Saudita busca alterar el orden mundial". Esta elección de palabras situa el evento en un contexto mucho más amplio, aliniándolo al plano de las relaciones internacionales, el "soft power" y la competencia global por influencia. El fútbol, en este encuadre, es una herramienta de política exterior, no solo un espectáculo deportivo.
            </p>
            <p>
                Para <strong>CNN</strong>, la llegada de Cristiano Ronaldo no es un hecho deportivo, sino el primer movimiento de estado para ganar influencia global (soft power) y diversificar su economía más allá del petróleo. La nota cita a expertos en relaciones internacionales que explican cómo Arabia Saudita utiliza el deporte para mejorar su imagen internacional y proyectar poder. Este enfoque contrasta fuertemente con la narrativa de medios deportivos tradicionales, que tienden a centrarse en el aspecto comercial o de entretenimiento del fichaje.
            </p>

            <blockquote className='border-l-4 border-blue-500 bg-blue-50 p-6 my-8 text-xl font-medium text-gray-700 italic'>
                "CNN encuadra la liga saudí no como una competencia deportiva emergente, sino como una multimillonaria herramienta de 'soft power' diseñada para limpiar la imagen del país y ganar influencia global."
            </blockquote>

            <p>
                Aquí, la teoría del "sportswashing" se presenta como una táctica deliberada de un estado autoritario para mejorar su reputación internacional. El medio explica cómo el fondo soberano de Arabia Saudita (PIF) está detrás de estos movimientos, vinculando el fútbol con la Fórmula 1, el golf (LIV) y la compra de equipos como el Newcastle United. <strong>CNN</strong> no habla de "hinchas", habla de "activos estratégicos" en la guerra de la influencia global.
            </p>
            <p>
                Este es el contrapunto más claro con Diario Olé. Un medio deportivo tradicional podría celebrar la llegada de una superestrella como Cristiano Ronaldo, contando sus goles, récords y la "pasión" de los nuevos fans. <strong>CNN</strong>, en cambio, lo cubre como una pieza en un tablero de ajedrez geopolítico. El fútbol es solo el medio para un fin mayor: la reconfiguración del poder global.
            </p>
            <p>
                La postura de <strong>CNN</strong> es consistente: el "precio del espectáculo" no es solo monetario, sino el costo de un cambio en el orden mundial, donde los derechos humanos y la democracia son sacrificados en el altar del poder y la influencia. El análisis de esta nota refuerza la idea de que el deporte, lejos de ser un espacio neutral, es un campo de batalla político donde se juegan mucho más que partidos.
            </p>

            <div className='bg-gray-100 p-6 rounded-lg mt-10 text-base'>
                <h4 className='font-bold text-lg mb-2 text-gray-900'>Para ampliar el análisis:</h4>
                <ul className='list-disc pl-5 space-y-2'>
                    <li>
                        {/* LINK A LA NOTA 3 */}
                        <Link to="/analisis/nota3" className='text-blue-600 hover:underline'>
                            Siguiente análisis: La candidatura única al Mundial 2034
                        </Link>
                    </li>
                    <li>
                        {/* LINK A LA NOTA DE CONTRAPUNTO */}
                        <Link to="/contrapunto" className='text-blue-600 hover:underline'>
                            Leer contrapunto: La cobertura de Diario Olé
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        </div>
    </article>
    )
}

export default nota2