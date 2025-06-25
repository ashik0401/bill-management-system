import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './Router/Router'
import { RouterProvider } from 'react-router'
import AuthProvider from './Provider/AuthProvider'
import { Toaster } from 'react-hot-toast'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <Toaster position='top right '></Toaster>
      <RouterProvider router={Router} />
    </AuthProvider>
  </StrictMode>,
)