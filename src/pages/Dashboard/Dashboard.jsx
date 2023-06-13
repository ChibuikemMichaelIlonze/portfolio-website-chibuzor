import React, { useState } from 'react'
import './Dashboard.scss'
import 'animate.css'
import Menu from '../../components/Menu/Menu'

const Dashboard = () => {
  const [open, setOpen] = useState(false)
  const [textAnimationComplete, setTextAnimationComplete] = useState(false)

  function handleClick() {
    setOpen(!open)
  }

  function handleTextAnimationEnd() {
    setTextAnimationComplete(!textAnimationComplete)
  }

  return (
    <div className='dashboard'>
      {/* Dashboard */}

      <h1 className='text' >
        <span className='line1'>HI,</span>
        <span className='line2'>SO, YOU HAVE DECIDED TO KNOW MORE.</span>
        <span className='line3' onAnimationEnd={handleTextAnimationEnd}>WHAT YOU WAITING FOR, CLICK!</span>
      </h1>

      {textAnimationComplete && (
        <div className='circle animate__animated animate__fadeInUp' onClick={handleClick}>
          <i className={`fa-solid fa-${open ? 'times' : 'hand-point-up'} fa-3x`}></i>
        </div>
      )}

      {open && (
        <div className='container'>
          <Menu/>
        </div>
      )}
    </div>
  )
}

export default Dashboard
