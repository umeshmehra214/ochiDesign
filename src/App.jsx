import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'

const App = () => {
  return (
    <div className='w-full h-screen text-black'>
        <Navbar/>
        <LandingPage/>
        <Marquee/>
    </div>
  )
}

export default App