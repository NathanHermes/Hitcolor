import { createRoot } from 'react-dom/client';
import './global.css';

import { Header } from '@components';
import { BrowserRouter } from 'react-router';
import { Home } from './home';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Header />
    <Home />
  </BrowserRouter>
)
