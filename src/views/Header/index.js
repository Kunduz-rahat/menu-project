import React from "react";
import { NavLink } from "react-router-dom";

import logo from '../../assets/logo.jpg'



const Header = () => {
  return (
    <header className="header">
      <div header__wrap container>
        <div className="logo">
          <img src={logo} alt='' />
        </div>
        <nav className="header__nav">
          <NavLink to="/" className='mx-10'>Home</NavLink>
       
        </nav>
      </div>


    </header>
  )
}
export default Header




