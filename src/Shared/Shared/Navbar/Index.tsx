
import React from 'react';
import {  Link } from "react-router-dom";
import './Index.css'
import Home from '../Home/Index';
import About from '../Aboutus/Index';
 import Service from '../Services/Index';
 import logo1 from "../Images/155e39ab94224b83fd20ee00b95f69ba.jpg"
 import'./Index.css'
export default function Navbar() {
  return (
    <div className='maincontainer'>
    <div className='navbar'>
    <div className='logo'><Link to="/"><img src={logo1} alt='name' /></Link> </div>
    <div className='navbar1'>
       <li>
      <Link className='link' to="/Home">HOME</Link>
    </li>
    <li>
      <Link  className='link' to="/About">ABOUT</Link>
    </li>
    <li>
      <Link  className='link' to="/Service">SERVICES</Link>
    </li>
    
  
    </div>
    <div className=' sociallink'>SocialNetworks</div></div></div>
  )
}
