import React, { createContext, useState } from 'react'

export const LogisticaContext = createContext()

export const LogisticaProvider = ({ children }) => {
  // Ejemplo de uso de tabla reutilizable
  const [tableEjemplo, setTableEjemplo] = useState([
    {
      id: 1,
      producto: 'Producto(Pino Navideño',
      status: 'En Entrega'
    },
    {
      id: 2,
      producto: 'Producto(Pavo de Utileria)',
      status: 'En Bodega'
    },
    {
      id: 3,
      producto: 'Producto(Regalo Navideño)',
      status: 'Perdido'
    }
  ])
  // Ejemplo de uso de tabla reutilizable COLUMNA
  const [columnsTableEjemplo, setColumnsTableEjemplo] = useState([
    { id: 1, key: 'id', label: 'ID' },
    { id: 2, key: 'producto', label: 'Producto' },
    { id: 3, key: 'status', label: 'Status' }
  ])

  return (
    <LogisticaContext.Provider
      value={{
        tableEjemplo,
        setTableEjemplo,
        columnsTableEjemplo,
        setColumnsTableEjemplo
      }}
    >
      {children}
    </LogisticaContext.Provider>
  )
}
