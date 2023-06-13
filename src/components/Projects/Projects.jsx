import React from 'react'
import './Projects.scss'

const Projects = ({ closeModal }) => {
  const projects = [
        {
            id : 1,
            title: "The One",
            icon: "fa-solid fa-laptop-code fa-4x",
            body: "Out of 210 unique webpages, one webpage was singled out for immediate action to improve the E-commerce company's revenue",
            link: "https://github.com/Nancy9ice/The-One"
        },
        {
            id : 2,
            title: "Zentel Network Service Center",
            icon: "fa-solid fa-laptop-code fa-4x",
            body: "Playing the role of a business analyst in a team of 3, we built a dashboard that helped Zentel company track the customer complaints of their clients to improve the response and resolution times of complaints.",
            link: "https://github.com/Nancy9ice/Zentel-Network-Service-Center"
        },
        {
            id: 3,
            title: "Danny's Diner",
            icon: "fa-solid fa-laptop-code fa-4x",
            body: "I helped Danny understand his restaurant customers by answering his questions using SQL",
            link: "https://github.com/Nancy9ice/Danny-s-Diner"
        },
        {
            id : 4,
            title: "TransTech",
            icon: "fa-solid fa-laptop-code fa-4x",
            body: "Several extracted datasets were transformed and loaded into a data warehouse and was queried using SQL",
            link: "https://github.com/Nancy9ice/TransTech-Data-Project"
        },
        {
            id : 5,
            title: "Women's FIFA World Cup",
            icon: "fa-solid fa-laptop-code fa-4x",
            body: "This project was aimed at figuring out the strategy that is prevalent amongst most winning teams in the Women's FIFA World Cup",
            link: "https://github.com/Nancy9ice/Women-FIFA-World-Cup"
        }
    ]

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
