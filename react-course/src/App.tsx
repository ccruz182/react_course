import { useState } from 'react'
import heroImg from './assets/hero.png'

import viteLogo from './assets/vite.svg'
import './App.css'

import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import Counter from './components/Counter/Counter'
import ContactIndex from './components/Contactopedia/ContactPages/ContactIndex'

function App() {
  // const [count, setCount] = useState(0)

  return (
      <div className='d-flex flex-column min-vh-100'>
        <Header title='ContactoOPedia'/>
        
        <main className='flex-fill'>
          <ContactIndex />
        </main>
        
        <Footer />
      </div>
  )
}

export default App
