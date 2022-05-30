import React from 'react'
import Bottombar from '../../Components/Bottombar/Bottombar'
import Firstfoot from '../../Components/Firstfoot/Firstfoot'
import Intro from '../../Components/Intro/Intro'
import Topbar from '../../Components/Topbar/Topbar'
import '../WelcomePage/Welcome.css'

function Welcome() {
  return (
    <div className='welcome'>
        <Topbar/>
        <Intro/>
        <Firstfoot/>
        <Bottombar/>
    </div>
  )
}

export default Welcome