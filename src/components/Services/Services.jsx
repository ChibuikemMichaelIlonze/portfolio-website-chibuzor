import React from 'react'
import './Services.scss'

const Services = ({ closeModal }) => {
  const services = [
    {
      id: 1,
      icon: "fa-solid fa-broom fa-3x",
      title: "Data Cleaning"
    },
    {
      id: 2,
      icon: "fa-solid fa-magnifying-glass fa-3x",
      title: "Data Exploration"
    },
    {
      id: 3,
      icon: "fa-solid fa-chart-simple fa-3x",
      title: "Data Visuaisation"
    },
    {
      id: 4,
      icon: "fa-solid fa-building fa-3x",
      title: "Dashboard building"
    },
    {
      id: 5,
      icon: "fa-solid fa-bookmark fa-3x",
      title: "Data Storytelling"
    },
    {
      id: 6,
      icon: "fa-solid fa-chart-pie fa-3x",
      title: "Statistical analysis"
    },
    {
      id: 7,
      icon: "fa-solid fa-code fa-3x",
      title: "ETL development"
    },
    {
      id: 8,
      icon: "fa-solid fa-pen-nib fa-3x",
      title: "Technical Writing"
    },
  ]

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
