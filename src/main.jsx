import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider,} from 'react-router-dom'
import Mens from './components/Mens'
import Kids from './components/Kids'
import Services from './components/Services.jsx'
import ProductDetails from './components/ProductDetails.jsx'

const appRouting = createBrowserRouter([
  {
    path:'/',
    element: <App/>
  },
  {
    path:'/mens',
    element: <Mens/>
  },
  {
    path:'/kids',
    element: <Kids/>
  },
  {
    path:'/services',
    element: <Services/>
  },
  {
    path:'/product/:productId',
    element: <ProductDetails/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouting}/>
  </StrictMode>,
)

