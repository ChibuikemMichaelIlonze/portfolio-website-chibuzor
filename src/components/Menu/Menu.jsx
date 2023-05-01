import React, { useState } from 'react'
import './Menu.scss'
import 'animate.css'
import { Link } from 'react-router-dom'
import Projects from '../Projects/Projects'
import Services from '../Services/Services'
import About from '../About/About'
import Tools from '../Tools/Tools'

const Menu = () => {
    const[project, setProject] = useState(false)
    const[skills, setSkills] = useState(false)
    const[about, setAbout] = useState(false)
    const[tools, setTools] = useState(false)
    
    function handleClick() {
        setProject(false)
        setSkills(false)
        setAbout(false)
        setTools(false)
    }

  return (
    <div className='menu'>
        <Link to='#projects' className={`link one animate__animated animate__fadeInRight animate__delay-0s`} onClick={() => setProject(true)}>
            PROJECTS
        </Link>
        <Link to='#about' className={`link two animate__animated animate__fadeInRight animate__delay-1s`} onClick={() => setAbout(true)}>
            ABOUT
        </Link>
        <Link to='#services' className={`link three animate__animated animate__fadeInRight animate__delay-2s`} onClick={() => setSkills(true)}>
            SERVICES
        </Link>
        <Link to='#tools' className={`link four animate__animated animate__fadeInLeft animate__delay-3s`} onClick={() => setTools(true)}>
            TOOLS
        </Link>
        <Link to='' className={`link five animate__animated animate__fadeInLeft animate__delay-4s`}>
            HIGHLIGHTS
        </Link>
        <Link to='/' className={`link six animate__animated animate__fadeInLeft animate__delay-5s`}>
            BLOG
        </Link>

        <div className="carousel">
            <button type='button' className='button left'>
            <i class="fa-solid fa-arrow-left fa-2x"></i>
            </button>
            <button type='button' className='button right'>
                <i class="fa-solid fa-arrow-right fa-2x"></i>
            </button>

            { project && (
                <div className="container">
                    <Projects closeModal={handleClick} />
                </div>
            )}
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
            { tools && (
                <div className="container">
                    <Tools closeModal={handleClick} />
                </div>
            )}
        </div>
    </div>
  )
}

export default Menu
