import React from 'react'
import About from '../../Components/About/About'
import Fdistro from '../../Components/FDistro/Fdistro'
import Firstfoot from '../../Components/Firstfoot/Firstfoot'
import Hero from '../../Components/Hero/Hero'
import Nav from '../../Components/Nav/Nav'
import Opeansea from '../../Components/Opensea/Opeansea'
import Specs from '../../Components/Specs/Specs'
import Bottombar from '../../Components/Bottombar/Bottombar'
import '../Home/Home.css'

function Home() {
  return (
    <div className='home'>
        <div className="home-wrapper">
            <Nav/>
            <Hero/>
            <About/>
            <Fdistro/>
            <Opeansea/>
            <Specs/>
            <Firstfoot/>
        </div>
        <Bottombar/>
    </div>
  )
}

export default Home