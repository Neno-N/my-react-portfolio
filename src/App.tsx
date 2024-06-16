import React from 'react';
import logo from './logo.svg';
import './App.scss';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Projects from './components/Projects';

function App() {
  return (
    
    <>
      <Navbar />
      <Header />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
