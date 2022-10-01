import { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    state={clicked: false}
    handleClick = () =>{
      this.setState({clicked: !this.state.clicked})
    }
    render() {
    return <nav className="nav">
       <h1 className='Name'> Taiwo Adebiyi</h1> 
      
      
      <ul id="navbar" className={this.state.clicked ? "#navbar active" : "#navbar"}>
       <li>
        <Link style={{textDecoration: 'none'}} to="/About"> About </Link>
        </li>
     
      <li>
      <a style={{textDecoration: 'none'}} href='https://docs.google.com/document/d/181V6P9LWsehQKcr6j0sPSCR5ecCSM7mZvVQHGm4q7v4/edit?usp=drivesdk'> Resume</a>
      </li>
       
       <li>
       <Link style={{textDecoration: 'none'}}  to="/Projects"> Projects </Link>
       </li>
     
       <li>
      <a style={{textDecoration: 'none'}} href='https://github.com/Prince-Tee'> GitHub </a>
      </li>
      
      <li>
      <Link style={{textDecoration: 'none'}} to="/Contact"> Contact </Link>
      </li>
      
      <li>
      <Link style={{textDecoration: 'none'}} to="/Services"> Services </Link>
       </li>
     
      </ul>
      
      <div id="mobile" onClick={this.handleClick}>
        <i id="bar" className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
      </div>
    </nav>
}}