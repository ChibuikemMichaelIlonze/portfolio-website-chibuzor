import React from 'react'
import './Services.scss'

const Services = ({ closeModal }) => {

  return (
    <div className='services'>

      <div className='box'>
        <button onClick={closeModal}>
          <i class="fa-solid fa-arrow-left fa-2x"></i>
        </button>

        <div className="content">
          <h1>What I do</h1>
        </div>
      </div>
    </div>
  )
}

export default Services
