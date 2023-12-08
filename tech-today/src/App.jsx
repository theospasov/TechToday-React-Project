import { Routes, Route, useNavigate } from 'react-router-dom'

import './App.css'


import {AuthProvider} from './contexts/authContext.jsx'
import Path from './paths.js'

import { Header } from './components/Header/Header.jsx'
import { Footer } from './components/Footer/Footer'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import ProductDetails from './components/Product/ProductDetails/ProductDetails.jsx'
import ProductAdd from './components/Product/ProductAdd/ProductAdd.jsx'
import Logout from './components/Logout/Logout.jsx'
import ProductEdit from './components/Product/ProductEdit/ProductEdit.jsx'
import AuthGuard from './components/guards/AuthGuard.jsx'
import Default from './components/Default/Default.jsx'
import Profile from './components/Profile/Profile.jsx'






function App() {

 

  return (
      <AuthProvider>
        <div className='site'>
          <Header />


          <main className='site-main'>
            <Routes>
              <Route path={Path.Home} element={<Home />} />
              <Route path={Path.Login} element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/profile' element={<AuthGuard><Profile/></AuthGuard>} />
              <Route path='/products/:productId' element={<ProductDetails />} />
              <Route path={Path.ProductEdit} element={<AuthGuard><ProductEdit/></AuthGuard>}></Route>
              <Route path='/product/add' element={<AuthGuard><ProductAdd /></AuthGuard> } />
              <Route path={Path.Logout} element={<AuthGuard><Logout/></AuthGuard>}></Route>
              <Route path='*' element={<Default/>}></Route>
            </Routes>
          </main>
          <Footer />
        </div>
      </AuthProvider>
    
  )
}

export default App
