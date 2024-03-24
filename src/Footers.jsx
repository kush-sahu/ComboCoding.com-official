import React from 'react'
import linkedin from './linkeddin.jpg'
import logo from "./logo.jpeg";
import twitter from './twitter.png'
import wp from './wp.png'
import Git from './github.png'
import './Footers.css'
function Footers() {
    return (
        <div>
            
               
            <div className='media1'>
            
                <a href="https://yourwebsite.com" target="_blank" rel="noopener noreferrer">
                    <img className='logo' src={wp} alt="ComboCoding Logo" />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <img className='logo' src={linkedin} alt="ComboCoding LinkedIn Logo" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <img className='logo' src={twitter} alt="ComboCoding Twitter Logo" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <img className='logo' src={Git} alt="ComboCoding GitHub Logo" />
                </a>
                <h6 id='connect'>Connect</h6>
            </div>
        </div>
    )
}

export default Footers






Footers.jsx

