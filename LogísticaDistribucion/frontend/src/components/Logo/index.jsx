import { Link } from 'react-router-dom'
import Factory from '@mui/icons-material/Factory'

/*       violet: 'from-[#FF1CF7] to-[#b249f8]',
      yellow: 'from-[#FF705B] to-[#FFB457]',
      blue: 'from-[#5EA2EF] to-[#0072F5]',
      cyan: 'from-[#00b7fa] to-[#01cfea]',
      green: 'from-[#6FEE8D] to-[#17c964]',
      pink: 'from-[#FF72E1] to-[#F54C7A]',
      foreground: 'dark:from-[#FFFFFF] dark:to-[#4B4B4B]' */

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
    <p className='gradientLogo ' >
      logistica y distribucion
    </p>
  </Link>
  </>
  )
}

export default Logo
