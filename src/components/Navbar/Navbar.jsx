import React from 'react';
import './Navbar.css'
import pdf from '../../constants/SyaamKhandakerResume.pdf';
import logo from '../../constants/Logo.jpg';

function Navbar () {
    return(
        <nav className='resume__view'>
            <div className='resume__view-logo'>
                <img src={logo} />
            </div>
            <ul className='resume__view-links'>
                <li><a className="underline-hover-effect" href='#About_Me'><text>1.</text> About Me</a></li>
                <li><a className="underline-hover-effect" href='#Projects'><text>2.</text> Projects</a></li>
                <li><a className="underline-hover-effect" href='#Contact_Me'><text>3.</text> Contact Me</a></li>
                <li><a className="underline-hover-effect" href={pdf} target="_blank" rel="noreferrer">Resume/CV</a></li>
            </ul>
        </nav>
    );
}
export default Navbar;