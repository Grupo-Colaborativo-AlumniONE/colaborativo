import { useRoutes } from 'react-router-dom'
import Home from '../../pages/Home'
import TrackingProduct from '../../pages/TrackingProduct'
import NotFound from '../../pages/NotFound'
import Incidencias from '../../pages/Incidencias/Incidencias'
import ControlInventario from '../../pages/ControlInventario'
import EvaluacionDesempeno from '../../pages/EvaluacionDesempeno'
import RegistroFlota from '../../pages/RegistroFlota'
import InformesReportes from '../../pages/InformesReportes'

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/incidencias', element: <Incidencias /> },
    { path: 'control-inventario', element: <ControlInventario /> },
    { path: '/tracking-product', element: <TrackingProduct /> },
    { path: 'evaluacion-desempeno', element: <EvaluacionDesempeno /> },
    { path: '/registro-flota', element: <RegistroFlota /> },
    { path: '/informes-reportes', element: <InformesReportes /> },
    { path: '*', element: <NotFound /> }
  ])
  return routes
}

export default AppRoutes
