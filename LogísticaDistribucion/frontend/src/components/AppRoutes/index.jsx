import { useRoutes } from 'react-router-dom'
import Home from '../../pages/Home'
import TrackingProduct from '../../pages/TrackingProduct'
import NotFound from '../../pages/NotFound'

const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/tracking-product', element: <TrackingProduct /> },
    { path: '*', element: <NotFound /> }
  ])
  return routes
}

export default AppRoutes
