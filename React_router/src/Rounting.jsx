import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/contact';
import Mission from './components/Mission';
import DyanamicRouting from './components/DyanamicRouting';

const Routing = () => {
  return (
   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} >
            <Route path="/about/mission" element={<Mission/>} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/:id" element={<DyanamicRouting />} />
      </Routes>
   
  );
};

export default Routing;
