import Logo from './Logo'

const Footer = () => {
  return (
    <div className='bg-backgroundSecondary w-full flex flex-row justify-center, items-center py-3 px-8 gap-6 sm:flex-row sm:justify-between sm:p-8 mt-10 absolute bottom-0'>
      <Logo />
      <div className='flex gap-4 text-titleColor font-normal text-sm sm:text-lg'>
        <a className='hover:text-colorPrimary' href='#'>Contact Us</a>
        <a className='hover:text-colorPrimary' href='#'>Support</a>
      </div>
    </div>
  )
}

export default Footer
