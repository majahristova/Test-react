import React from 'react'
import '../Css/Navbar.css';


function Navbar () {
  return (
    <div className='Header'>
    <h2 className='Nav-logo'>
     Maya-fix
    </h2>
    <nav className='Nav'>
       <li> home </li>
       <li>About</li>
       <li> Contact </li>
    </nav>    
  </div>

  )
}

export default Navbar