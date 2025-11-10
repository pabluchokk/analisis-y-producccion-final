import { Routes, Route, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react'
// Layout
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Homepage.jsx';
// Notas
import Nota1 from './pages/analisis/nota1.jsx';
import Nota2 from './pages/analisis/nota2.jsx';
import Nota3 from './pages/analisis/nota3.jsx';
import Nota4 from './pages/analisis/nota4.jsx';
import nota5 from './pages/analisis/nota5.jsx';




const App = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/analisis/nota1' element={<Nota1 />} />
          <Route path='/analisis/nota2' element={<Nota2 />} />
          <Route path='/analisis/nota3' element={<Nota3 />} />
          <Route path='/analisis/nota4' element={<Nota4 />} />
          <Route path='/analisis/nota5' element={<Nota5 />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App