// src/pages/Staff.jsx

import React from 'react';

const Staff = () => {
    return (
        <div className="bg-[#6A2C70] min-h-screen py-20 px-6">
            <div className="container mx-auto max-w-4xl">
        
            {/* Título Principal */}
            <header className="text-center mb-16">
                <h1 className="text-5xl lg:text-7xl font-extrabold text-[#F9ED69] mb-4 tracking-tight">
                    EL EQUIPO
                </h1>
                <p className="text-xl text-gray-200 font-light">
                    Quiénes hacen <span className="font-bold text-[#F08A5D]">OJOS ABIERTOS</span>
                </p>
            </header>

            {/* Tarjeta del Staff */}
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden transform transition-all hover:scale-[1.01]">
          
                {/* Cabecera de la tarjeta */}
                <div className="bg-[#B83B5E] p-8 text-center">
                    <h2 className="text-3xl font-bold text-white">Créditos del Proyecto</h2>
                </div>

            {/* Lista de Créditos */}
            <div className="p-10 space-y-8">
            
                {/* Rol: Dirección General */}
                <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-200 pb-6">
                    <div className="text-center md:text-left mb-2 md:mb-0">
                        <h3 className="text-2xl font-bold text-gray-800">Dirección & Edición</h3>
                        <p className="text-[#F08A5D] font-medium">Contenidos y Estrategia</p>
                    </div>
                    <div className="text-xl font-semibold text-gray-600">
                    Pablo Rivero
                    </div>
                </div>

            {/* Rol: Desarrollo Web */}
            <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-200 pb-6">
                <div className="text-center md:text-left mb-2 md:mb-0">
                    <h3 className="text-2xl font-bold text-gray-800">Diseño & Desarrollo</h3>
                    <p className="text-[#F08A5D] font-medium">Programación Frontend (React)</p>
                </div>
                <div className="text-xl font-semibold text-gray-600">
                    Pablo Rivero
                </div>
            </div>

            {/* Rol: Académico */}
            <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-200 pb-6">
                <div className="text-center md:text-left mb-2 md:mb-0">
                    <h3 className="text-2xl font-bold text-gray-800">Contexto Académico</h3>
                    <p className="text-[#F08A5D] font-medium">Materia y Universidad</p>
                </div>
                <div className="text-right">
                    <p className="text-xl font-semibold text-gray-600">Análisis y Producción Periodística</p>
                    <p className="text-gray-500">Universidad Nacional de La Matanza (UNLAM)</p>
                    <p className="text-gray-400 text-sm mt-1">2025</p>
                </div>
            </div>

            {/* --- NUEVA SECCIÓN: AGRADECIMIENTOS --- */}
            <div className="flex flex-col md:flex-row justify-between items-center pt-2">
                <div className="text-center md:text-left mb-2 md:mb-0">
                    <h3 className="text-2xl font-bold text-gray-800">Agradecimientos</h3>
                    <p className="text-[#F08A5D] font-medium">Colaboración Académica</p>
                </div>
                <div className="text-center md:text-right">
                    <p className="text-lg font-semibold text-gray-600">Lic. Mariana Cóvolo y Clara Ralo Venditti</p>
                    <p className="text-gray-500 text-sm italic mt-1">
                    Por su valioso aporte teórico a través del paper "Qatar 2022: algo más que un mundial".
                    </p>
                </div>
            </div>

            </div>
        </div>

        {/* Nota al pie */}
        <div className="text-center mt-12 text-gray-300 text-sm">
            <p>
                Este sitio es un trabajo práctico con fines educativos. 
                Los análisis sobre CNN y Diario Olé son ejercicios académicos.
            </p>
        </div>

        </div>
    </div>
    );
}

export default Staff;