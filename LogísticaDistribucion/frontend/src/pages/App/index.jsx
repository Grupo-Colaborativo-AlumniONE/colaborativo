import { BrowserRouter } from 'react-router-dom'
import AppRoutes from '../../components/AppRoutes'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import './App.css'

function App () {
  return (
    <>
      <BrowserRouter>
        <Header />
        <AppRoutes />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
