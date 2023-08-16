import { useState } from 'react';
import './Menu.scss';
import 'animate.css';
import { Link } from 'react-router-dom';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';
import About from '../About/About';
import Tools from '../Tools/Tools';
import Highlights from '../Higlights/Highlights';
import Blog from '../Blog/Blog';

const Menu = ()  => {
  const [activeIndex, setActiveIndex] = useState(null);

  function handleClick() {
    setActiveIndex(null);
  }

  function incrementIndex() {
    setActiveIndex((prevIndex) => {
      if (prevIndex === 6) {
        return 1;
      } else {
        return prevIndex + 1;
      }
    });
  }
  
  function decrementIndex() {
    setActiveIndex((prevIndex) => {
      if (prevIndex === 1) {
        return 6;
      } else {
        return prevIndex - 1;
      }
    });
  }
  

  return (
    <div className='menu'>
      <Link to='/' id='home'><i className='fa-solid fa-home fa-2x'></i></Link>
      
      <div id="left">

        <Link
            to='#projects'
            className={`link one animate__animated animate__fadeInRight `}
            onClick={() => setActiveIndex(1)}
            >
            PROJECTS
        </Link>
        <Link
            to='#about'
            className={`link two animate__animated animate__fadeInRight `}
            onClick={() => setActiveIndex(2)}
            >
            ABOUT
        </Link>

        <Link
            to='#services'
            className={`link three animate__animated animate__fadeInRight `}
            onClick={() => setActiveIndex(3)}
        >
            SERVICES
        </Link>

      </div>


      <div id="right">

        <Link
            to='#tools'
            className={`link four animate__animated animate__fadeInLeft `}
            onClick={() => setActiveIndex(4)}
        >
            TOOLS
        </Link>
        <Link 
            to='' className={`link five animate__animated animate__fadeInLeft `}
            onClick={() => setActiveIndex(5)}
        >
            HIGHLIGHTS
        </Link>
        <Link 
            to='' className={`link six animate__animated animate__fadeInLeft `}
            onClick={() => setActiveIndex(6)}
            >
            BLOG
        </Link>
        
       </div>

      <div className='carousel'>
        {activeIndex !== null && (
          <>
            <button type='button' className='button left' onClick={decrementIndex}>
              <i className='fa-solid fa-arrow-left fa-3x'></i>
            </button>
            <button type='button' className='button right' onClick={incrementIndex}>
              <i className='fa-solid fa-arrow-right fa-3x'></i>
            </button>
          </>
        )}

        {activeIndex === 1 && (
          <div className='container'>
            <Projects closeModal={handleClick} />
          </div>
        )}
        {activeIndex === 2 && (
          <div className='container'>
            <About closeModal={handleClick} />
          </div>
        )}
        {activeIndex === 3 && (
          <div className='container'>
            <Services closeModal={handleClick} />
          </div>
        )}
        {activeIndex === 4 && (
          <div className='container'>
            <Tools closeModal={handleClick} />
          </div>
        )}
        {activeIndex === 5 && (
          <div className='container'>
            <Highlights closeModal={handleClick} />
          </div>
        )}
        {activeIndex === 6 && (
          <div className='container'>
            <Blog closeModal={handleClick} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
