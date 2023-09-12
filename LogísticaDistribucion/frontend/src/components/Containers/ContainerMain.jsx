const ContainerMain = ({ titulo = 'Titulo asignado por defecto', children }) => {
  return (
    <div className="container mt-40 m-auto h-[50vh] bg-backgroundCard p-6 rounded-lg ">
        <h1 className=" text-lg font-extrabold text-titleColor text-left">{titulo}</h1>
        {children}
    </div>
  )
}

export default ContainerMain
