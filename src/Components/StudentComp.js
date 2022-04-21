import React from 'react'
import "../CSS/StudentComp.css"
import "../js/StudentComp.js"

function StudentComp() {
  return (
    <div>
        <nav className='navbar'>
            <div className='navbar__username'>Hey, Anubhab</div>
            <button className='navbar__signout'>Sign out!</button>
        </nav>
        <div className='classes'>
            Classes
            <div className='classes__sub1 classes__sub'>Computer Graphics
                <div className='classes__timing'>9:00 AM <br/>
                <a href='https://meet.google.com/ugt-qyuo-hop'>Meeting link</a></div>
            </div>
            <div className='classes__sub2 classes__sub'>Python
                <div className='classes__timing'>10:30 AM <br/>
                <a href='https://meet.google.com/ugt-qyuo-hop'>Meeting link</a></div>
            </div>
            <div className='classes__sub3 classes__sub'>Operating System
                <div className='classes__timing'>12:00 PM <br/>
                <a href='https://meet.google.com/ugt-qyuo-hop'>Meeting link</a></div>
            </div>
            <div className='classes__sub4 classes__sub'>Database Management
                <div className='classes__timing'>1:30 PM <br/>
                <a href='https://meet.google.com/ugt-qyuo-hop'>Meeting link</a></div>
            </div>
        </div>
    </div>
  )
}

export default StudentComp