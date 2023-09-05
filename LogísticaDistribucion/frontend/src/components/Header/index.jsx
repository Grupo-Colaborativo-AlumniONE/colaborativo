import Notifications from '@mui/icons-material/Notifications'
import avatarimg from '../../assets/images/avatar.webp'

import Logo from '../Logo'
const Header = () => {
  return (
      <header className="w-full h-20 pl-4 top-0 flex justify-between items-center fixed bg-backgroundSecondary backdrop-blur-xl">
        <div className='left-header-container flex flex-row items-center gap-8 ml-4'>
          <Logo />
          <div className=' mx-4 w-30 bg-red-700 hidden xs:flex'>
            input search
          </div>
        </div>
        <div className='rigth-header-container flex flex-row items-center gap-8 mr-4 '>
          <Notifications
            fontSize="medium"
            sx={{ color: '#3898ec' }}
          />
          <img
            className='w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500'
            src={avatarimg} alt="avatar de usuario" />
        </div>
      </header>
  )
}

export default Header
