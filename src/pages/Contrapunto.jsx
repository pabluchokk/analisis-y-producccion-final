// src/pages/Contrapunto.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Contrapunto = () => {
  return (
    <article className="bg-white min-h-screen">
      {/* Contenedor del Artículo */}
      <div className="container mx-auto max-w-4xl py-16 px-6 lg:px-8">
        
        {/* --- Encabezado (Estilo Flashy) --- */}
        <header className="mb-10 border-b-4 border-[#B83B5E] pb-8">
          <p className="text-[#6A2C70] font-bold text-sm tracking-widest uppercase mb-2">
            El contrapunto: Olé
          </p>
          <h1 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
            La Fiesta en Olé: Cuando la Épica silencia a la Política
          </h1>
          <p className="text-xl lg:text-2xl text-gray-600 font-serif leading-relaxed">
            Analizamos la cobertura de Diario Olé: no hubo censura, hubo una saturación de alegría. Cómo la gloria de la Selección desplazó a los Derechos Humanos.
          </p>
          <p className="mt-4 text-base text-gray-500">
            Fuente de referencia: <a href="https://www.ole.com.ar/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Diario Olé</a>.
          </p>
        </header>

        {/* --- Imagen --- */}
        <figure className="mb-12">
          <img 
            src="argentinaCampeon.jpg" 
            alt="Portada de Diario Olé celebrando el Mundial" 
            className="w-full h-auto rounded-xl shadow-2xl object-cover max-h-[500px]"
          />
          <figcaption className="mt-3 text-sm text-gray-500 italic text-center">
            La narrativa visual de Olé: emoción, color y protagonistas deportivos. El contexto geopolítico desaparece del encuadre.
          </figcaption>
        </figure>

        {/* --- Cuerpo del Artículo (Análisis Extenso) --- */}
        <div className="prose prose-lg lg:prose-xl max-w-none text-gray-800 leading-loose">
          
          <p>
            Mientras <strong>CNN en Español</strong> construyó una narrativa forense centrada en el costo político y humano de Qatar 2022, la cobertura de <strong>Diario Olé</strong> representó el polo opuesto: la inmersión total en el espectáculo. Este contraste es fundamental para entender la hipótesis de este trabajo: el "sportswashing" no funciona ocultando la realidad, sino ahogándola en una marea de emociones positivas.
          </p>
          <p>
            El encuadre de <em>Olé</em> fue, desde el día uno, el de la militancia de la felicidad. El foco editorial se alineó con el deseo de su audiencia: ver rodar la pelota. Los partidos, las polémicas del VAR, la "locura" de la hinchada argentina en Doha y la mística creciente alrededor de Lionel Messi ocuparon la totalidad de la agenda. Las noticias sobre las restricciones a las mujeres o las cifras de muertos en la construcción de los estadios —ejes centrales en CNN— quedaron relegadas a breves notas marginales.
          </p>

          {/* RECUADRO DESTACADO */}
          <div className="my-14 p-10 bg-red-50 border-l-8 border-[#B83B5E] rounded-r-xl shadow-sm">
            <blockquote className="text-2xl font-medium text-gray-800 italic leading-relaxed">
              "No hubo un silencio total, hubo un desplazamiento jerárquico. Ante la magnitud histórica de la consagración argentina, las denuncias geopolíticas pasaron naturalmente a un 'segundo plano', eclipsadas por la luz de la tercera estrella".
            </blockquote>
          </div>

          <h3 className="text-3xl font-bold text-[#6A2C70] mt-12 mb-6">La Comercialización de la Memoria</h3>
          <p>
            La prueba definitiva de este enfoque es el lanzamiento de productos editoriales como la <strong>"Revista del Campeón"</strong>. Olé promocionó este producto como <span className="italic">"una revista única para guardar toda la vida"</span>, prometiendo <span className="italic">"132 páginas con toda la fiesta del campeón"</span>.
          </p>
          <p>
            El lenguaje utilizado en la promoción es revelador: se centra exclusivamente en la épica (<span className="italic">"Leo en su hora más gloriosa"</span>, <span className="italic">"Dibu y sus manos de Dios"</span>) y en la conexión emocional (<span className="italic">"los pibes que cumplieron un sueño"</span>). En esas 132 páginas diseñadas para la posteridad, no hay espacio para las cifras de trabajadores muertos ni para las controversias que CNN denunció. El medio no solo reportó la fiesta; la empaquetó como un objeto de colección inmaculado.
          </p>

          <h3 className="text-3xl font-bold text-[#6A2C70] mt-12 mb-6">Asepsia Histórica: De 1978 a 2022</h3>
          <figure className="mb-12">
          <img 
            src="argentina1978.jpg" 
            alt="Argentina celebrando el mundial de 1978" 
            className="w-full h-auto rounded-xl shadow-2xl object-cover max-h-[500px]"
          />
          <figcaption className="mt-3 text-sm text-gray-500 italic text-center">
            El Mundial de 1978 realizado en nuestro país, cuyo contexto que atravesaba pasó por arriba...
          </figcaption>
        </figure>
          <p>
            Un punto fascinante de la cobertura de <em>Olé</em> es cómo conecta este triunfo con la historia. La revista promete <span className="italic">"el recuerdo del título del 78 y del 86"</span>. Al igual que con Qatar, la referencia al Mundial 78 se hace puramente desde la gloria deportiva ("Kempes", "el Matador"), borrando por completo el contexto oscuro de la dictadura militar que utilizó ese torneo para su propio "sportswashing".
          </p>
          <p>
            Este paralelismo confirma un patrón editorial: para la prensa deportiva masiva, la Copa limpia el contexto. Ya sea la dictadura del 78 o las violaciones de DDHH en Qatar 2022, la narrativa de la "gloria nacional" actúa como un filtro purificador que elimina las impurezas políticas de la memoria colectiva.
          </p>

          <h3 className="text-3xl font-bold text-[#6A2C70] mt-12 mb-6">El "Hincha Global" Despolitizado</h3>
          <p>
            Finalmente, <em>Olé</em> celebra el fenómeno de los hinchas en <span className="italic">"Bangladesh y la India"</span> como una extensión de la "fiesta popular" y el amor por Messi. Donde un analista geopolítico vería el éxito del <em>Soft Power</em> qatarí logrando una audiencia global, <em>Olé</em> ve solo pasión. Al enmarcar este apoyo internacional únicamente como fanatismo deportivo, el medio contribuye involuntariamente al objetivo de los organizadores: normalizar su presencia en el escenario global a través de la emoción del fútbol.
          </p>

          <p>
            En síntesis, el contrapunto es total. CNN miró las tribunas vacías y vio trabajadores explotados; Olé miró las tribunas llenas y vio la mejor hinchada del mundo. Ambas cosas eran ciertas, pero al elegir qué verdad amplificar y convertir en revista de colección, <em>Diario Olé</em> validó, por omisión y saturación, el objetivo final de Qatar: que el mundo hablara solo de fútbol.
          </p>

          {/* --- CAJA DE SIGUIENTES PASOS --- */}
          <div className="mt-20 p-10 bg-[#0F172A] rounded-2xl text-white shadow-2xl border border-gray-700">
            <h4 className="text-2xl font-bold text-[#F9ED69] mb-6 border-b border-gray-600 pb-4">
              Cierre del Trabajo:
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start group">
                <span className="text-[#F08A5D] mr-4 text-2xl transition-transform group-hover:translate-x-1">➜</span>
                <div>
                  <Link to="/entrevista" className="text-lg font-semibold hover:text-[#F08A5D] transition-colors block">
                    Leer la Voz Experta
                  </Link>
                  <span className="text-sm text-gray-400">La entrevista exclusiva que explica por qué funcionó esta estrategia.</span>
                </div>
              </li>
              <li className="flex items-start group">
                <span className="text-[#B83B5E] mr-4 text-2xl transition-transform group-hover:translate-x-1">➜</span>
                <div>
                  <Link to="/" className="text-lg font-semibold hover:text-[#B83B5E] transition-colors block">
                    Volver a la Portada
                  </Link>
                  <span className="text-sm text-gray-400">Repasar el análisis completo de CNN.</span>
                </div>
              </li>
            </ul>
            
            <div className="mt-8 pt-6 border-t border-gray-700 text-sm text-right">
              Fuente de referencia: <a href="https://www.ole.com.ar/seleccion/libro-campeon-ole-qatar-mundial_0_r0VNkl10Zz.html/" target="_blank" rel="noopener noreferrer" className="text-[#22D3EE] hover:text-white underline decoration-1 underline-offset-2">Diario Olé</a>
            </div>
          </div>

          <div className="w-full my-8 flex justify-center">
            <a href="https://www.packfutbol.com.ar/?gad_source=1&gad_campaignid=21876704585&gclid=EAIaIQobChMIruqViNj8kAMV_UFIAB201SsQEAAYBCAAEgL4OvD_BwE" target="_blank" rel="noopener noreferrer" 
                className="block max-w-sm mx-auto shadow-lg overflow-hidden rounded-lg">
              <img 
                src="/anuncio7.jpg" 
                alt="Publicidad Pack de Fútbol" 
                className="w-full h-auto object-contain" 
              />
            </a>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Contrapunto;