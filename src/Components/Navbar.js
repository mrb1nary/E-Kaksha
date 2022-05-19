import React from 'react'
import "../CSS/Navbar.css"
import "../js/StudentComp.js"

function Navbar() {
  return (
        <nav className='navbar navbar-body'>
            <div className='navbar__username'>Hey, Anubhab</div>
            <button className='navbar__signout'>Sign out!</button>
        </nav>
  )
}

export default Navbar