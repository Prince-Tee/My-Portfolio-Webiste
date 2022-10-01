import React from 'react'
import './Projects.css'
import RESTUARANT from '../components/assets/RESTUARANT.jpg'
import Programming from '../components/assets/Programming.jpg'
import PRINTING from '../components/assets/PRINTING.jpg'

const Projects = () => {
  return (
    <div className='lap'> 
      <h1> Projects </h1>
      <p>Here are a few people and projects i've patnered and worked on.</p>
      <div className='project1'>
     <div style={{ backgroundImage: `url(${PRINTING})` }}> <a style={{textDecoration: 'none'}} className='whitish' href='https://adebiyi1605.wixsite.com/adeptbookprint'> A Website for a Printing Press </a></div>
      </div>
    <div className='project1'>
    <div style={{ backgroundImage: `url(${Programming})` }}> <a style={{textDecoration: 'none'}} className='whitish' href='https://dynamicpeeps.hashnode.dev/'> My Personal programming Blog</a></div>
      </div>
    <div className='project1'>
     <div style={{ backgroundImage: `url(${RESTUARANT})` }}>  <a style={{textDecoration: 'none'}} className='whitish' href='https://gb-food-app.netlify.app/'> A Website for a Restuarant </a></div>
     </div>
 </div>
  )
}

export default Projects