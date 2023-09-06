import { Link } from 'react-router-dom'
import Layout from '../../components/Layout'

const Home = () => {
  return (
    <>
      <Layout>
        <h1 className='mt-5 text-2xl text-colorSecondary'>
          Hola este es el Home, busca en la carpeta pages/Home.jsx para que ahi pongas las secciones :)
          </h1>
          {/* Este Link se posicionara en el sidebar cuando este listo */}
          <Link to='/tracking-product'>
            <button className='mt-5 bg-btnColor hover:bg-btnHover text-btnColorText font-bold py-2 px-4 rounded-md'>
              Ir a Tracking Product
            </button>
          </Link>
      </Layout>
    </>
  )
}

export default Home
