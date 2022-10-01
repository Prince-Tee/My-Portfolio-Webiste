import React from 'react'
import linkedin from '../components/assets/linkedin.svg'
import envelope from '../components/assets/envelope.jpg'
import telephone from '../components/assets/telephone.svg'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer7'>
        <h1> Taiwo Adebiyi </h1>
        <img src={linkedin} alt="linkedin-icon" /> <img className='msg' src={envelope} alt="message-icon" />  <img src={telephone} alt="telephone-icon" />
         <p> Copyright c 2022 | AllrightsReserved </p>
    </div>
  )
}

export default Footer