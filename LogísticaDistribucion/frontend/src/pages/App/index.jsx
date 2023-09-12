import { BrowserRouter } from 'react-router-dom'
import AppRoutes from '../../components/AppRoutes'
import { LogisticaProvider } from '../../Context'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './App.css'

function App () {
  return (
    <>
    <LogisticaProvider>
        <BrowserRouter>
          <Header />
          <AppRoutes />
          <Footer />
        </BrowserRouter>
      </LogisticaProvider>
    </>
  )
}

export default App
