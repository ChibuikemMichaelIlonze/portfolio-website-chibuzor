import React from 'react'
import './Highlights.scss'

const Highlights = ( {closeModal} ) => {
    const highlight = [
        {
            id : 1,
            date: "May, 2022",
            title: "Led a team to top 5 in an AI hackathon",
            link: "https://medium.com/@amandinancy16/my-experience-in-markhack-1-0-c786522f2e09"
        },
        {
            id : 2,
            date: "May, 2022",
            title: "Awarded best data storyteller in Numerist Challenge 1.0",
            link: "https://medium.com/@amandinancy16/the-one-my-thought-process-9787c5d45054"
        },
        {
            id : 3,
            date: "June, 2022",
            title: "Spoke on Data Storytelling",
            link: "https://superpeer.com/the-numerist/event/may-data-challenge-walk-through"
        },
        {
            id : 4,
            date: "October, 2022",
            title: "Led a team to top 5 in DataFestAfrica Datathon 2022",
            link: "https://drive.google.com/file/d/11Pw9OJ_EN_2px-um2zvNphCOdSRely3C/view?usp=sharing"
        },
        {
            id : 5,
            date: "December, 2022",
            title: "Spoke on Data Storytelling at DevFestEnugu 2022",
            link: "https://drive.google.com/file/d/11OJ_-T_9nlK4LRXdcZIwjJQKiUyR0xjV/view?usp=sharing"
        },
        {
            id : 6,
            date: "April, 2023",
            title: "Won the Women in Data Africa Datathon 2023 along with my teammate",
            link: "https://amandinancy16.medium.com/winning-the-wida-datathon-2023-data-titans-60becca5aa53"
        },
    ]
  return (
    <div className='highlights'>
        
        <div className="box">
            <h2>Highlights</h2>
            <button onClick={closeModal}>
                <i class="fa-solid fa-arrow-left fa-2x"></i>
            </button>

            {highlight.map((highlights, index) => (
                <div className="highlight" key={highlights.id}>
                    <p>{highlights.date}</p>
                    <span>
                        <h4>{highlights.title}</h4>
                        <a href={highlights.link} target='_blank'><i class="fa-solid fa-link"></i></a>

                        <div className="dot"></div>
                    </span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Highlights