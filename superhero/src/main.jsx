import './index.css'
import './App.css'
import { createRoot } from 'react-dom/client'
import AppRoutes from './routes/AppRoutes.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <AppRoutes />
  // </StrictMode>,
)
