import React, { useEffect, useState } from 'react'
import './Hero.scss'
import 'animate.css'
import nancy from '../../assets/nanci.png'
import Footer from '../Footer/Footer'

const Hero = () => {

    const [changeText, setChangeText] = useState('')
    const texts = ['Data Analyst', 'Data Story Teller', 'Data Technical Writer'];
    

    // useEffect(() => {
    //     let i = 0;
    //     let j = 0;
    //     let isDeleting = false;
    //     const speed = 300;
    //     const delay = 6500;
    //     const intervalId = setInterval(() => {
    //       if (isDeleting) {
    //         setChangeText(texts[i].substring(0, j - 1));
    //         j--;
    //         if (j === 0) {
    //           isDeleting = false;
    //           i = (i + 1) % texts.length;
    //         }
    //       } else {
    //         setChangeText(texts[i].substring(0, j + 1));
    //         j++;
    //         if (j === texts[i].length) {
    //           isDeleting = true;
    //           setTimeout(() => {
    //             isDeleting = false;
    //           }, delay);
    //         }
    //       }
    //     }, speed);
    //     return () => clearInterval(intervalId);
    //   }, []);
      


  return (
    <div className='hero'>
        <img src={nancy} alt="" />
        <div className="overlay">
          <h1>NANCY AMANDI</h1>
        </div>
        
        <section>
          <div className="tape one">
            <div>
              <a href="https://twitter.com/NancyAmandi?t=0fHisVz4L1Kxch7bYiIVdw&s=09" target='_blank'>TWITTER</a> &bull;
              <a href="https://medium.com/@amandinancy16" target='_blank'>MEDIUM</a> &bull;
              <a href="https://hashnode.com/@Nancy9ice" target='_blank'>HASHNODE</a> &bull;
              <a href="https://github.com/Nancy9ice" target='_blank'>GITHUB</a> &bull;
              <a href="https://www.linkedin.com/in/nancy-amandi/" target='_blank'>LINKEDIN</a> &bull;
              <a href="mailto:amandinancy16@gmail.com" target='_blank'>GMAIL</a> &bull;
            </div>
            <div>
              <a href="https://twitter.com/NancyAmandi?t=0fHisVz4L1Kxch7bYiIVdw&s=09" target='_blank'>TWITTER</a> &bull;
              <a href="https://medium.com/@amandinancy16" target='_blank'>MEDIUM</a> &bull;
              <a href="https://hashnode.com/@Nancy9ice" target='_blank'>HASHNODE</a> &bull;
              <a href="https://github.com/Nancy9ice" target='_blank'>GITHUB</a> &bull;
              <a href="https://www.linkedin.com/in/nancy-amandi/" target='_blank'>LINKEDIN</a> &bull;
              <a href="mailto:amandinancy16@gmail.com" target='_blank'>GMAIL</a> &bull;
            </div>
          </div>

          <div className="tape two">
            <div>
              <a href="https://twitter.com/NancyAmandi?t=0fHisVz4L1Kxch7bYiIVdw&s=09" target='_blank'>TWITTER</a> &bull;
              <a href="https://medium.com/@amandinancy16" target='_blank'>MEDIUM</a> &bull;
              <a href="https://hashnode.com/@Nancy9ice" target='_blank'>HASHNODE</a> &bull;
              <a href="https://github.com/Nancy9ice" target='_blank'>GITHUB</a> &bull;
              <a href="https://www.linkedin.com/in/nancy-amandi/" target='_blank'>LINKEDIN</a> &bull;
              <a href="mailto:amandinancy16@gmail.com" target='_blank'>GMAIL</a> &bull;
            </div>
            <div>
              <a href="https://twitter.com/NancyAmandi?t=0fHisVz4L1Kxch7bYiIVdw&s=09" target='_blank'>TWITTER</a> &bull;
              <a href="https://medium.com/@amandinancy16" target='_blank'>MEDIUM</a> &bull;
              <a href="https://hashnode.com/@Nancy9ice" target='_blank'>HASHNODE</a> &bull;
              <a href="https://github.com/Nancy9ice" target='_blank'>GITHUB</a> &bull;
              <a href="https://www.linkedin.com/in/nancy-amandi/" target='_blank'>LINKEDIN</a> &bull;
              <a href="mailto:amandinancy16@gmail.com" target='_blank'>GMAIL</a> &bull;
            </div>
          </div>
        </section>

        <Footer />
    </div>
  )
}

export default Hero