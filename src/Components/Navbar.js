import React from 'react'
import "../CSS/Navbar.css"

function Navbar() {
  return (
        <nav className='navbar'>
            <div className='navbar__username'>Hey, Anubhab</div>
            <button className='navbar__signout'>Sign out!</button>
        </nav>
  )
}

export default Navbar