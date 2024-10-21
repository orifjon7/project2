import React from 'react'
import { BrowserRouter, Route, Routes} from "react-router-dom"
import HomeComponent from './Home'
import DoctorComponent from './doctor'
import NavbarComponent from './navbar'
import ServicesComponent from './services'
import ProductsComponent from './products'
import GalleryComponent from './gallery'
const RouterComponent = () => {
  return (
   <BrowserRouter>
   <NavbarComponent/>
   <Routes>
    <Route path="/" element={<HomeComponent />} />
    <Route path="/doctor" element={<DoctorComponent />} />
    <Route path="/services" element={<ServicesComponent />} />
    <Route path="/products" element={<ProductsComponent/>} />
    <Route path="/gallery" element={<GalleryComponent/>} />
   </Routes>
   </BrowserRouter>
  )
}

export default RouterComponent