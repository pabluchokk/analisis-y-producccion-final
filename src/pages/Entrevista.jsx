import React from "react";
import { Link } from "react-router-dom";

// --- IMPORTANTE: USA MAYÚSCULA ---
const Entrevista = () => {

    const paperUrl = "https://ediuc.ucongreso.edu.ar/wp-content/uploads/sites/6/2023/08/2.-Qatar-2022-algo-ma%CC%81s-que-un-Mundial-de-Fu%CC%81tbol-.pdf";

    return (
        <article className="bg-white">
        {/* Contenedor del Artículo */}
        <div className="container mx-auto max-w-3xl py-12 px-6">
            {/* --- Encabezado --- */}
            <header className="mb-10">
                <p className="text-blue-600 font-semibold text-lg uppercase tracking-wide">
                    Entrevista Exclusiva
                </p>
                {/* TÍTULO ELEGIDO (CITA 1) */}
                <h1 className="text-3xl lg:text-5xl font-extrabold text-gray-900 my-4 leading-tight">
                    "Arabia Saudita sigue los pasos de Qatar en términos de estrategia
                    de Soft Power"
                </h1>
                <p className="text-xl lg:text-2xl text-gray-600 italic mt-4">
                    Dialogamos con la <strong>Lic. Clara Ralo Venditti</strong>,
                    especialista en Relaciones Internacionales y coautora del paper
                    "Qatar 2022", quien analiza la geopolítica detrás de la pelota y el
                    futuro de la región con el Mundial 2034.
                </p>
                <p className="mt-4 text-base text-gray-500 border-t pt-2">
                    Entrevista realizada para este Trabajo Práctico el 14/11/2025.
                </p>
                <a 
                href={paperUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 font-bold rounded-lg hover:bg-blue-100 transition-colors border border-blue-200"
                >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                    Leer paper completo (PDF)
                </a>
            </header>

            {/* --- Imagen --- */}
            <img
            src="/../../../public/venditti.jpg" 
            alt="Análisis académico del Mundial"
            className="w-full h-auto rounded-lg shadow-lg mb-10 object-cover max-h-[400px]"
            />

            {/* --- CUESTIONARIO --- */}
            <div className="prose prose-lg lg:prose-xl max-w-none text-gray-800 space-y-10">
            {/* --- PREGUNTA 1 --- */}
            <div className="q-item">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                    P: ¿Cree que la estrategia de 'soft power' de Qatar funcionó, o la
                    cobertura sobre las diversas violaciones a los Derechos Humanos
                    terminó imponiendo una imagen negativa?
                </h3>   
                <div className="respuesta pl-6 border-l-4 border-blue-500 bg-gray-50 p-6 rounded-r-lg">
                <p className="font-semibold text-gray-900 mb-2">
                    R: (Lic. Clara Ralo Venditti)
                </p>
                <p>
                    Personalmente, considero que Qatar fue beneficiado por su
                    estrategia de softpower. Si bien la cobertura sobre las
                    violaciones a Derechos Humanos polemizó su candidatura,
                    finalmente se mostró como un país receptivo y apto para el
                    desarrollo de eventos con alcance internacional.
                </p>
                <p className="mt-2">
                    Incluso la ha diversificado. Por ejemplo, dentro de la
                    conflictividad de Medio Oriente se ha posicionado como un
                    referente de acuerdos de paz. Podés revisar el rol que tuvo en
                    el cese de hostilidades entre Hamas e Israel.
                </p>
                </div>
            </div>

            {/* --- PREGUNTA 2 --- */}
            <div className="q-item">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                P: ¿Es el fútbol hoy en día la herramienta política exterior más
                eficaz para un país que busca mejorar su reputación internacional?
                </h3>
                <div className="respuesta pl-6 border-l-4 border-blue-500 bg-gray-50 p-6 rounded-r-lg">
                <p className="font-semibold text-gray-900 mb-2">
                    R: (Lic. Clara Ralo Venditti)
                </p>
                <p>
                    El fútbol no es la herramienta de política exterior más eficaz,
                    ya que constituye un solo deporte en el mundo de la diplomacia
                    deportiva. No obstante, es una aproximación a la diplomacia
                    cultural porque es un elemento unificador que permite acceder a
                    diferentes realidades. Es decir, el fútbol es una puerta a
                    nuevas culturas a través de un lenguaje común.
                </p>
                <p className="mt-2">
                    Además, está el hecho de que es el ingreso a un mercado con
                    millones de consumidores y que éstos están pendientes de los
                    eventos durante casi un mes. En este caso fue el primer paso, o
                    uno de los primeros, para posicionar a Qatar como algo más que
                    un país que profesa el islam y que vende petróleo.
                </p>
                </div>
            </div>

            {/* --- PREGUNTA 3 --- */}
            <div className="q-item">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                P: ¿Cree que la FIFA diluye las protestas sobre los DDHH una vez
                que comienza la competencia? ¿Qué rol cree que cumple la FIFA ante
                todo esto?
                </h3>
                <div className="respuesta pl-6 border-l-4 border-blue-500 bg-gray-50 p-6 rounded-r-lg">
                <p className="font-semibold text-gray-900 mb-2">
                    R: (Lic. Clara Ralo Venditti)
                </p>
                <p>
                    La FIFA hizo caso omiso a las protestas e incluso condenó la
                    postura alemana de utilizar brazaletes que apuntaban al
                    reconocimiento de los derechos LGBTQ+. Su rol fue de un silencio
                    a favor de las manifestaciones sobre las violaciones de DDHH y
                    la condena a algunas cuestiones culturales que no se permitían
                    en Qatar.
                </p>
                </div>
            </div>

            {/* --- PREGUNTA 4 (La del Título) --- */}
            <div className="q-item">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                P: ¿Ve la candidatura de Arabia Saudita como la consolidación
                definitiva de la estrategia de 'lavado de cara' de Medio Oriente
                que inició en Qatar?
                </h3>
                <div className="respuesta pl-6 border-l-4 border-blue-500 bg-gray-50 p-6 rounded-r-lg">
                <p className="font-semibold text-gray-900 mb-2">
                    R: (Lic. Clara Ralo Venditti)
                </p>
                <p className="font-bold text-gray-800">
                    Arabia Saudita sigue los pasos de Qatar en términos de
                    estrategia de Soft Power.
                </p>
                <p className="mt-2">
                    Es más, su estrategia es de larga data aunque se ha posicionado
                    como un aliado de occidente silencioso frente a potencias
                    revisionistas como Irán. No obstante, es imposible hablar de
                    consolidación definitiva de la estrategia en Medio Oriente
                    porque la región enfrenta una conflictividad que es incompatible
                    con esa afirmación. Sí se puede hablar de un desarrollo
                    estratégico en los países del golfo (como subregión dentro de
                    Medio Oriente).
                </p>
                </div>
            </div>

            {/* --- PREGUNTA 5 --- */}
            <div className="q-item">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                P: ¿El 'sportswashing' puede generar cambios políticos reales? ¿O
                funciona sólo como una máscara cuando el mundo los ve?
                </h3>
                <div className="respuesta pl-6 border-l-4 border-blue-500 bg-gray-50 p-6 rounded-r-lg">
                <p className="font-semibold text-gray-900 mb-2">
                    R: (Lic. Clara Ralo Venditti)
                </p>
                <p>
                    Depende de los cambios políticos de los que hables. Por ejemplo,
                    la visibilización del mundial del 78 en Argentina evidenció las
                    violaciones a DDHH y fortaleció los reclamos internos e
                    internacionales sobre esto generando la visita de la CIDH en el
                    79. Durante el mundial de Brasil del 2014 también visibilizó
                    movimientos de protesta en Río. A China los juegos Olímpicos le
                    permitieron abrir las puertas de la modernización.
                </p>
                <p className="mt-2">
                    Estos eventos deportivos ilustran las realidades políticas de
                    los países y si son bien aprovechados posicionan política y
                    comercialmente a los países. Los cambios políticos dependen del
                    contexto doméstico del Estado anfitrión y de la recepción que
                    tiene en la Comunidad Internacional. Por lo tanto, no es un
                    elemento unificador sino algo personalizado.
                </p>
                </div>
            </div>

            {/* --- PREGUNTA 6 --- */}
            <div className="q-item">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                P: ¿La pasión del hincha termina "absolviendo" al anfitrión,
                permitiendo que el espectáculo prevalezca por sobre la defensa de
                los Derechos Humanos?
                </h3>
                <div className="respuesta pl-6 border-l-4 border-blue-500 bg-gray-50 p-6 rounded-r-lg">
                <p className="font-semibold text-gray-900 mb-2">
                    R: (Lic. Clara Ralo Venditti)
                </p>
                <p>
                    Si lo pensás desde la hinchada Argentina, obvio que sí, pero
                    somos un segmento único. No es la pasión del hincha sino la
                    recepción por parte del anfitrión, es generar un buen ambiente
                    para disfrutar del evento deportivo.
                </p>
                <p className="mt-2">
                    Qatar, en mi opinión, lo logró gracias a un esfuerzo por la
                    excelencia logística y por adaptarse en algunas cuestiones,
                    algunas manifestaciones permitidas o el hecho de que se podía
                    consumir alcohol dentro de los hoteles y no en la vía pública.
                    Esta hibridez es lo que garantiza el éxito y siempre tiene que
                    venir de una estrategia pensada y premeditada y no de acciones
                    erráticas y aisladas.
                </p>
                </div>
            </div>

            {/* CONCLUSION */}
            <div className="bg-gray-800 text-white p-8 rounded-lg shadow-xl my-12">
                <h3 className="text-2xl font-bold text-[#f9ed69] mb-4">Conclusión y reflexiones</h3>
                <p className="text-lg leading-relaxed">
                    Las definiciones de la Lic. Ralo Venditti confirman la hipótesis central de este trabajo. Mientras <strong className="text-[#f08a5d]">Diario Olé</strong> se enfocó en la "pasión del hincha" y el éxito logístico (puntos que la entrevistada destaca como claves del éxito qatarí), <strong className="text-[#22d3ee]">CNN</strong> expuso el costo humano de ese éxito.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                    La validación académica de que "Arabia Saudita sigue los pasos de Qatar" demuestra que la cobertura geopolítica de CNN no fue un hecho aislado sino la anticipación de un modelo que llegó para quedarse en el deporte global.
                </p>
            </div>

            {/* --- Links Ampliatorios --- */}
            <div className="bg-gray-100 p-6 rounded-lg mt-10 text-base">
                <h4 className="font-bold text-lg mb-2 text-gray-900">
                Siguientes pasos:
                </h4>
                <ul className="list-disc pl-5 space-y-2">
                <li>
                    <Link
                    to="/contrapunto"
                    className="text-blue-600 hover:underline"
                    >
                    Ver el análisis de Contrapunto: Diario Olé
                    </Link>
                </li>
                <li>
                    <Link
                    to="/analisis/nota1"
                    className="text-blue-600 hover:underline"
                    >
                    Volver al Análisis de CNN
                    </Link>
                </li>
                </ul>
            </div>

            <div className="w-full my-8 flex justify-center">
            <a href="https://www.villavicencio.com.ar/?gad_source=1&gad_campaignid=21401428039&gclid=EAIaIQobChMIrcTt5db8kAMVMlNIAB0uJCIWEAAYASAAEgJjD_D_BwE" target="_blank" rel="noopener noreferrer" 
               className="block max-w-sm mx-auto shadow-lg overflow-hidden rounded-lg">
              <img 
                src="/anuncio6.jpg"
                alt="Publicidad Agua Villavicencio" 
                className="w-full h-auto object-contain" 
              />
            </a>
          </div>
            </div>
        </div>
    </article>
);
};

export default Entrevista;
