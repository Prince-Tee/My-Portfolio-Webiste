import React from 'react';
import './Skills.css'; 
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import C from '../components/assets/C.png';
import tag from '../components/assets/tag.jpg';
import css from '../components/assets/css.jpg';
import js from '../components/assets/js.png';
import git from '../components/assets/git.png';
import ret from '../components/assets/ret.jpg';
import python from '../components/assets/python.png';
function  Skills() {
  return (
    <div className="progressBar">
        <h1> MY SKILLS</h1>
        <p> Here are the few skills I possess </p>
        
        <div className='bar'>
        <div>  <h1 className='skillsword'> <img className="Cimage" src={C} alt="c program"/> C PROGRAMMING</h1> 
        <div className='stripe'><ProgressBar striped variant="info" now={50} /></div>
        </div>
        
        <div>
        <h1 className='skillsword'> <img className="Cimage" src={tag} alt="html"/> HTML</h1>
        <div className='stripe'> <ProgressBar striped variant="info" now={90} /></div>
        </div>
        
        <div>
        <h1 className='skillsword'> <img className="Cimage" src={css} alt="css"/> CSS </h1>
        <div className='stripe'><ProgressBar striped variant="info" now={70} /></div>
        </div>
       
       
        <div>
        <h1 className='skillsword'> <img className="Cimage" src={js} alt="js icon"/> JAVASCRIPT </h1>
        <div className='stripe'><ProgressBar striped variant="info" now={80} /></div>
         </div>
        
         <div>
        <h1 className='skillsword'> <img className="Cimage" src={ret} alt="react icon"/> REACT JS  </h1>
        <div className='stripe'><ProgressBar striped variant="info" now={65} /></div>
         </div>
    
        
        
         <div ><h1 className='skillsword'> <img className="Cimage" src={git} alt="giticon"/> GITHUB </h1>
         <div className='stripe'><ProgressBar striped variant="info" now={75} /></div>
        </div>
    
        <div ><h1 className='skillsword'> <img className="Cimage" src={python} alt="giticon"/> PYTHON </h1>
         <div className='stripe'><ProgressBar striped variant="info" now={75} /></div>
        </div>

    </div>
    </div>
  )
}
export default Skills;