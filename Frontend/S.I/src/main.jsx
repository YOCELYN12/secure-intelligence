import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Cuentas from './Pages/Cuentas.jsx'
import PaginaAdmin from './Pages/PaginaAdmin.jsx'
import PaginaPrincipal from './Pages/PaginaPrincipal.jsx'

const router = createBrowserRouter([ 
  {
    path:"/",
    element: <PaginaPrincipal/>,
  },
  {
    path:"/Cuentas",
    element: <Cuentas/>
  },
  {
    path:"/PaginaAdmin",
    element:<PaginaAdmin/>
  }

])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,

)
