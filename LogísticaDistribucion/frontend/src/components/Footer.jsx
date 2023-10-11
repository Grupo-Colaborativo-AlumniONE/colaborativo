import Logo from './Logo'

const Footer = () => {
  return (
    <section className='bg-backgroundSecondary w-full flex flex-row justify-center, items-center px-4 gap-6 sm:flex-row sm:justify-between sm:p-4 mt-2 absolute bottom-0'>
      <Logo />
      <div className='flex gap-4 text-titleColor font-normal text-sm'>
        <a className='hover:text-colorPrimary' href='#'>Contact Us</a>
        <a className='hover:text-colorPrimary' href='#'>Support</a>
      </div>
    </section>
  )
}

export default Footer
