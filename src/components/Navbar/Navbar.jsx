import React, { useState } from 'react'
import './Navbar.scss'
import'animate.css'
import { Link } from 'react-router-dom'
import Contact from '../Contact/Contact'

const Navbar = () => {
  const [isDoorOpen, setIsDoorOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const onMouseEnter = () => {
    setIsDoorOpen(false)
  }

  const onMouseLeave = () => {
    setIsDoorOpen(true)
  }

  const handleModalClose = () => {
    setIsOpen(false);
  };

  const handleModalOpen = () => {
    setIsOpen(true);
  };

  

  return (
    <div className='navbar'>
        <Link to='/dashboard' className='link next' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <i className={`fa-solid fa-${isDoorOpen ? 'door-closed' : 'door-open'} fa-flip-horizontal fa-2x`}></i>
          <span class='animate__slideInLeft'>Know more</span>
        </Link>

        <Link to='/' className='link contact' onClick={handleModalOpen}>
          <i class="fa-solid fa-user fa-2x"></i>
          <span class='animate__slideInLeft'>Contact Me</span>
        </Link>

        {isOpen && (
          <div className="container">
            <Contact closeModal={handleModalClose}/>
          </div>
        )}
        
    </div>
  )
}

export default Navbar