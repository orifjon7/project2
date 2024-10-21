import React from 'react'
import './Navbar.css';
import { Link } from "react-router-dom"
const NavbarComponent = () => {
  return (
    <div className='Navbar-wr'>
     <div className='Navbar-left'>   <h1>Logo</h1></div>
     <div className='Navbar-right'>
        <Link to={'/'}>
        <p>Home</p>
        </Link>
        <Link to={'/services'}><p>Services</p></Link>
       <Link to={'/doctor'}>
        <p>Doctors</p> </Link>
        <Link to ={'/products'}>
        <p>Products</p></Link>
        <Link to={'/gallery'}>
        <p>Gallery</p></Link>
     </div>
    </div>
  )
}

export default NavbarComponent