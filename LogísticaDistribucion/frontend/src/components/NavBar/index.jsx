import React, { useState, useEffect } from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import ReportProblemIcon from '@mui/icons-material/ReportProblem'
import InventoryIcon from '@mui/icons-material/Inventory'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import AssessmentIcon from '@mui/icons-material/Assessment'
import ImportContactsIcon from '@mui/icons-material/ImportContacts'
import ListAltIcon from '@mui/icons-material/ListAlt'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [showCloseIcon, setShowCloseIcon] = useState(false)

  const toggleMenu = () => {
    setOpen(!open)
  }

  // Utilizamos useEffect para detectar el tamaño de la pantalla cuando se monta el componente
  useEffect(() => {
    const handleResize = () => {
      // Verificamos el ancho de la ventana y establecemos el estado 'open' en consecuencia
      if (window.innerWidth >= 768) {
        setOpen(true) // Pantallas grandes, menu abierto por defecto
        setShowCloseIcon(false) // Ocultamos el CloseIcon en pantallas grandes
      } else {
        setOpen(false) // Pantallas pequeñas, menu cerrado por defecto
        setShowCloseIcon(true) // Mostramos el CloseIcon en pantallas pequeñas
      }
    }

    // Agregamos un listener de redimensionamiento para seguir controlando el tamaño de la pantalla
    window.addEventListener('resize', handleResize)

    // Llamamos a handleResize una vez al cargar el componente para establecer el estado inicial
    handleResize()

    // Eliminamos el listener cuando se desmonta el componente
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <nav className='fixed top-20 bg-blue-500 shadow-lg shadow-blue-500/50'>
      <MenuIcon
        fontSize='large'
        className='m-0 cursor-pointer' onClick={toggleMenu} />

      <div className={`${!open && 'hidden'} `} onClick={() => setOpen(false)} ></div>

        <div className={`${open ? 'w-90' : 'w-0'} bg-black min-h-screen fixed top-20 left-0 transition-all duration-300`}>
          <div className={`${!open && 'hidden'} pt-3 divide-y divide-gray-700 hover:divide-cyan-200`}>

            <div>
            {showCloseIcon && (
                      <CloseIcon
                        className='ml-2 text-white mb-1 cursor-pointer'
                        onClick={toggleMenu}
                        stroke="currentColor"
                      />
            )}
            </div>

              <div className='p-4 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-gray-900'>
                <ReportProblemIcon />
                  <a className='text-[20px] ml-5 text-gray-200 ' href='#'>Gestión de incidencias</a>
              </div>

              <div className='p-4 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-gray-900'>
                <InventoryIcon />
                  <a className='text-[20px] ml-5 text-gray-200' href='#'>Control de inventario</a>
              </div>

              <div className='p-4 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-gray-900'>
                <LocalShippingIcon/>
                  <a className='text-[20px] ml-5 text-gray-200' href='#'>Trackeo de pedidos</a>
              </div>

              <div className='p-4 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-gray-900'>
                <AssessmentIcon/>
                <a className='text-[20px] ml-5 text-gray-200' href='#'>Evaluación del desempeño</a>
              </div>

            <div className='p-4 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-gray-900'>
              <ImportContactsIcon/>
              <a className='text-[20px] ml-5 text-gray-200'>Registro y control de la flota</a>
            </div>

            <div className='p-4 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-gray-900'>
              <ListAltIcon/>
              <a className='text-[20px] ml-5 text-gray-200' href='#'>Informes y reportes</a>
            </div>

            <div></div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
