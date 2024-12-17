import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ThemeWrapper from './theme/ThemeWrapper'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeWrapper/>
  </StrictMode>
)
