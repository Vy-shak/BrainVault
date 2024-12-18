
import { createRoot } from 'react-dom/client'
import Examble from './Pages/Examble.tsx';
import { Signup, Login, Home } from './Pages/index.ts';
import './index.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Landing } from './Pages/index.ts';
import CardAll from './Components/uI/Main/CardAll.tsx';
import { RecoilRoot } from 'recoil';
import DeleteModal from './Components/uI/Main/DeleteModal.tsx';


createRoot(document.getElementById('root')!).render(
  <RecoilRoot>
    <BrowserRouter>
      <Routes>
        <Route path="/" >
          <Route path="signup" element={<Signup />} />
          <Route path="/" element={<Landing />} />
          <Route path="signin" element={<Login />} />
          <Route path='/home' element={<Home />}>
            <Route path='/home/:linktype' element={<CardAll />} />
          </Route>
          <Route path="Check" element={<DeleteModal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </RecoilRoot>
)
