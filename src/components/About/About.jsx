import React from 'react'
import './About.scss'

const About = ({ closeModal }) => {
  return (
    <div className='about'>
      <section>
        <button onClick={closeModal}>
            <i class="fa-solid fa-arrow-left fa-2x"></i>
        </button>
        <h1>About me <span></span></h1>
        <p>
          I am not your usual data analyst or data storyteller. 
          You'll be awed at my problem solving and critical thinking skills. 
          My personal projects are proof of this. <br /> <br />
          My experience in project management has aided my ability to communicate effectively with stakeholders. 
          I'm always eager to explore new domains and use data to solve immediate and longterm problems in that domain as relates to your organization. 
          Seeing myself as a forever student has made me and is still making me read books, articles, and watch videos that span across data, business, and finance. <br /> <br />
          My favorite book is <i>"Effective Data Storytelling"</i> by Brent Dykes. My hunger for sharing valuable content has made me write articles and speak at different events on different data topics. 
          I'm always open to full-time and part-time jobs and contracts.
        </p>
      </section>
    </div>
  )
}

export default About