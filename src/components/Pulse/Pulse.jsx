import React from 'react'
import './Pulse.scss'

const Pulse = () => {
  const [open, setOpen] = useState(false)


  function handleClick() {
    setOpen(!open)
  }
  return (
    <div className='pulse'>
        <div className='circle animate__animated animate__fadeInUp' onClick={handleClick}>
          <i className={`fa-solid fa-${open ? 'times' : 'hand-point-up'} fa-3x`}></i>
        </div>
    </div>
  )
}

export default Pulse