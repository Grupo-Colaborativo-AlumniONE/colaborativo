import { useContext } from 'react'
import { LogisticaContext } from '../../Context'

const TableTracking = () => {
  const context = useContext(LogisticaContext)

  return (
    <div className="flex flex-col">
      <div className="my-2 overflow-x-auto xs:mx-6 lg:mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-backgroundPrimary sm:rounded-lg">
            <table className="min-w-full divide-y divide-backgroundPrimary">
              <thead className="bg-backgroundSecondary">
                <tr>
                  {context.columnsTableEjemplo.map((column) => (
                    <th
                      key={column.id}
                      scope="col"
                      className= 'px-6 py-3 text-center text-xs font-medium text-fontPrimary uppercase tracking-wider'
                    >
                      {column.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-backgroundSecondary divide-y divide-backgroundPrimary">
                {context.tableEjemplo?.map((item) => (
                  <tr key={item.id} >
                    {context.columnsTableEjemplo.map((column) => (
                      <td
                        key={column.id}
                        className='px-6 py-4 whitespace-nowrap text-center'
                      >
                        {item[column.key]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TableTracking
