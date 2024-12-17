import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './Home.jsx'
import BuyHomes from './BuyHomes.jsx'
import SellHomes from './SellHomes.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index={true} element={<Home />} />
          <Route path="/BuyHomes" element={<BuyHomes />} />
          <Route path="/SellHomes" element={<SellHomes />} />
          <Route path="*" element={<h2>404</h2>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
