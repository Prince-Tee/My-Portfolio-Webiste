

import React from 'react';
import MyPicture from '../components/assets/MyPicture.jpg';
import './Home.css'

const Home = () => {
  return (
    <div classname='homeG'>
<img className="image" src={MyPicture} alt="My face"/>

<div>
     


      <div className='word'>
       <p> Hi There</p>
       <h1 className='Name2'>I AM TAIWO ADEBIYI</h1> 
       <h1 className='Name3'>A Software Engineer </h1>
      <br/><h1 className='Name4'> I build mechanism that helps people pursue their dreams. </h1> 
      </div>
      </div>

      

    </div>
  )
}

export default Home