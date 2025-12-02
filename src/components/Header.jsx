import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const dropdownLinkStyle = "block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-yellow-50 hover:text-[#F08A5D]";
  const mobileLinkStyle = "block py-2 px-4 text-lg text-gray-700 font-semibold hover:bg-yellow-50 hover:text-[#F08A5D] rounded-md";
  const mobileSubLinkStyle = "block py-2 pl-8 pr-4 text-gray-600 hover:bg-gray-100 hover:text-[#F08A5D] rounded-md";
  
  const navLinkClass = ({isActive}) => 
    `font-semibold text-gray-600 pb-1 ${isActive ? 'text-[#F08A5D] border-b-2 border-[#F08A5D]' : 'hover:text-[#F08A5D]'}`;

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-5 px-6">
        
        <Link to="/" className="text-2xl font-bold text-gray-800 uppercase tracking-wider" onClick={closeMobileMenu}>
          OJOS ABIERTOS
        </Link>

        {/* --- 1. NAVEGACIÓN DE ESCRITORIO --- */}
        <nav className="hidden md:flex">
          <ul className="flex space-x-6 items-center">
            <li><NavLink to="/" className={navLinkClass}>Inicio</NavLink></li>

            {/* Dropdown de Análisis */}
            <li className="relative group">
              <button className="font-semibold text-gray-600 pb-1 hover:text-[#F08A5D] flex items-center" aria-haspopup="true">
                Análisis (CNN)
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div className="absolute left-0 w-64 bg-white rounded-md shadow-lg z-50 hidden group-hover:block pt-2">
                <ul className="py-1">
                  <li><NavLink to="/analisis/nota1" className={dropdownLinkStyle}>Nota 1: Se encienden las alarmas</NavLink></li>
                  <li><NavLink to="/analisis/nota2" className={dropdownLinkStyle}>Nota 2: Cuando la billetera pesa</NavLink></li>
                  <li><NavLink to="/analisis/nota3" className={dropdownLinkStyle}>Nota 3: Australia renuncia</NavLink></li>
                  <li><NavLink to="/analisis/nota4" className={dropdownLinkStyle}>Nota 4: Herida de Qatar</NavLink></li>
                  <li><NavLink to="/analisis/nota5" className={dropdownLinkStyle}>Nota 5: Muertes en Estadios</NavLink></li>
                </ul>
              </div>
            </li>
            
            <li><NavLink to="/contrapunto" className={navLinkClass}>Contrapunto (Olé)</NavLink></li>
            <li><NavLink to="/entrevista" className={navLinkClass}>Entrevista</NavLink></li>
            <li><NavLink to="/staff" className={navLinkClass}>Staff</NavLink></li>
          </ul>
        </nav>

        {/* --- 2. BOTÓN HAMBURGUESA (Mobile) --- */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Abrir menú">
            {isMobileMenuOpen ? (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            ) : (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            )}
          </button>
        </div>
      </div>

      {/* --- 3. MENÚ DESPLEGABLE (Mobile) --- */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <ul className="flex flex-col p-4 space-y-1">
            <li><NavLink to="/" className={mobileLinkStyle} onClick={closeMobileMenu}>Inicio</NavLink></li>
            <li><span className="block py-2 px-4 text-lg text-gray-400 font-bold">Análisis (CNN)</span></li>
            <li><NavLink to="/analisis/nota1" className={mobileSubLinkStyle} onClick={closeMobileMenu}>- Nota 1: DDHH vs. Mundial 2034</NavLink></li>
            <li><NavLink to="/analisis/nota2" className={mobileSubLinkStyle} onClick={closeMobileMenu}>- Nota 2: Nuevo Orden Mundial</NavLink></li>
            <li><NavLink to="/analisis/nota3" className={mobileSubLinkStyle} onClick={closeMobileMenu}>- Nota 3: Candidato Único</NavLink></li>
            <li><NavLink to="/analisis/nota4" className={mobileSubLinkStyle} onClick={closeMobileMenu}>- Nota 4: Herida de Qatar</NavLink></li>
            <li><NavLink to="/analisis/nota5" className={mobileSubLinkStyle} onClick={closeMobileMenu}>- Nota 5: Muertes en Estadios</NavLink></li>
            <hr className="my-2"/>
            <li><NavLink to="/contrapunto" className={mobileLinkStyle} onClick={closeMobileMenu}>Contrapunto (Olé)</NavLink></li>
            <li><NavLink to="/entrevista" className={mobileLinkStyle} onClick={closeMobileMenu}>Entrevista</NavLink></li>
            <li><NavLink to="/staff" className={mobileLinkStyle} onClick={closeMobileMenu}>Staff</NavLink></li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;