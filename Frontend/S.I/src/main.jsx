import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Cuentas from './Pages/Cuentas.jsx'
import PaginaAdmin from './Pages/PaginaAdmin.jsx'
import PaginaPrincipal from './Pages/PaginaPrincipal.jsx'
import GenerarTickets from './Pages/GenerarTickets.jsx';
import QuienesSomos from './Pages/QuienesSomos.jsx';
import ServicioalCliente from './Pages/ServicioalCliente.jsx';
// import RutasPrivadas from './RutasPrivadas.jsx';




const router = createBrowserRouter([ 
  {
    path:"/",
    element: <PaginaPrincipal/>,
  },
  {
    path:"/Cuentas",
    element: <Cuentas/>
  },
  // {
  //   path:"/PaginaAdmin",
  //   element: <RutasPrivadas> <PaginaAdmin/> </RutasPrivadas>
  // },
  {
    path:"/PaginaAdmin",
    element:  <PaginaAdmin/> 
  },
  { 
    path:"/GenerarTickets",
    element: <GenerarTickets/>
  },
  {
    path:"/QuienesSomos",
    element: <QuienesSomos/>
  },
  {
    path:"ServicioalCliente",
    element:<ServicioalCliente/>
  }


])
ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
