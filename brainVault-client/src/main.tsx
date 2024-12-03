
import { createRoot } from 'react-dom/client'
import { Signup, Login, Home } from './Pages/index.ts';
import './index.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" >
        <Route path="Signup" element={<Signup />} />
        <Route path="Login" element={<Login />} />
        <Route path='Home' element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
