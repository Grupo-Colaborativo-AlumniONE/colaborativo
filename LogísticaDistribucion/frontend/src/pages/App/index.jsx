import { BrowserRouter } from 'react-router-dom'
import AppRoutes from '../../components/AppRoutes'
import { LogisticaProvider } from '../../Context'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './App.css'
import Navbar from '../../components/NavBar'

function App () {
  return (
    <>
    <LogisticaProvider>
        <BrowserRouter>
          <Header />
          <AppRoutes />
          <Navbar />
          <Footer />
        </BrowserRouter>
      </LogisticaProvider>
    </>
  )
}

export default App
