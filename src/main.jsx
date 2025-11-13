import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes/routes.jsx'
import AuthContext from './context/AuthContext.jsx'
import { Toaster } from 'react-hot-toast'
import axios from 'axios'
axios.defaults.baseURL = 'https://app-ivory-omega.vercel.app'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContext>
      <Toaster />
      <RouterProvider router={routes}></RouterProvider>
    </AuthContext>
  </StrictMode>,
)
