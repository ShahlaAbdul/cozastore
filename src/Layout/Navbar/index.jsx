import React from 'react'
import './style.scss'
import Header from '../Header'

function Navbar() {
  return (
    <div>
        <nav>
        <div className='headerContainer'>
        <div className="header">
            <div className="headerLeft">
                <p>Free shipping for standard order over $100</p>
            </div>
            <div className="headerRight">
                <p>Helps & FAGS</p>
                <p>MyAccount</p>
                <p>En</p>
                <p>USD</p>
            </div>
        </div>
        </div>


        <div className='navbarContainer'>
            <div className="navbar">
                <div className="navbarLeft">
                    <div className='imgnavbar'>
                        <img src="https://preview.colorlib.com/theme/cozastore/images/icons/logo-01.png" alt="" />
                    </div>
                    <div className='pagesNavbar'>
                        <ul className='pages'>
                            <li><a href="/myapp/src/Pages/Home/index.jsx">Home</a></li>
                            <li><a href="/myapp/src/Pages/Home/index.jsx">Shop</a></li>
                            <li><a href="/myapp/src/Pages/Home/index.jsx">Features</a></li>
                            <li><a href="/myapp/src/Pages/Home/index.jsx">Blog</a></li>
                            <li><a href="/myapp/src/Pages/Home/index.jsx">About</a></li>
                            <li><a href="/myapp/src/Pages/Home/index.jsx">Contact</a></li>
                        </ul>
                    </div>
                    </div>
                    <div className="navbarRight">
                        <div className='navbarREightIcons'>
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <i class="fa-solid fa-cart-shopping"></i>
                        <i class="fa-regular fa-heart"></i>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
       <Header></Header>
        
         </div>

        
  

       
      
   
  )
}

export default Navbar