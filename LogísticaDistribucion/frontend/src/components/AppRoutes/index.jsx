import { useRoutes } from 'react-router-dom'
import Home from '../../pages/Home'
import NotFound from '../../pages/NotFound'


const AppRoutes = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    {path: '*', element: <NotFound /> }
  ])
  return routes
}

export default AppRoutes