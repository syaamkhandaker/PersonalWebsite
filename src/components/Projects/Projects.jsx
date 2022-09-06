import React from 'react';
import './Projects.css';
import Maps from '../../constants/MapsSS.png';
import Words from '../../constants/WordsSS.png';

function Projects () {
    return(
        <div className="resume__projects">
            <h1><a id="Projects">Projects</a></h1>
            <div className='resume__projects-layout'>
                <a href="https://github.com/syaamkhandaker/Maps-App" className='resume__projects-layout-maps'>
                    <img src={Maps}/>
                </a>
                <a href="https://github.com/syaamkhandaker/Words" className='resume__projects-layout-words'>
                    <img src={Words}/>
                </a>
            </div>
        </div>
    );
}
export default Projects;