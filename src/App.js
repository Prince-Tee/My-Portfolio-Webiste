import './App.css';
import Services from './pages/Services';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import MyPicture from './components/assets/MyPicture.jpg';
import Footer from './pages/Footer';
import MySkills from './components/assets/MySkills.svg';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';



function App() {
  return (
    
    <Router>
     <Routes> 
    <Route exact path='/About' element={<About/>}></Route>
    <Route exact path='/Projects' element={<Projects/>}></Route>
    <Route exact path='/Contact' element={<Contact/>}></Route>
    <Route exact path='/Services' element={<Services/>}></Route>
    </Routes>
    <div className='Name'> <h1> Taiwo Adebiyi</h1> </div>
    <div className='grid-container' >
     <div className='item1'>
     
    <div className='home1'>
    <img className="image" src={MyPicture} alt="My face"></img>
    <div className='Linked'>
      <div><Link style={{textDecoration: 'none'}} to="/About"> About </Link></div>
      <div><a style={{textDecoration: 'none'}} href='https://docs.google.com/document/d/181V6P9LWsehQKcr6j0sPSCR5ecCSM7mZvVQHGm4q7v4/edit?usp=drivesdk'> Resume</a></div>
      <div> <Link style={{textDecoration: 'none'}}  to="/Projects"> Projects </Link></div>
      <div><a style={{textDecoration: 'none'}} href='https://github.com/Prince-Tee'> GitHub </a></div>
      <div><Link style={{textDecoration: 'none'}} to="/Contact"> Contact </Link></div>
      <div><Link style={{textDecoration: 'none'}} to="/Services"> Services </Link></div>
      </div>
    
      </div>
      
      <div>
      <div className='word'>
       <p> Hi There</p>
       <h1 className='Name2'>I AM TAIWO ADEBIYI</h1> 
       <h1 className='Name3'>A Software Engineer </h1>
      <h1 className='Name4'> I build mechanism that helps people pursue their dreams. </h1> 
      </div>
      </div>

      </div>
      <br/>
     <div className='item2'><About /></div>
     <div className='item3'> <img src={MySkills} alt='My Skills'></img> </div>
      <div className='item4'> <Services /><br/> </div>
    <div className='item5'><Projects /><br/></div>
   <div className='item6'> <Contact /><br/></div>
    <div className='item7'><Footer /></div>
    </div>
    </Router>
    
  );
}

export default App;
