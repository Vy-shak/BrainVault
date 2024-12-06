
import { createRoot } from 'react-dom/client'
import Examble from './Pages/Examble.tsx';
import { Signup, Login, Home } from './Pages/index.ts';
import './index.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { p } from 'motion/react-client';
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" >
        <Route path="Signup" element={<Signup />} />
        <Route path="Login" element={<Login />} />
        <Route path='/:Contenttype' element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
