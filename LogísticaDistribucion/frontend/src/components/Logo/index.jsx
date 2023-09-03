import Factory from '@mui/icons-material/Factory'
import './style.css'

const Logo = () => {
  return (
  <>
  <div className='logo-container'>
    <div className='logo-icon'>
      <Factory
        fontSize="large"
        sx={{ color: 'var(--colorPrimary)' }}
      />
    </div>
    <p className='logo-text'>colaborativo | logistica y distribucion</p>
  </div>
  </>
  )
}

export default Logo
