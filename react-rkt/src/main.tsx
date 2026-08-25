import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './Layout/Header.tsx'
import Footer from './Layout/Footer.tsx'
import DestinationIndex from './components/DestinationIndex.tsx'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { destinationAPI } from './api/destinationAPI.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApiProvider api={destinationAPI}>
      <div className='d-flex flex-column min-vh-100'>
        <Header title='RKT!' />
        <main className='flex-grow-1'>
          <DestinationIndex />
        </main>
        <Footer />
      </div>
    </ApiProvider>
  </StrictMode>,
)
