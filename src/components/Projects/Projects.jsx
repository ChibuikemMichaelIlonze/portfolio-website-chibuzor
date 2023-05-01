import React from 'react'
import './Projects.scss'

const Projects = ({ closeModal }) => {
  return (
    <div className='projects' onClick={closeModal}>
        <div className="box">
            <button onClick={closeModal}>
                <i class="fa-solid fa-arrow-left fa-2x"></i>
            </button>
        </div>
    </div>
  )
}

export default Projects