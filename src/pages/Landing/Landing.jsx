import React from 'react'
import './Landing.scss'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/Navbar/Navbar'

const Landing = () => {
  return (
    <div className='landing'>
      <Hero />
      <Navbar />
    </div>
  )
}

export default Landing