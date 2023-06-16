import React from 'react'
import './Projects.scss'
import projects from '../../Database/Projects.json'

const Projects = ({ closeModal }) => {

  return (
    <div className='projects'>
      <div className="box">
        <h2>Projects</h2>
        <button onClick={closeModal}>
          <i className="fa-solid fa-arrow-left fa-2x"></i>
        </button>

        {projects.map((project, index) => (
          <div className="project" key={project.id}>
            <i className={project.icon}></i>
            <h3>{project.title}</h3>
            <p>{project.body}</p>
            <a href={project.link} target='_blank'><i class="fa-brands fa-github fa-2x"></i></a>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Projects
