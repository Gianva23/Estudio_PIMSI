import { React, useState, useRef } from 'react'
import './App.css'
import Nav from './sections/Nav/Nav';
import Home from './sections/Home/Home';
import Contact from './sections/Contact/Contact';
import Logros from './sections/Logros/Logros';
import About from './sections/About/About';
import Services from './sections/Services/Services';
import Reviews from './sections/Reviews/Reviews';
import Footer from './sections/Footer/Footer';

function App() {
  const HomeRef = useRef(null);
  const AboutRef = useRef(null);
  const LogrosRef = useRef(null);
  const ServicesRef = useRef(null);
  const ReviewsRef = useRef(null);
  const FooterRef = useRef(null);

  return (
    <>
      <Nav HomeRef={HomeRef} aboutRef={AboutRef} LogrosRef={LogrosRef} ServicesRef={ServicesRef} ReviewsRef={ReviewsRef} footerRef={FooterRef} />
      <section ref={HomeRef}><Home ServicesRef={ServicesRef}/></section>
      <section ref={AboutRef}><About/></section>
      <Contact footerRef={FooterRef}/>
      <Logros/>
      <section ref={ServicesRef}><Services/></section>
      <section ref={ReviewsRef}><Reviews/></section>
      <section ref={FooterRef}><Footer/></section>
    </>
  );
}

export default App;
