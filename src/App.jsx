import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Contenido from './components/Contenido'


function App() {
  return (
    <main className='max-w-[1512px] m-auto h-screen relative'>
    <Header/>
    <Contenido/>
    </main>
  )
}

export default App
