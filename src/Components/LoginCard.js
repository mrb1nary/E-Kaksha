import React from 'react'
import '../CSS/LoginCard.css'

import PersonIcon from '@mui/icons-material/Person';

function LoginCard() {
  return (
    <div class="card">

        <div className='logo'>Project X</div>
        {/* <div className='subtitle'>Made with ☕ and 💖</div> */}
        <div className='signIn'>
                <PersonIcon className='personIcon' fontSize="3rem"/>
                <input className='signIn__username' type='text' name='username' placeholder='Username'></input>
                <input className='signIn__password' type='password' name='password' placeholder='Password'></input>
                <button className='signIn__submit'>Submit</button>
        
        </div>
    </div>

  )
}

export default LoginCard