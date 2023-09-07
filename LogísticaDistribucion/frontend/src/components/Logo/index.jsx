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
    <p className='gradientLogo' >
      logistica y distribucion
    </p>
  </Link>
  </>
  )
}

export default Logo
