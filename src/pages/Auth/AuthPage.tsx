import { lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

import logo_ec from '../../assets/logo_ec.svg'
import { Element1, Element2 } from './styled-components/auth.styled.component';

// Pages
const LoginView = lazy (() => import('./views/LoginView'));
const RegisterView = lazy(() => import('./views/RegisterView'));

function AuthPage() {
  return (
    <div className='d-flex flex-column align-items-center ' style={{height: '100vh', width: '100vw', background: "#0F172A"}}>
      <nav className='d-flex justify-content-center pt-5 rounded-5 rounded-top-0' style={{width: '100%'}}>
        <img src={logo_ec} alt="" width={60} height={60} />
      </nav>
      <div className='d-flex justify-content-center align-items-center' style={{height: '100%', position:"relative"}}>
        <Routes>
          <Route path='/login' element={<LoginView />}/>
          <Route path='/register' element={<RegisterView />}/>
        </Routes>
      </div>
      <Element1 />
      <Element2 />
      <p>© 2024 Expenses Control. Apache-2.0 license</p>
    </div>
  )
}

export default AuthPage