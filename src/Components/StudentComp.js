import React from 'react'
import "../CSS/StudentComp.css"


function StudentComp() {
  return (
    <div>
        


        <div className='classes'>
            Classes
            <div className='classes__sub1 classes__sub'>Computer Graphics
                <div className='classes__timing'>9:00 AM <br/>
                <a href='https://meet.google.com/ugt-qyuo-hop'>Meeting link</a><br/>Aliva Priyadarshani</div>
            </div>
            <div className='classes__sub2 classes__sub'>Python
                <div className='classes__timing'>10:30 AM <br/>
                <a href='https://meet.google.com/ugt-qyuo-hop'>Meeting link</a><br/>Aliva Priyadarshani</div>
            </div>
            <div className='classes__sub3 classes__sub'>Operating System
                <div className='classes__timing'>12:00 PM <br/>
                <a href='https://meet.google.com/ugt-qyuo-hop'>Meeting link</a><br/>Aliva Priyadarshani</div>
            </div>
            <div className='classes__sub4 classes__sub'>Database Management
                <div className='classes__timing'>1:30 PM <br/>
                <a href='https://meet.google.com/ugt-qyuo-hop'>Meeting link</a><br/>Aliva Priyadarshani</div>
            </div>
        </div>



        <div className='notes'>
            Notes
            <div className='notes__sd'>
                <div className='notes__sub1 notes__sub'>Computer Graphics</div>
                <div className='notes__sub2 notes__sub'>Python</div>
                <div className='notes__sub3 notes__sub'>Operating System</div>
                <div className='notes__sub4 notes__sub'>Database Management</div>
            </div>
        </div>



        <div className='notice'>
            Notice
            <div className='notice__board'>
                Something important goes here<br/>
                And here<br/>
                Something important goes here<br/>
                And here<br/>
                Something important goes here<br/>
                And here<br/>
                Something important goes here<br/>
                And here<br/>
                </div>
        </div>
    </div>
  )
}

export default StudentComp