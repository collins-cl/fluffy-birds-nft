import React from 'react'
import Logo from '../Logo/Logo'
import Socials from '../Socials/Socials'
import '../Topbar/Topbar.css'

function Topbar() {
  return (
    <div className='topbar'>
        <Logo/>
        <Socials/>
    </div>
  )
}

export default Topbar