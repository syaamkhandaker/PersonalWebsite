import React from 'react';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import ContactMe from './components/Contact Me/ContactMe';
import Navbar from './components/Navbar/Navbar'


function App() {
    
    return(
    <div>
        <Navbar />
        <AboutMe />
        <Projects />
        <ContactMe />
    </div>
)}
export default App;