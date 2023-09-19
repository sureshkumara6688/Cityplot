import React from 'react'
import logo1 from "../Images/155e39ab94224b83fd20ee00b95f69ba.jpg"
import logo2 from "../Images/smart-city-flat-cityscape-background-different-icon-elements-modern-architecture-mobile-phone-control-98024581.webp"
import logo3 from "../Images/th (6).jpg"
import logo4 from "../Images/th (7).jpg"
 import'./Index.css'
export default function Service() {
  return (
   <>
   <div className='servicecontainer'>

   
   
   
   <h1 style={{color:'red',textAlign:"left"}}> Project Lists</h1>
   <div>

     <div className='Img'>
    <img src={logo3} alt='name' /> 
    <div className='price'>
    <p> 60L</p>
    <p>Eropene</p>
    </div>
   
    </div>
   </div>
  


   <h1 style={{color:'red',textAlign:"left"}}> Property Lists</h1>
   <div>

     <div className='Img'>
    <img src={logo1} alt='name' /> 
    <div className='price'>
    <p> 30L</p>
    <p>Eropene</p>
    </div>
   
    </div>
   </div>
   <h1 style={{color:'red',textAlign:"left"}}> Categeory Lists</h1>
   <div>

     <div className='Img'>
    <img src={logo2} alt='name' /> 
    <div className='price'>
    <p> 30L</p>
    <p>Eropene</p>
    </div>
   
    </div>
   </div>
   </div>
   
   
   </>
  )
}
