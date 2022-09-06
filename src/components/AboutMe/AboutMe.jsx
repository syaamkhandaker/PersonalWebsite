import React from 'react';
import Syaam from '../../constants/Syaam.jpg';
import './AboutMe.css';
import pdf from '../../constants/SyaamKhandakerResume.pdf';
import LinkedinIcon from '../../constants/LinkedInIcon.png';
import GithubIcon from '../../constants/GithubIcon.png';

function AboutMe () {
    return(
            <div className='resume__aboutme'>
                <img src={Syaam} />
                <div className='resume__aboutme-text' href>
                    <p>
                        <h1><a id="About_Me">Hello, my name is Syaam Khandaker.{"\n"}</a></h1>
                        <h2>I'm a freshman studying CS at Georgia Tech.</h2>
                        <p className='resume__aboutme-text-tag'>
                           My main focus so far with coding has been with backend development through Java frameworks such as Hibernate and Spring. However, more recently, I have aimed to learn more about 
                           front end tools such as React and Bootstrap.
                        </p>
                        <p>
                            <br></br>
                            <br></br>
                            <br></br>
                        </p>
                        <div className='resume__aboutme-icons'>
                            <a href="https://www.linkedin.com/in/syaam-khandaker-8666bb1b4/"><img src={LinkedinIcon}/></a>
                            <a href="https://www.github.com/syaamkhandaker"><img src={GithubIcon}/></a>
                        </div>
                        <h1 className="resume__aboutme-button"><a href={pdf}>Resume/CV</a></h1>
                    </p>
                    
                </div>
            </div>
    );
}
export default AboutMe;