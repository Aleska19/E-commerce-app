import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../home/index'
import MyAccount from '../myAccount'
import MyOrder from '../myOrder'
import MyOrders from '../myOrders'
import NotFound from '../notFound'
import Signin from '../signin'
import './App.css'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/my-Account', element: <MyAccount /> }, 
    { path: '/my-Order', element: <MyOrder /> }, 
    { path: '/my-Orders', element: <MyOrders /> },
    { path: '/sig-nin', element: <Signin /> },
    { path: '/*', element: <NotFound /> },
  ])

  return routes 
}

const App = () => {

    return(
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
  
    )
}

export default App
