import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from './Shared/Shared/Container';
import Navbar from './Shared/Shared/Navbar/Index';

import {BrowserRouter,Routes,Route} from "react-router-dom";

import About from './Shared/Shared/Aboutus/Index';
import Contact from './Shared/Shared/Contact/Index';
import Service from './Shared/Shared/Services/Index';
import Home from './Shared/Shared/Home/Index';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Navbar/>
      <Routes>
      <Route  path="/" element={<Container/>}/>
        <Route  path="/Home" element={<Home/>}/>
        <Route  path="/About" element={<About/>}/> 
        <Route  path="/Service" element={<Service/>}/> 
      </Routes>
      <Navbar/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
