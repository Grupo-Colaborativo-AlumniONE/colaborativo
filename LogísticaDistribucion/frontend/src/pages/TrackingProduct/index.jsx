const TrackingProduct = () => {
  return (
    <>
    <section className="mt-28">
      <h1 className="mb-5 text-2xl text-colorPrimary text-center">Trackeo de productos</h1>
      <div className="flex flex-col">
        <div className="my-2 overflow-x-auto xs:mx-6 lg:mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-backgroundPrimary sm:rounded-lg">
              <table className="min-w-full divide-y divide-backgroundPrimary">
                <thead className="bg-backgroundSecondary">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-fontPrimary uppercase tracking-wider"
                    >
                      id
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-fontPrimary uppercase tracking-wider"
                    >
                      producto
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-fontPrimary uppercase tracking-wider"
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-backgroundSecondary divide-y divide-backgroundPrimary">

                    <tr >
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-sm font-medium text-fontPrimary">
                              Id 0102
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="text-sm text-fontPrimary">
                          Producto(Pino Navideño)
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          En entrega
                        </span>
                      </td>
                    </tr>
                    <tr >
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-sm font-medium text-fontPrimary">
                              Id 9898
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="text-sm text-fontPrimary">
                          Producto(Pavo de Utilieria)
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          En bodega
                        </span>
                      </td>
                    </tr>
                    <tr >
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-sm font-medium text-fontPrimary">
                              Id 1337
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="text-sm text-fontPrimary">
                          Producto(Reaglo Navideño)
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                          Perdido
                        </span>
                      </td>
                    </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default TrackingProduct
