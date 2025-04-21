import React from 'react';
import './App.css';
import HeroSection from './component/HeroSection/HeroSection';
import Subscribe from './component/SubScribe/SubScribe';
import Footer from './component/Footer/Footer';
import Navbar from './component/Navbar/Navbar';
import Service from './component/ServiceSection/Service';
import Contact from './component/Contact/Contact';





export default function App() {
  return (
    <>
    <Navbar/>
      <HeroSection/>
      <Service/>
      <Contact/>
      <Footer/>
      <Subscribe/>
    </>
  );
}


