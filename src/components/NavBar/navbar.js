import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png';
import contactimg from '../../assets/contact.png';

import {Link} from 'react-scroll';


const Navbar = () => {
  return (
   <nav className='navbar'> 
   <img src={logo} alt='logo' className='logo'/>
   <div className='desktopmenu'>
    <Link className='desktopmenulistitem' to='intro' >Home</Link>
    <Link className='desktopmenulistitem' to='skills'>About</Link>
    <Link className='desktopmenulistitem' to='works'>Portfolio</Link>
  
   </div>
    <button className='desktopmmenubtn'>
        <img src={contactimg} alt='contactimg' className='desktopmenuimg'/>
       <Link to='contact'> Contact Me</Link>
    </button>
   
   </nav>

  )
}

export default Navbar

