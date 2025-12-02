import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

  const analysisNotes = [
    {
      title: "SE ENCIENDEN LAS ALARMAS",
      summary: "Cómo CNN prioriza la denuncia de Amnistía Internacional sobre la candidatura única de Arabia Saudita.",
      link: "/analisis/nota1",
      image: "/mundial2034.jpg"
    },
    {
      title: "CUANDO LA BILLETERA PESA",
      summary: "El análisis de CNN sobre la estrategia geopolítica saudí para 'alterar el orden mundial' con el fútbol.",
      link: "/analisis/nota2",
      image: "/nuevoorden.jpg"
    },
    {
      title: "GANADOR POR DEFAULT",
      summary: "La cobertura del proceso de la FIFA, encuadrado como un 'trámite' corporativo y político, no deportivo.",
      link: "/analisis/nota3",
      image: "/candidatura.jpg"
    },
    {
      title: "LA HERIDA QUE NO CIERRA",
      summary: "A tres años del mundial, CNN recuerda la falta de justicia para los trabajadores migrantes.",
      link: "/analisis/nota4",
      image: "/costohumano.jpg"
    },
    {
      title: "LA PREGUNTA PROHIBIDA",
      summary: "El clímax de la postura: la nota que pregunta '¿Cuántos muertos?' en plena fiesta del Mundial.",
      link: "/analisis/nota5",
      image: "/trabajadores.jpg"
    }
  ];


  return (
    <>
      {/* --- 1. SECCIÓN HERO (CON IMAGEN) --- */}
      <main 
        className="relative h-[80vh] flex items-center justify-center text-center text-white bg-cover bg-center bg-fixed"
        // PONE ACÁ LA RUTA A TU IMAGEN. Si está en 'public', usa '/mi-imagen.jpg'
        style={{ backgroundImage: `url('/hero.jpg')` }} 
      >
        {/* Filtro oscuro para que el texto resalte */}
        <div className="absolute inset-0 bg-[#6A2C70] opacity-60"></div>

        {/* Contenido del Hero (encima del filtro) */}
        <div className="relative z-10 p-6">
          <h1 className="text-5xl lg:text-7xl font-extrabold uppercase tracking-tight text-[#F9ED69] mb-5">
            EL PRECIO DEL ESPECTÁCULO
          </h1>
          <h2 className="text-2xl lg:text-3xl font-light text-gray-200 italic max-w-3xl mb-8 mx-auto">
            Análisis de la postura de <i>CNN en Español</i> sobre el costo humano en Medio Oriente, en contrapunto con la pasión del Mundial que se muestra en <i>Diario Olé</i>.
          </h2>
          
          {/* Este botón ahora hace SCROLL a la sección de análisis */}
          <a 
            href="#analisis-section" 
            className="bg-[#F08A5D] text-white font-bold text-lg uppercase px-8 py-4 rounded-md hover:bg-[#B83B5E] transition-all duration-300 transform hover:-translate-y-0.5"
          >
            Leer Análisis
          </a>
        </div>
      </main>

      {/* --- 2. SECCIÓN DE TEASERS DE ANÁLISIS (¡NUEVA!) --- */}
      {/* Este ID permite que el botón de arriba haga scroll aquí */}
      <section id="analisis-section" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-[#6A2C70] text-center mb-4">
            El Análisis: Las 5 Claves
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 italic">
            La postura de CNN se construye con una cobertura sostenida. Estas son las 5 notas clave:
          </p>

          {/* Grid de las 5 Notas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Mapeamos 3 notas principales (para un grid limpio) */}
            {analysisNotes.slice(0, 3).map((note) => (
              <Link to={note.link} key={note.title}>
                <div className="bg-white rounded-lg shadow-xl overflow-hidden 
                                transform transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full">
                  <img src={note.image} alt={note.title} className="w-full h-48 object-cover"/>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{note.title}</h3>
                    <p className="text-gray-700">{note.summary}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Grid para las 2 notas restantes (para completar las 5) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {analysisNotes.slice(3, 5).map((note) => (
              <Link to={note.link} key={note.title}>
                <div className="bg-white rounded-lg shadow-xl overflow-hidden 
                                transform transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full">
                  <img src={note.image} alt={note.title} className="w-full h-48 object-cover"/>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{note.title}</h3>
                    <p className="text-gray-700">{note.summary}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* --- 3. SECCIÓN CONTRAPUNTO Y ENTREVISTA (¡NUEVA!) --- */}
      <section className="py-20 bg-[#6A2C70] border-t border-b border-gray-200">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-[#F9ED69] text-center mb-12">
            Secciones Clave del Trabajo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Card Contrapunto */}
            <Link to="/contrapunto">
              <div className="bg-white p-8 rounded-lg shadow-xl h-full transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <h3 className="text-3xl font-bold text-[#B83B5E] mb-3">El Contrapunto: Olé</h3>
                <p className="text-lg text-gray-700">
                  Analizamos la "tendencia diferente". No hubo silencio total, sino una <strong>jerarquización</strong> donde la euforia de la Selección desplazó a los DDHH a un segundo plano.
                </p>
              </div>
            </Link>

            {/* Card Entrevista */}
            <Link to="/entrevista">
              <div className="bg-white p-8 rounded-lg shadow-xl h-full 
                              transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <h3 className="text-3xl font-bold text-[#F08A5D] mb-3">La Voz Experta</h3>
                <p className="text-lg text-gray-700">
                  Dialogamos con la <strong>Lic. Clara Ralo Venditti</strong>, coautora del paper "Qatar 2022", quien analiza la efectividad de la estrategia de Soft Power y el futuro con Arabia Saudita.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* --- 4. SECCIÓN DE PUBLICIDAD (Requerida) --- */}
      <div className="w-full my-8 flex justify-center">
            <a href="https://www.mcdonalds.com.ar" target="_blank" rel="noopener noreferrer" 
               className="block max-w-sm mx-auto shadow-lg overflow-hidden rounded-lg">
              <img 
                src="/anuncio8.jpg" 
                alt="Publicidad McDonalds Formula 1" 
                className="w-full h-auto object-contain" 
              />
            </a>
          </div>
    </>
  );
}

export default Home;