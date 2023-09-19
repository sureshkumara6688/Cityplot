import * as React from 'react';
import { Link } from 'react-router-dom';
 import './index.css'
import logo from "../Images/Screenshot 2023-07-20 164224.png"
import logo1 from "../Images/155e39ab94224b83fd20ee00b95f69ba.jpg"
import logo2 from "../Images/smart-city-flat-cityscape-background-different-icon-elements-modern-architecture-mobile-phone-control-98024581.webp"
import logo3 from "../Images/th (6).jpg"
import logo4 from "../Images/th (7).jpg"

export default function Header(){
   

    return(
    
  <>
  <div className='maincontainers' >
    <h1> WHERE TECHNOLOGY TRANSFORMS</h1>
    <h1 style={{color:'green'}}> REAL ESTATE</h1>
    <div className='containerimg'>
    <img src={logo1} alt='name' /> 
    </div>
    
    <h2>Discover Your Dream Plot with Cityplots</h2>
    <div> </div>
    <p> Cityplots is not your typical organization next door.We are a pioneering tech company that is revolutionzing the way people find and purchase plots.</p>
    <p> Combining our passion to simplify property hunting with cutting-edge technology,we have developed a powerful suite of tools. Our services enhance your plot-hunting experience.</p>
<div>
     <h2> Pioneering Technology Delivered to Your Fingertips</h2>
     <div className='tech'> 
     <div className='containerimg1'>
    <img src={logo2} alt='name' /> 
    </div>
    <div className='paragragh'>
        <p>We leverage the Latest advancements in technology to provide 
        you with an unrivaled experience.</p>
        <p> Our innovative approach sets us apart from traditional companies.</p>
    </div>
</div></div>
<div>
     <h2> Securing Your Investment with Transparency</h2>
     <div className='tech'> 
     <div className='containerimg1'>
    <img src={logo3} alt='name' /> 
    </div>
    <div className='paragragh' >
        <p>With blockchain,you can trust that your information and legal documentation are immutable and tamper-proof,ensuring a safe and transparent transaction.</p>
    </div>
</div></div>
<div>
     <h2> AI Empowerment</h2>
     <div className='tech'> 
     <div className='containerimg1'>
    <img src={logo4} alt='name' /> 
    </div>
    <div className='paragragh'>
       <p>Our app harnesses the power of AI to revolutionize your plot-hunting experience.
        Upload any legal document,and our AI performs a vernacular check while providing a concise 
        summary for easy understanding.
       </p>
       <p> Experience our AI Invesment Banker,which analyzes your income,expenses,and saving to recommend properties
        with higher ROI potential.
       </p>
    </div></div></div>
    <div className='techs'> 
    <div style={{width:"50%"}}>
        <h2>Cityplots Social Networks</h2>
        <p> SincroniX,a technology company,is set to launch a new type of tradable asset 
           in the form of NFTs. 
        </p>
    </div>
    <div>
        <ul>
            <li>Cityplots Telegram </li> 
            <li> Cityplots Discard</li> 
            <li>Cityplots Medium </li>   </ul>
    </div>
    <div>
        <ul>
        <li> Cityplots Twitter</li>
            <li> Cityplots Reddit</li>
            <li> Cityplots Document</li>
        </ul>
    </div>
          
      
</div></div>




</>



    
    )

}