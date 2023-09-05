import Layout from '../../components/Layout'
import AcUnitIcon from '@mui/icons-material/AcUnit'

const Home = () => {
  return (
    <>
      <Layout>
        <AcUnitIcon fontSize="large" sx={{ color: '#3898ec' }} />
        <h1 className='text-2xl text-colorSecondary'>
          Hola este es el Home, busca en la carpeta pages/Home.jsx para que ahi pongas las secciones :)
          </h1>
      </Layout>
    </>
  )
}

export default Home
