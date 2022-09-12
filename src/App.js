import React, { useState } from 'react';

import './App.css';

import Menu from './components/Menu';
import Header from './components/Header';
import Intro from './pages/Intro';
import About from './pages/About';
import Projects from './pages/Projects';
import Footer from './components/Footer';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className='relative'>
        <Menu isOpen={isOpen} setIsOpen={setIsOpen} />
        <Header Name={"Alexis"} isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>
      <Intro Name={"Alexis"} />
      <About Copy={"TBD"} />
      <Projects />
      <Footer email={"lexus9425@gmail.com"} />
    </div>
  );
};

export default App;