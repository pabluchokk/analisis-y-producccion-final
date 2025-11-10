import React from 'react'
import { Link } from 'react-router-dom'

const nota4 = () => {
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
                La "herida abierta" del Mundial Qatar 2022: La conexión con Amnistía Internacional
            </h1>
            <p className='text-xl lg:text-2xl text-gray-600 italic'>
                A tres años del Mundial en Qatar, CNN no olvida. El medio refuerza su postura crítica al dar voz a Amnistía Internacional, que denuncia las violaciones de derechos humanos y el "sportswashing" asociado al evento.
            </p>
        </header>

        {/* IMAGEN  */}
        <img src="" alt="" />

        {/* CONTENIDO DEL ARTICULO */}
        <div className='prose prose-lg lg:prose-xl max-w-none text-gray-800'>
            <p>
                Esta cuarta nota (basada en el artículo <a href="https://cnnespanol.cnn.com/2023/11/17/amnistia-internacional-abusos-trabajadores-mundial-qatar-2022-trax" target='_blank' rel='noopener noreferrer'>Amnistía Internacional denuncia abusos laborales en la realización del Mundial Qatar 2022</a>) es quizas la mas contundenteen cuanto a la postura editorial de <strong>CNN en Español</strong>. La noticia no es un evento nuevo, sino un recordatorio de las consecuencias humanas y éticas del "sportswashing" en el contexto del Mundial 2022 en el páis árabe.
            </p>
            <p>
                Mientras un medio de enfoque puramente deportivo como <strong>Olé</strong> podría haber pasado por alto o minimizado las críticas post-evento (incluso esta invisibilizacion siendo intensificada por la victoria de Argentina, mostrando un mayor foco en las celebraciones por el título mundial), <strong>CNN</strong> no solo mantiene el foco en las denuncias, sino que las usan para reforzar su narartiva crítica sobre el uso del deporte como herramienta de lavado de imágen, esta postura se mantuvo vigente antes, durante y años después del evento.
            </p>

            {/* RECUADRO DESTACADO */}
            <blockquote className='border-l-4 border-blue-500 bg-blue-50 p-6 my-8 text-xl font-medium text-gray-700 italic'>
                "Al usar a Amnistía Internacional como fuente principal, CNN transforma una noticia 'vieja' en un recordatorio poderoso de las heridas abiertas que el Mundial dejó en términos de derechos humanos. La postura es clara: el 'precio del espectáculo' no termina con el pitazo final, sino que deja secuelas duraderas que no deben ser ignoradas."
            </blockquote>

            <p>
                El medio no necesita decir explícitamente que el Mundial fue un "sportswashing" en cada nota; su postura ya está establecida. A través de esta selección de notas (Qatar, el "nuevo orden mundial", la candidatura única y ahora las denuncias post-evento), <strong>CNN</strong> construye un discurso coherente y consistente. La inclusión de Amnistía Internacional no es casual; es una estrategia deliberada para subrayar las consecuencias humanas del evento, reforzando la idea de que detrás del brillo y el glamour del Mundial, hay historias de explotación y abuso que no pueden ser silenciadas.
            </p>
            <p>
                En conclusión, esta cuarta nota cierra el círculo del análisis presentado por <strong>CNN en Español</strong>. Desde la crítica inicial de los derechos humanos hasta la denuncia post-evento, el medio mantiene una postura editorial firme y coherente. El "precio del espectáculo" es un concepto que atraviesa todas las notas, recordándonos que el deporte, cuando es manipulado por intereses políticos y económicos, tiene un costo humano que no debe ser olvidado.
            </p>

            {/* LINKS  AMPLIATORIOS */}
            <div className='bg-gray-100 p-6 rounded-lg mt-10 text-base'>
                <h4 className='font-bold text-lg mb-2 text-gray-900'>Para ampliar el análisis:</h4>
                <ul className='list-disc pl-5 space-y-2'>
                    <li>
                        {/* LINK A LA NOTA 5 */}
                        <Link to="/analisis/nota5" className='text-blue-600 hover:underline'>
                            Las muertes en los estadios de Qatar
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

export default nota4