import React from 'react';
import linkedin from '../components/assets/linkedin.svg';
import twitter from '../components/assets/twitter.svg';

import './About.css'
const About = () => {
  return (
    
    
    <div className='about1'>
    

     <h1 className='about3'> About Me </h1>
    <div  className='about4'> <p>I'm a computer programmer with an accounting background. </p>
     <p> I'm currently studying  Software Engineering. </p>
    <p>  I have delved into HTML, CSS, JAVASCRIPT, C PROGRAMMING AND PYTHON. </p>
      <p>I have also done and collabrated on a projects using REACT JS.</p>
    <p> I'm a believer that technology can change the future of the world if used rightly.</p>
   <p>  I'm also passionate about coding because it gives me a sense of purpose that I will be able to build something worthwhile for myself and people around me.</p></div>
    <a  href='https://www.linkedin.com/in/taiwoadebiyi'> <img src={linkedin} alt="linkedin-icon" /></a>
    <img src={twitter} alt="twitter-icon" />
    </div>
  )
}

export default About