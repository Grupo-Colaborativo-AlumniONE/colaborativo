import { useState } from 'react'
import Notifications from '@mui/icons-material/Notifications'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import avatarimg from '../../assets/images/avatar.webp'
import InputSearch from '../Inputs/InputSearch'
import Logo from '../Logo'

const Header = () => {
  const [isCliked, setIsCliked] = useState(false)

  return (
      <header className="w-full h-20 pl-4 top-0 flex justify-between items-center fixed bg-backgroundSecondary backdrop-blur-xl">
        <div className='left-header-container flex flex-row items-center gap-8 ml-4'>
          <Logo />
          <div className=' mx-4 w-30  hidden xs:flex'>
            <InputSearch />
          </div>
        </div>
        <div className='rigth-header-container flex flex-row items-center gap-8 mr-4 '>
          <button
            className='w-8 h-8 rounded-full ring-2 ring-gray-300 hover:ring-btnHover'
            onClick={() => setIsCliked(!isCliked)}
          >
            {isCliked
              ? (
              <NotificationsActiveIcon
                fontSize="medium"
                sx={{ color: '#d11009' }} // color pendiente de usar variable
              />
                )
              : (
              <Notifications
                fontSize="medium"
                sx={{ color: '#3898ec' }} // colorPrimary
              />
                )}
          </button>

          <img
            className='w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 hover:ring-btnHover'
            src={avatarimg} alt="avatar de usuario" />
        </div>
      </header>
  )
}

export default Header
