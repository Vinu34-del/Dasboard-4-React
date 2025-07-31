import React from 'react'
import logo from '../../assets/logo.jpg'
import down from '../../assets/downArrow.png'
import './Navbar.css'
import bell from '../../assets/bell.png'
import user from '../../assets/user.png'

const Navbar = () => {
  return (
    <>
    <nav>
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <div className="search">
            <div className="category">
                <a href="">All category</a> 
                <img src={down} alt="" />
            </div>
            <input type="search" placeholder="Search here..." />
            <img src={down} alt="" />
        </div>
        <div class="navbar">
            <ul>
                <li>DASHBOARD</li>
                <li>MY WORK</li>
                <li>Contracts</li>
                <img src={bell} alt="" />
               <img src={user} alt="" />
            </ul>
        </div>
    </nav>
</>
    
  )
}

export default Navbar
