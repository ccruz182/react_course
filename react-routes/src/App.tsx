import './App.css'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import MainLayout from './components/Layout/MainLayout'
import AppRouter from './routes/AppRouter'

function App() {

  return (
    <>
      <MainLayout />

      <main className='flex-fill'>
        <AppRouter />
      </main>

    </>
  )
}

export default App
