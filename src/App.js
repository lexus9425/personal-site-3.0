import React from 'react';

import './App.css';

import Intro from './pages/Intro';
import About from './pages/About';
import Projects from './pages/Projects';
import Footer from './components/Footer';

const App = () => {

  return (
    <div>
      <div className='relative'>
      </div>
      <Intro Name={"Alexis"} />
      <About />
      <Projects />
      <Footer email={"lexus9425@gmail.com"} />
    </div>
  );
};

export default App;