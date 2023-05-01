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
        
        <section>
          <div className="tape one">
            <div>
              <a href="https://twitter.com/NancyAmandi?t=0fHisVz4L1Kxch7bYiIVdw&s=09" target='_blank'>TWITTER</a> &bull;
              <a href="https://medium.com/@amandinancy16" target='_blank'>MEDIUM</a> &bull;
              <a href="https://hashnode.com/@Nancy9ice" target='_blank'>HASHNODE</a> &bull;
              <a href="https://github.com/Nancy9ice" target='_blank'>GITHUB</a> &bull;
              <a href="https://www.linkedin.com/in/nancy-amandi/" target='_blank'>LINKEDIN</a> &bull;
              <a href="mailto:amandinancy16@gmail.com" target='_blank'>GMAIL</a> &bull;
            </div>
            <div>
              <a href="https://twitter.com/NancyAmandi?t=0fHisVz4L1Kxch7bYiIVdw&s=09" target='_blank'>TWITTER</a> &bull;
              <a href="https://medium.com/@amandinancy16" target='_blank'>MEDIUM</a> &bull;
              <a href="https://hashnode.com/@Nancy9ice" target='_blank'>HASHNODE</a> &bull;
              <a href="https://github.com/Nancy9ice" target='_blank'>GITHUB</a> &bull;
              <a href="https://www.linkedin.com/in/nancy-amandi/" target='_blank'>LINKEDIN</a> &bull;
              <a href="mailto:amandinancy16@gmail.com" target='_blank'>GMAIL</a> &bull;
            </div>
          </div>

          <div className="tape two">
            <div>
              <a href="https://twitter.com/NancyAmandi?t=0fHisVz4L1Kxch7bYiIVdw&s=09" target='_blank'>TWITTER</a> &bull;
              <a href="https://medium.com/@amandinancy16" target='_blank'>MEDIUM</a> &bull;
              <a href="https://hashnode.com/@Nancy9ice" target='_blank'>HASHNODE</a> &bull;
              <a href="https://github.com/Nancy9ice" target='_blank'>GITHUB</a> &bull;
              <a href="https://www.linkedin.com/in/nancy-amandi/" target='_blank'>LINKEDIN</a> &bull;
              <a href="mailto:amandinancy16@gmail.com" target='_blank'>GMAIL</a> &bull;
            </div>
            <div>
              <a href="https://twitter.com/NancyAmandi?t=0fHisVz4L1Kxch7bYiIVdw&s=09" target='_blank'>TWITTER</a> &bull;
              <a href="https://medium.com/@amandinancy16" target='_blank'>MEDIUM</a> &bull;
              <a href="https://hashnode.com/@Nancy9ice" target='_blank'>HASHNODE</a> &bull;
              <a href="https://github.com/Nancy9ice" target='_blank'>GITHUB</a> &bull;
              <a href="https://www.linkedin.com/in/nancy-amandi/" target='_blank'>LINKEDIN</a> &bull;
              <a href="mailto:amandinancy16@gmail.com" target='_blank'>GMAIL</a> &bull;
            </div>
          </div>
        </section>

        <Titles />

        <Footer />
    </div>
  )
}

export default Hero