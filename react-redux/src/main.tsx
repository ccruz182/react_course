import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Header from './components/Layout/Header.tsx'
import Footer from './components/Layout/Footer.tsx'
import { Provider } from 'react-redux'
import { store } from './store/store.tsx'
import Counter from './components/Counter/Counter.tsx'
import ResetApp from './components/Reset/Reset.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <div className='d-flex flex-column min-vh-100'>
        <Header title='Redux!' />
        <main className='flex-grow-1'>
          <ResetApp />
          <Counter />
        </main>
        <Footer />
      </div>
    </Provider>
  </StrictMode>,
)
