import React from 'react'
import './Services.scss'
import services from '../../Database/Services.json'

const Services = ({ closeModal }) => {

  return (
    <div className='services'>

      <div className='box'>
        <h2>Services</h2>
        <button onClick={closeModal}>
          <i class="fa-solid fa-arrow-left fa-2x"></i>
        </button>

        {services.map((service, index) => (
          <div className="service" key={service.id}>
            <i class={service.icon}></i>
            <p>{service.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
