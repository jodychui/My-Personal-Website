import React from 'react';
import NavBar from './Components/Navbar';
import Hero from './Components/Hero';
import AboutMe from './Components/AboutMe';
import Resume from './Components/Resume';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  return (
    <div>
        <NavBar/>
        <Hero/>
        <AboutMe/>
        <Resume/>
        <Projects/>
        <Contact/>
    </div>
  );
}

export default App;
