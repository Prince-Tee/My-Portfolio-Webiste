import React from 'react'
import linkedin from '../components/assets/linkedin.svg'
 import envelope from '../components/assets/envelope.jpg'
 import telephone from '../components/assets/telephone.svg'
 import './Contact.css'
 
const Contact = () => {
  return (
    <div className='pagecontact'>
    <div className='touch1'>  <h1>Get In Touch.</h1><br/>
   <div className='contact2'>
      <p><a  href='https://www.linkedin.com/in/taiwoadebiyi'> <img src={linkedin} alt="linkedin-icon" /></a> -- Taiwo Adebiyi </p><hr/>
      <p>  <img className='msg' src={envelope} alt="message-icon" /> adebiyi1605@gmail.com</p> <p> Send a message anytime</p><hr/>
       <p>  <img src={telephone} alt="telephone-icon" /> +234- 8103 - 025029</p> <p> Reach me privately</p>
    </div>
    </div>
      <div className='touch2'>
        <h1>Need a Service? </h1> 
        <h1>Send A Message</h1>
        <form>
        <label for="namef"> <h1 className='full'>Enter your full name: </h1></label><br/>
        <input className='full2' type="namef" id="namef" name="namef"></input><hr/>
        <label for="email"><h1 className='full'>Enter your email:</h1></label><br/>
        <input className='full2' type="email" id="email" name="email"></input><hr/>
        <label for="message"><h1 className='full'> Write a Message:</h1></label><br/>
        <input className='full2' type="message" id="message" name="message"></input><hr/>
        <div ><input className='box' type="submit" value="SEND" /></div>
        </form>
      </div>
    </div>
    
  )
}

export default Contact