import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Importing Routes and Route
import Home from './pages/home/home';
import Services from './pages/service/service'; // Changed 'Service' to 'Services' for consistency
import Navbar from './components/Navbar/navbar'; // Added import statement for Navbar
import Footer from './components/footer/footer'; // Added import statement for Footer
import About from './pages/about/about';
import Contact from './pages/contact/contact';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        
        <Routes>
        <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Services />} /> 
          <Route path="/contact" element={<Contact />} /> 
          
        </Routes>
      <Footer/>   
      </BrowserRouter>
    </div> 
  );
}

export default App;
