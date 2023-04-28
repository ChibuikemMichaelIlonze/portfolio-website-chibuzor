import React, { useState } from 'react'
import './Menu.scss'
import { Link } from 'react-router-dom'
import Services from '../Services/Services'
import { Fade, Slide } from 'react-awesome-reveal'
import About from '../About/About'

const Menu = () => {
    const[skills, setSkills] = useState(false)
    const[about, setAbout] = useState(false)
    
    function handleClick() {
        setSkills(false)
        setAbout(false)
    }

  return (
    <div className='menu'>
        <Slide cascade damping={0.3} direction='left' triggerOnce>
            <Link to='/' className='link one'>PROJECTS</Link>
            <Link to='' className='link two' onClick={() => setAbout(true)}>ABOUT</Link>
            <Link to='' className='link three' onClick={() => setSkills(true)}>SERVICES</Link>
            <Link to='/' className='link four'>TOOLS</Link>
            <Link to='' className='link five'>HIGHLIGHTS</Link>
            <Link to='/' className='link six'>BLOG</Link>
        </Slide>

        { skills && (
            <div className="container">
                <Services closeModal={handleClick} />
            </div>
        )}
        { about && (
            <div className="container">
                <About closeModal={handleClick} />
            </div>
        )}
    </div>
  )
}

export default Menu
