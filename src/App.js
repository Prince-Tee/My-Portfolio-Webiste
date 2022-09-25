import './App.css';
import Services from './pages/Services';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Footer from './pages/Footer';
import MySkills from './components/assets/MySkills.svg';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Navbar from './pages/Navbar';



function App() {
  return (
    
    <Router>
     <Navbar/>
     <Routes> 
     <Route exact path='/Home' element={<Home/>}></Route>
     <Route exact path='/About' element={<About/>}></Route>
    <Route exact path='/Projects' element={<Projects/>}></Route>
    <Route exact path='/Contact' element={<Contact/>}></Route>
    <Route exact path='/Services' element={<Services/>}></Route>
    </Routes>
    
    <div className='grid-container' >
     
     
     
    
    
    <div className='item1'><Home /></div>
     <div className='item2'><About /></div>
     <div className='item3'> <img src={MySkills} alt='My Skills'></img> </div>
      <div className='item4'> <Services /> </div>
    <div className='item5'><Projects /></div>
   <div className='item6'> <Contact /></div>
    <div className='item7'><Footer /></div>
    </div>
    </Router>
    
  );
}

export default App;
