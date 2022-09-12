import React from 'react'
import training from '../components/assets/training.svg'
import ServicesRendered from '../components/Services/ServicesRendered'
import consulting from '../components/assets/consulting.svg';
import Website from '../components/assets/Website.svg';
import Database from '../components/assets/Database.svg';
import Testing from '../components/assets/Testing.svg';
import Writing from '../components/assets/Writing.svg'
import './Services.css'

const Services = () => {
  return (
   <div className='Service'>
    <h1>Services I Render. </h1>
    <p>Here are the services I can render</p>
    <div className='Render'>
     <div> <ServicesRendered image={training} text={'Training'} smallText={'I offer instructor-led training in a way that fits with the way you work. '} /></div>
     <div><ServicesRendered image={consulting} text={'IT Consulting.'} smallText={'I offer Information technology consulting as a field of activity focused on advising organizations on how best to use information technology in achieving their business objectives.'} /></div>
     <div><ServicesRendered image={Website} text={'Responsive Web Design'} smallText={'I Help design Mobile-friendly, worldclass websites that helps scales your bussiness and helps user experience get better. '} /></div>
     <div><ServicesRendered image={Database} text={'Database Development'} smallText={'With equipped skills of developing and maintaining databases i could  help develop scalable and optimized databases for your organization. '} /></div>
     <div> <ServicesRendered image={training} text={'Customer Software Development'} smallText={'I help develop tehnical solutions in form of softwarres that answer to the needs of customer’s problems. '} /></div>
     <div><ServicesRendered image={Testing} text={'Software Testing'} smallText={'I help test softwares ready for production to fish out bugs and give advice on how to make it scalable, usable and enterprise-friendly.  '} /></div>
     <div> <ServicesRendered image={Writing} text={'Technical Writing'} smallText={'I help channel and transfer information between two or more parties, through any medium that best facilitates the transfer and comprehension of the information. '} /></div>
     </div>

   </div> 
  )
}

export default Services