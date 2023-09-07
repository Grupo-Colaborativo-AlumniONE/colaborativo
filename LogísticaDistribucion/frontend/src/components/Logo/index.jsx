import { Link } from 'react-router-dom'
import Factory from '@mui/icons-material/Factory'

const Logo = () => {
  return (
  <>
  <Link to='/' className='flex flex-row items-center'>
    <div className='mr-2'>
      <Factory
        fontSize="large"
        sx={{ color: '#3898ec' }}
      />
    </div>
    <p className='capitalize font-sans leading-7 font-bold text-xs md:text-lg lg:text-2xl text-colorPrimary' >logistica y distribucion</p>
  </Link>
  </>
  )
}

export default Logo
