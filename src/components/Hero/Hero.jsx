import React, { useEffect, useState } from 'react'
import './Hero.scss'
import 'animate.css'
import nancy from '../../assets/nanci.png'
import Footer from '../Footer/Footer'
import Titles from '../Titles/Titles'

const Hero = () => {

  return (
    <div className='hero'>
        <img src={nancy} alt="" />
        <div className="overlay">
          <h1>NANCY AMANDI</h1>
        </div>
        
        <aside>
          <a target='_blank' href="https://github.com/Nancy9ice"><i className='fa-brands fa-github '></i></a>
          <a target='_blank' href="https://www.linkedin.com/in/nancy-amandi/"><i className='fa-brands fa-linkedin '></i></a>
          <a target='_blank' href="https://medium.com/@amandinancy16"><i className='fa-brands fa-medium '></i></a>
          <a target='_blank' href="https://nancyamandi.hashnode.dev/"><i className='fa-brands fa-hashnode '></i></a>
          <a target='_blank' href="https://twitter.com/NancyAmandi?t=0fHisVz4L1Kxch7bYiIVdw&s=09"><i className='fa-brands fa-twitter '></i></a>
          <a target='_blank' href="tel: 2349023714613"><i className='fa-solid fa-phone '></i></a>

          <span></span>
        </aside>

        <Titles />

        <Footer />
    </div>
  )
}

export default Hero