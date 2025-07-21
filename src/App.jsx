import { React, useState, useRef } from 'react'
import './App.css'
import Nav from './sections/Nav/Nav';
import Home from './sections/Home/Home';
import Logros from './sections/Logros/Logros';
import About from './sections/About/About';
import Services from './sections/Services/Services';
import Footer from './sections/Footer/Footer';

function App() {
  const HomeRef = useRef(null);
  const AboutRef = useRef(null);
  const LogrosRef = useRef(null);
  const ServicesRef = useRef(null);
  const FooterRef = useRef(null);
  return (
    <>
      <Nav HomeRef={HomeRef} aboutRef={AboutRef} LogrosRef={LogrosRef} ServicesRef={ServicesRef} footerRef={FooterRef} />
      <section ref={HomeRef}><Home/></section>
      <section ref={AboutRef}><About/></section>
      <Logros/>
      <section ref={ServicesRef}><Services/></section>
      <section ref={FooterRef}><Footer/></section>
    </>
  );
}

export default App;
