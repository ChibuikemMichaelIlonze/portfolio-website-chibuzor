import React from 'react'
import './Highlights.scss'
import highlight from '../../Database/Highlights.json'

const Highlights = ( {closeModal} ) => {

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