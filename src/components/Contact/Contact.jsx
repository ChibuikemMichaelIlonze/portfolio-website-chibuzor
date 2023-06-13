import React, { useState, useRef } from 'react';
import 'animate.css'
import './Contact.scss';

const Contact = ({ closeModal }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isClosing, setIsClosing] = useState(false)

  const formRef = useRef(null)

  const handleCloseClick = e => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      closeModal();
    }, 500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormState(prevState => ({ ...prevState, [name]: value }));
  };

  function handleAnimationEnd() {
    if (isClosing) {
      setIsClosing(false);
      closeModal();
    }
  }

  return (
    <div className={`message animate__animated ${isClosing ? 'animate__fadeOutUp' : 'animate__fadeInUp'}`} onClick={handleCloseClick}>      
        <form className='animate__animated animate__fadeInUp'ref={formRef} onAnimationEnd={handleAnimationEnd} onClick={handleFormSubmit}>
            <button onClick={handleCloseClick} id='close' type='button'>
            <i className='fa-solid fa-x fa-2x'></i>
            </button>

            <h1>So, You want to get in contact?</h1>
            <p>Leave your details then</p>

            <div className='name'>
            <input
                type='text'
                name='name'
                id='name'
                value={formState.name}
                onChange={handleInputChange}
            />
            <label htmlFor='name' className={formState.name ? 'active' : ''}>
                Name
            </label>
            </div>

            <div className='email'>
            <input
                type='email'
                name='email'
                id='email'
                value={formState.email}
                onChange={handleInputChange}
            />
            <label htmlFor='email' className={formState.email ? 'active' : ''}>
                Email
            </label>
            </div>

            <div className='text'>
            <textarea
                name='message'
                id='message'
                value={formState.message}
                onChange={handleInputChange}
            />
            <label
                htmlFor='message'
                className={formState.message ? 'active' : ''}>
                Message
            </label>
            </div>

            <button type='submit' id='submit'>
              Send Message
              <span></span>
            </button>
        </form>
    </div>
  );
};

export default Contact;
