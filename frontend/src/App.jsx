
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Components/Login'
import Home from './Components/Home'
import Signup from './Components/Signup'
import Menu from './Components/Menu'
import Myorder from './Components/Myorder'
import Orderhistory from './Components/Orderhistory'
import Addcard from './Components/Addcard'
import Viewdetails from './Components/Viewdetails'
import Contact from './Components/Contact'
import Checkout from './Components/Checkout'
import Payment from './Components/Payment'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={'/login'} element={<Login />} />
          <Route path={'/'} element={<Home />} />
          <Route path={'/menu'} element={<Menu />} />
          <Route path={'/myorder'} element={<Myorder />} />
          <Route path={'/orderhistory'} element={<Orderhistory />} />
          <Route path={'/signup'} element={<Signup />} />
          <Route path={'/addcard'} element={<Addcard />} />
          <Route path={'/viewdetails'} element={<Viewdetails />} />
          <Route path={'/contact'} element={<Contact />} />
          <Route path={'/checkout'} element={<Checkout />} />
          <Route path={'/payment'} element={<Payment />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
