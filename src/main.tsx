import { createRoot } from 'react-dom/client';
import './global.css';

import { BrowserRouter } from 'react-router';
import { Header } from './components';
import { Home } from './Home';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Header />
    <Home />
  </BrowserRouter>
)
