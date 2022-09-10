import React from 'react';
import './ContactMe.css'

function ContactMe () {
    return(
        <div className='resume__view-contact'>
            <div className='resume__view-contact-text'>
                <h1><a id="Contact_Me">Any Questions? Feel free to contact me.</a></h1>
               <h1 className='resume__view-contact-text-border'><a href="mailto:syaamkhandaker@gmail.com" rel="noopener noreferrer" target="_blank">Contact Me</a></h1> 
            </div>
        </div>
    );
}
export default ContactMe;