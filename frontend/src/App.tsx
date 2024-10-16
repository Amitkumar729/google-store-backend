import React, { lazy, Suspense } from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


const Navbar = lazy(() => import("./components/navbar/navbar"));
const HomePage = lazy(() => import("./page/home/home"));
const StorePage = lazy(() => import("./page/store/store"));
const PhonePage = lazy(() => import("./page/phone/phone"));
const Cartpage = lazy(() => import("./page/cart/cart"));
const PurchasePage = lazy(() => import("./page/purchase/purchase"));
const LoginPage = lazy(() => import("./page/login/login"));
const OrderPage = lazy(() => import("./page/order/order"));
const SearchBar = lazy(() => import("./page/searchbar/searchbar"));

function App() {


  return (
    <Router>
      <div>
        <Navbar />
        <Suspense fallback={<div>...Loading...</div>} >
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/store' element={<StorePage />} />
            <Route path='/about-phone' element={<PhonePage />} />
            <Route path='/cart' element={<Cartpage />} />
            <Route path='/purchase' element={<PurchasePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/order' element={<OrderPage />} />
            <Route path='/search' element={<SearchBar />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  )
}

export default App
