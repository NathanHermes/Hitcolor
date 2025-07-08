import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'

import { Home } from './Home'
import { Header } from './components/header'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Home />
  </StrictMode>
)
