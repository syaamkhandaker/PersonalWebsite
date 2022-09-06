import React from 'react';
import './Header.css'
import pdf from '../../constants/SyaamKhandakerResume.pdf';
import Syaam from '../../constants/Syaam.jpg'

function Header () {
    return(
        <div className='resume__header'>
                        <div className='resume__header-img mt-2 col-md-12'>
            <img src={Syaam} />
            </div>
             <div className='resume__header-info'>
                <h2>Hello, my name is Syaam Khandaker. I am a incoming freshman at Georgia Tech studying Computer Science. For the past few years, it has been a dream of mine to become a software engineer and now my goal is to make that happen.</h2>
                <a href={pdf} target="_blank" rel="noreferrer">Check out my Resume</a>
            </div> 
        </div>
    );
}
export default Header;